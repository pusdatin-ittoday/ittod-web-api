async function checkUserCompetitionLimit(prismaClient, userId) {
    const userCompetitionsCount = await prismaClient.team_member
        .groupBy({
            by: ["team_id"],
            where: { user_id: userId },
            _count: {
                team_id: true,
            },
        })
        .then(groups => new Set(groups.map(group => group.team_id)).size);

    if (userCompetitionsCount >= 2) {
        throw {
            status: 403,
            message: "You can only participate in at most 2 competitions",
        };
    }
}

module.exports = { checkUserCompetitionLimit };
