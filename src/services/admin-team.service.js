const prisma = require("../prisma.js");

// Get List Tim Berdasarkan Kompetisi
const getTeamsByCompetition = async (competitionName, page = 1, limit = 10) => {
    // Validate pagination parameters
    if (page < 1) page = 1;
    if (limit < 1) limit = 10;
    if (limit > 100) limit = 100;

    // Calculate pagination values
    const skip = (page - 1) * limit;
    const take = limit;

    // Use transaction to ensure consistency between count and data queries
    const [teams, totalTeams] = await prisma.$transaction([
        // Query 1: Get paginated teams with leader data
        prisma.team.findMany({
            where: {
                competition: {
                    title: {
                        contains: competitionName
                        // Removed mode: 'insensitive' as it's PostgreSQL-specific
                        // MySQL uses case-insensitive collation by default
                    }
                }
            },
            select: {
                id: true,
                team_name: true,
                team_code: true,
                is_verified: true,
                payment_proof_id: true,
                verification_error: true,
                created_at: true,
                competition: {
                    select: {
                        title: true
                    }
                },
                // Only fetch leader member data for performance
                members: {
                    where: {
                        role: 'leader'
                    },
                    select: {
                        role: true,
                        user: {
                            select: {
                                id: true,
                                full_name: true,
                                email: true,
                                phone_number: true,
                                is_registration_complete: true
                            }
                        }
                    }
                },
                // Get total member count separately for performance
                _count: {
                    select: {
                        members: true
                    }
                }
            },
            orderBy: {
                created_at: 'desc'
            },
            skip: skip,
            take: take
        }),
        // Query 2: Get total count for pagination metadata
        prisma.team.count({
            where: {
                competition: {
                    title: {
                        contains: competitionName
                    }
                }
            }
        })
    ]);

    const totalPages = Math.ceil(totalTeams / limit);

    return {
        teams: teams.map(team => ({
            id: team.id,
            team_name: team.team_name,
            team_code: team.team_code,
            is_verified: team.is_verified,
            payment_proof_id: team.payment_proof_id,
            verification_error: team.verification_error,
            competition_name: team.competition.title,
            member_count: team._count.members,
            contact_info: team.members.length > 0 ? team.members[0].user : null, // Safe array access
            created_at: team.created_at
        })),
        pagination: {
            current_page: page,
            total_pages: totalPages,
            total_items: totalTeams,
            items_per_page: limit,
            has_next: page < totalPages,
            has_previous: page > 1
        }
    };
};

// Get Detail Tim dan Anggota
const getTeamDetail = async (teamId) => {
    const team = await prisma.team.findUnique({
        where: { id: teamId },
        select: {
            id: true,
            team_name: true,
            team_code: true,
            is_verified: true,
            payment_proof_id: true,
            verification_error: true,
            created_at: true,
            updated_at: true,
            competition: {
                select: {
                    id: true,
                    title: true,
                    description: true
                }
            },
            members: {
                select: {
                    role: true,
                    kartu_id: true,
                    verification_error: true,
                    user: {
                        select: {
                            id: true,
                            full_name: true,
                            email: true,
                            phone_number: true,
                            id_line: true,
                            id_discord: true,
                            id_instagram: true,
                            ktm_key: true,
                            twibbon_key: true,
                            is_registration_complete: true,
                            pendidikan: true,
                            nama_sekolah: true,
                            jenis_kelamin: true,
                            birth_date: true,
                            created_at: true
                        }
                    }
                },
                orderBy: {
                    role: 'desc' // leader first
                }
            }
        }
    });

    if (!team) {
        return null;
    }

    return {
        id: team.id,
        team_name: team.team_name,
        team_code: team.team_code,
        is_verified: team.is_verified,
        payment_proof_id: team.payment_proof_id,
        verification_error: team.verification_error,
        competition: team.competition,
        members: team.members.map(member => ({
            user_id: member.user.id,
            full_name: member.user.full_name,
            email: member.user.email,
            phone_number: member.user.phone_number,
            id_line: member.user.id_line,
            id_discord: member.user.id_discord,
            id_instagram: member.user.id_instagram,
            ktm_key: member.user.ktm_key,
            twibbon_key: member.user.twibbon_key,
            is_registration_complete: member.user.is_registration_complete,
            pendidikan: member.user.pendidikan,
            nama_sekolah: member.user.nama_sekolah,
            jenis_kelamin: member.user.jenis_kelamin,
            birth_date: member.user.birth_date,
            role: member.role,
            kartu_id: member.kartu_id,
            verification_error: member.verification_error,
            created_at: member.user.created_at
        })),
        created_at: team.created_at,
        updated_at: team.updated_at
    };
};

// Verifikasi Tim
const verifyTeam = async (teamId) => {
    try {
        const team = await prisma.team.findUnique({
            where: { id: teamId },
            select: { id: true, is_verified: true }
        });

        if (!team) {
            throw { status: 404, message: 'Team not found' };
        }

        if (team.is_verified) {
            throw { status: 400, message: 'Team is already verified' };
        }

        const updatedTeam = await prisma.team.update({
            where: { id: teamId },
            data: {
                is_verified: true,
                verification_error: null
            },
            select: {
                id: true,
                team_name: true,
                is_verified: true,
                verification_error: true,
                updated_at: true
            }
        });

        return updatedTeam;
    } catch (error) {
        if (error.code === 'P2025') {
            throw { status: 404, message: 'Team not found' };
        }
        throw error;
    }
};

// Reject Tim
const rejectTeam = async (teamId, reason) => {
    try {
        const team = await prisma.team.findUnique({
            where: { id: teamId },
            select: { id: true, is_verified: true }
        });

        if (!team) {
            throw { status: 404, message: 'Team not found' };
        }

        const updatedTeam = await prisma.team.update({
            where: { id: teamId },
            data: {
                is_verified: false,
                verification_error: reason && reason.trim() !== '' ? reason.trim() : 'Team rejected by admin'
            },
            select: {
                id: true,
                team_name: true,
                is_verified: true,
                verification_error: true,
                updated_at: true
            }
        });

        return updatedTeam;
    } catch (error) {
        if (error.code === 'P2025') {
            throw { status: 404, message: 'Team not found' };
        }
        throw error;
    }
};

// Update Status Complete/Incomplete Anggota Tim
const updateMemberStatus = async (memberId, isComplete) => {
    try {
        // First check if the user exists and is a team member
        const teamMember = await prisma.team_member.findFirst({
            where: { user_id: memberId },
            select: { user_id: true }
        });

        if (!teamMember) {
            throw { status: 404, message: 'Team member not found' };
        }

        const updatedUser = await prisma.user.update({
            where: { id: memberId },
            data: { is_registration_complete: isComplete },
            select: {
                id: true,
                full_name: true,
                email: true,
                is_registration_complete: true,
                updated_at: true
            }
        });

        return updatedUser;
    } catch (error) {
        if (error.code === 'P2025') {
            throw { status: 404, message: 'User not found' };
        }
        throw error;
    }
};

module.exports = {
    getTeamsByCompetition,
    getTeamDetail,
    verifyTeam,
    rejectTeam,
    updateMemberStatus
}; 