/**
 * @deprecated This service is deprecated. Please use the auth service instead
 * for user management functionality.
 */

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

            // Use a transaction to ensure both updates succeed or both fail atomically
            await prisma.$transaction([
                prisma.user.update({
                    where: { username: oldUsername },
                    data: { username: newUsername },
                }),
                prisma.user_identity.update({
                    where: { username: oldUsername },
                    data: { username: newUsername },
                }),
            ]);

            return { success: true, message: "Username updated successfully." };
        });

        return result;
    } catch (error) {
        console.error(error);
        return { success: false, message: error.message };
    }
}
