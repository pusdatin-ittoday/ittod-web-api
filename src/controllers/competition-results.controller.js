const prisma = require("../prisma.js");

const FINALIST_KEYWORD  = "finalis";
const CHAMPION_KEYWORD  = "juara";

/**
 * Cek apakah waktu pengumuman sudah tiba berdasarkan timeline terpilih atau keyword di title timeline.
 * Returns { finalistRevealed, championRevealed }
 *
 * Note: MySQL DATETIME tidak menyimpan timezone. Prisma mengembalikannya sebagai
 * UTC Date object, sehingga perlu di-offset ke timezone lokal server (Asia/Jakarta WIB = UTC+7).
 */
async function checkRevealTime(competitionId, eventData = null) {
    const now = new Date();

    const eventTimelines = await prisma.event_timeline.findMany({
        where: { event_id: competitionId },
        select: { id: true, title: true, date: true },
    });

    const globalTimelines = await prisma.competition_timeline.findMany({
        select: { id: true, title: true, start_date: true },
    });

    // Gabungkan timeline event spesifik dan timeline global
    const allTimelines = [
        ...eventTimelines.map(t => ({ id: t.id, title: t.title, date: t.date })),
        ...globalTimelines.map(gt => ({ id: gt.id, title: gt.title, date: gt.start_date }))
    ];

    let finalistRevealed  = false;
    let championRevealed  = false;

    // Helper untuk konversi date WIB (UTC+7) ke UTC Date object
    const isTimelineReached = (rawDate) => {
        if (!rawDate) return false;
        const tlDateRaw  = new Date(rawDate);
        const WIB_OFFSET = 7 * 60 * 60 * 1000; // ms
        const tlDate     = new Date(tlDateRaw.getTime() - WIB_OFFSET);
        return tlDate <= now;
    };

    let finalistTimelineId = null;
    let winnerTimelineId   = null;

    let hasGlobalFinalistSetting = false;
    let hasGlobalWinnerSetting   = false;

    // 1. Coba baca dari tabel settings global terlebih dahulu
    try {
        const globalSettings = await prisma.settings.findMany({
            where: {
                key: { in: ["finalist_timeline_id", "winner_timeline_id"] }
            }
        });
        const finalistSetting = globalSettings.find(s => s.key === "finalist_timeline_id");
        const winnerSetting   = globalSettings.find(s => s.key === "winner_timeline_id");

        if (finalistSetting !== undefined) {
            hasGlobalFinalistSetting = true;
            finalistTimelineId = finalistSetting.value || null;
        }
        if (winnerSetting !== undefined) {
            hasGlobalWinnerSetting = true;
            winnerTimelineId = winnerSetting.value || null;
        }
    } catch (e) {
        // Ignored if settings query fails
    }

    // 2. Jika belum ada di settings, coba baca dari kolom event via raw SQL
    if (!hasGlobalFinalistSetting || !hasGlobalWinnerSetting) {
        try {
            const rawEvent = await prisma.$queryRawUnsafe(
                "SELECT finalist_timeline_id, winner_timeline_id FROM `event` WHERE id = ?",
                competitionId
            );
            if (rawEvent && rawEvent.length > 0) {
                if (!hasGlobalFinalistSetting && rawEvent[0].finalist_timeline_id) {
                    finalistTimelineId = rawEvent[0].finalist_timeline_id;
                }
                if (!hasGlobalWinnerSetting && rawEvent[0].winner_timeline_id) {
                    winnerTimelineId = rawEvent[0].winner_timeline_id;
                }
            }
        } catch (e) {
            // Ignored if column doesn't exist
        }
    }

    // 3. Cek Finalist Timeline
    if (finalistTimelineId) {
        const chosenTimeline = allTimelines.find(t => t.id === finalistTimelineId);
        if (chosenTimeline) {
            finalistRevealed = isTimelineReached(chosenTimeline.date);
        }
    } else if (!hasGlobalFinalistSetting) {
        // Fallback ke keyword HANYA jika setting jadwal belum pernah diatur
        for (const tl of allTimelines) {
            const titleLower = (tl.title || "").toLowerCase();
            if (titleLower.includes(FINALIST_KEYWORD) && isTimelineReached(tl.date)) {
                finalistRevealed = true;
                break;
            }
        }
    }

    // 4. Cek Champion / Winner Timeline
    if (winnerTimelineId) {
        const chosenTimeline = allTimelines.find(t => t.id === winnerTimelineId);
        if (chosenTimeline) {
            championRevealed = isTimelineReached(chosenTimeline.date);
        }
    } else if (!hasGlobalWinnerSetting) {
        // Fallback ke keyword HANYA jika setting jadwal belum pernah diatur
        for (const tl of allTimelines) {
            const titleLower = (tl.title || "").toLowerCase();
            if (titleLower.includes(CHAMPION_KEYWORD) && isTimelineReached(tl.date)) {
                championRevealed = true;
                break;
            }
        }
    }

    return { finalistRevealed, championRevealed };
}

/**
 * GET /api/events/:id/results
 * Mengembalikan daftar finalis dan juara berdasarkan jadwal timeline.
 * Tanpa autentikasi (public endpoint).
 */
