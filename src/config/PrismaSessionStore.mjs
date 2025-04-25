import session from "express-session";
import prisma from "../prisma.mjs";

class PrismaSessionStore extends session.Store {
    static async deleteExpiredSessions() {
        try {
            const now = new Date();
            await prisma.session.deleteMany({
                where: { expires: { lt: now } },
            });
        } catch (err) {
            console.error("Failed to clean up expired sessions:", err);
        }
    }

    async touch(sid, session, callback) {
        try {
            const expires = session.cookie?.expires
                ? new Date(session.cookie.expires)
                : new Date(Date.now() + 24 * 60 * 60 * 1000); // Default to 1 day if expires is invalid
            await prisma.session.update({
                where: { id: sid },
                data: { expires },
            });
            callback(null);
        } catch (err) {
            callback(err);
        }
    }

    async get(sid, callback) {
        try {
            const session = await prisma.session.findUnique({
                where: { id: sid },
            });
            if (!session) return callback(null, null);
            try {
                return callback(null, JSON.parse(session.data));
            } catch (err) {
                return callback(
                    new Error(`Failed to parse session data: ${err.message}`)
                );
            }
        } catch (err) {
            return callback(err);
        }
    }

    async set(sid, sessionData, callback) {
        try {
            const expires = new Date(sessionData.cookie.expires);
            const data = JSON.stringify(sessionData);
            await prisma.session.upsert({
                where: { id: sid },
                update: { data, expires },
                create: { id: sid, data, expires },
            });
            callback(null);
        } catch (err) {
            callback(err);
        }
    }

    async destroy(sid, callback) {
        try {
            await prisma.session.delete({
                where: { id: sid },
            });
            callback(null);
        } catch (err) {
            callback(err);
        }
    }
}

export default PrismaSessionStore;
