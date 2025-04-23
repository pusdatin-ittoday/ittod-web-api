import prisma from "../prisma.mjs";

export async function changeUsername(oldUsername, newUsername) {
    try {
        const result = await prisma.$transaction(async prisma => {
            const existingUser = await prisma.user.findUnique({
                where: { username: newUsername },
            });
            if (existingUser) {
                throw new Error("Username is already taken.");
            }

            await prisma.user.update({
                where: { username: oldUsername },
                data: { username: newUsername },
            });

            await prisma.user_identity.update({
                where: { username: oldUsername },
                data: { username: newUsername },
            });

            return { success: true, message: "Username updated successfully." };
        });

        return result;
    } catch (error) {
        console.error(error);
        return { success: false, message: error.message };
    }
}