const getCompetitionResultsController = async (req, res) => {
    try {
        const { id: idOrSlug } = req.params;

        // Resolve event id
        const event = await prisma.event.findFirst({
            where: {
                OR: [{ id: idOrSlug }, { slug: idOrSlug }],
                type: "competition",
            },
            select: { 
                id: true, 
                title: true, 
                slug: true, 
                participation_type: true,
            },
        });

        if (!event) {
            return res.status(404).json({ success: false, error: "Competition not found" });
        }

        const { finalistRevealed, championRevealed } = await checkRevealTime(event.id);

        if (!finalistRevealed) {
            return res.status(200).json({
                success: true,
                data: {
                    finalist_revealed:  false,
                    champion_revealed:  false,
                    finalists:          [],
                    champions:          [],
                    message:            "Pengumuman finalis belum tersedia.",
                },
            });
        }

        // Query finalis
        const finalistTeams = await prisma.team.findMany({
            where: {
                competition_id: event.id,
                is_finalist:    true,
                is_verified:    'approved',
            },
            orderBy: [
                { rank: "asc" },
                { team_name: "asc" },
            ],
            select: {
                id:          true,
                team_name:   true,
                is_finalist: true,
                rank:        true,
                members: {
                    select: {
                        role: true,
                        user: {
                            select: {
                                full_name:    true,
                                nama_sekolah: true,
                                pendidikan:   true,
                            },
                        },
                    },
                },
                submissions: {
                    select: {
                        submission_object: true,
                    },
                    take: 1,
                },
            },
        });

        // Format data — sembunyikan field sensitif
        const formatTeam = (team) => ({
            id:           team.id,
            team_name:    team.team_name,
            rank:         team.rank ?? null,
            institution:  team.members?.[0]?.user?.nama_sekolah ?? null,
            members:      (team.members || []).map((m) => ({
                name:         m.user?.full_name ?? "–",
                role:         m.role,
                institution:  m.user?.nama_sekolah ?? null,
                pendidikan:   m.user?.pendidikan ?? null,
            })),
            submission:   team.submissions?.[0]?.submission_object ?? null,
        });

        const champions  = championRevealed
            ? finalistTeams.filter((t) => t.rank !== null).map(formatTeam)
            : [];

        // Juara hanya dianggap tayang jika jadwal tiba DAN ada tim yang sudah diatur sebagai juara
        const isChampionActuallyRevealed = championRevealed && champions.length > 0;

        const finalists  = finalistTeams
            .filter((t) => isChampionActuallyRevealed ? t.rank === null : true)
            .map(formatTeam);

        return res.status(200).json({
            success:            true,
            data: {
                finalist_revealed:  finalistRevealed,
                champion_revealed:  isChampionActuallyRevealed,
                is_individual:      event.participation_type === "individual",
                finalists,
                champions,
            },
        });
    } catch (error) {
        console.error("Error fetching competition results:", error);
        return res.status(500).json({ success: false, error: "Internal server error" });
    }
};

/**
 * GET /api/competitions/results
 * Mengembalikan hasil seluruh cabang kompetisi sekaligus beserta status reveal global.
 */
const getAllCompetitionResultsController = async (req, res) => {
    try {
        const competitions = await prisma.event.findMany({
            where: { type: "competition" },
            select: {
                id: true,
                slug: true,
                title: true,
                description: true,
                participation_type: true,
                logo_url: true,
            },
            orderBy: { title: "asc" },
        });

        let anyFinalistRevealed = false;
        let anyChampionRevealed = false;
        const results = [];

        for (const comp of competitions) {
            const { finalistRevealed, championRevealed } = await checkRevealTime(comp.id);

            let champions = [];
            let finalists = [];

            if (finalistRevealed) {
                anyFinalistRevealed = true;

                const finalistTeams = await prisma.team.findMany({
                    where: {
                        competition_id: comp.id,
                        is_finalist:    true,
                        is_verified:    'approved',
                    },
                    orderBy: [
                        { rank: "asc" },
                        { team_name: "asc" },
                    ],
                    select: {
                        id:          true,
                        team_name:   true,
                        is_finalist: true,
                        rank:        true,
                        members: {
                            select: {
                                role: true,
                                user: {
                                    select: {
                                        full_name:    true,
                                        nama_sekolah: true,
                                        pendidikan:   true,
                                    },
                                },
                            },
                        },
                        submissions: {
                            select: {
                                submission_object: true,
                            },
                            take: 1,
                        },
                    },
                });

                const formatTeam = (team) => ({
                    id:           team.id,
                    team_name:    team.team_name,
                    rank:         team.rank ?? null,
                    institution:  team.members?.[0]?.user?.nama_sekolah ?? null,
                    members:      (team.members || []).map((m) => ({
                        name:         m.user?.full_name ?? "–",
                        role:         m.role,
                        institution:  m.user?.nama_sekolah ?? null,
                        pendidikan:   m.user?.pendidikan ?? null,
                    })),
                    submission:   team.submissions?.[0]?.submission_object ?? null,
                });

                champions = championRevealed
                    ? finalistTeams.filter((t) => t.rank !== null).map(formatTeam)
                    : [];

                const isCompChampionRevealed = championRevealed && champions.length > 0;
                if (isCompChampionRevealed) anyChampionRevealed = true;

                finalists = finalistTeams
                    .filter((t) => isCompChampionRevealed ? t.rank === null : true)
                    .map(formatTeam);
            }

            const isCompChampionRevealed = championRevealed && champions.length > 0;

            results.push({
                id: comp.id,
                slug: comp.slug,
                title: comp.title,
                description: comp.description,
                participation_type: comp.participation_type,
                logo_url: comp.logo_url,
                is_individual: comp.participation_type === "individual",
                finalist_revealed: finalistRevealed,
                champion_revealed: isCompChampionRevealed,
                champions,
                finalists,
            });
        }

        return res.status(200).json({
            success: true,
            data: {
                finalist_revealed: anyFinalistRevealed,
                champion_revealed: anyChampionRevealed,
                competitions: results,
            },
        });
    } catch (error) {
        console.error("Error fetching all competition results:", error);
        return res.status(500).json({ success: false, error: "Internal server error" });
    }
};

module.exports = {
    getCompetitionResultsController,
    getAllCompetitionResultsController,
};
