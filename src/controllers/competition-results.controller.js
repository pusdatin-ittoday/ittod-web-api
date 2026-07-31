const prisma = require("../prisma.js");

const FINALIST_KEYWORD  = "finalis";
const CHAMPION_KEYWORD  = "juara";

/**
 * Cek apakah waktu pengumuman sudah tiba berdasarkan keyword di title timeline.
 * Returns { finalistRevealed, championRevealed }
 *
 * Note: MySQL DATETIME tidak menyimpan timezone. Prisma mengembalikannya sebagai
 * UTC Date object, sehingga perlu di-offset ke timezone lokal server (Asia/Jakarta WIB = UTC+7).
 */
async function checkRevealTime(competitionId) {
    const now = new Date();

    const timelines = await prisma.event_timeline.findMany({
        where: { event_id: competitionId },
        select: { title: true, date: true },
    });

    let finalistRevealed  = false;
    let championRevealed  = false;

    for (const tl of timelines) {
        const titleLower = (tl.title || "").toLowerCase();

        // Prisma membaca MySQL DATETIME as UTC — tapi value sebenarnya WIB (UTC+7).
        // Koreksi: geser tlDate mundur 7 jam agar perbandingan dengan now() (UTC) akurat.
        const tlDateRaw  = new Date(tl.date);
        const WIB_OFFSET = 7 * 60 * 60 * 1000; // ms
        const tlDate     = new Date(tlDateRaw.getTime() - WIB_OFFSET);

        if (titleLower.includes(FINALIST_KEYWORD)  && tlDate <= now) finalistRevealed  = true;
        if (titleLower.includes(CHAMPION_KEYWORD)  && tlDate <= now) championRevealed  = true;
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
            select: { id: true, title: true, slug: true },
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
            members:      team.members.map((m) => ({
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

        const finalists  = finalistTeams
            .filter((t) => championRevealed ? t.rank === null : true)
            .map(formatTeam);

        return res.status(200).json({
            success:            true,
            data: {
                finalist_revealed:  finalistRevealed,
                champion_revealed:  championRevealed,
                finalists,
                champions,
            },
        });
    } catch (error) {
        console.error("Error fetching competition results:", error);
        return res.status(500).json({ success: false, error: "Internal server error" });
    }
};

module.exports = { getCompetitionResultsController };
