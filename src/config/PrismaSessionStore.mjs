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
                : new Date(Date.now() + 24 * 60 * 60 * 1000);
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
            const sessionRecord = await prisma.session.findUnique({
                where: { id: sid },
            });
            if (!sessionRecord) return callback(null, null);
            return callback(null, sessionRecord.data);
        } catch (err) {
            return callback(err);
        }
    }

    async set(sid, sessionData, callback) {
        try {
            const expires = sessionData.cookie?.expires
                ? new Date(sessionData.cookie.expires)
                : new Date(Date.now() + 24 * 60 * 60 * 1000);
            await prisma.session.upsert({
                where: { id: sid },
                update: { data: sessionData, expires },
                create: { id: sid, data: sessionData, expires },
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
            if (err.code === "P2025") {
                return callback(null); // safe to ignore
            }
            callback(err);
        }
    }
}

export default PrismaSessionStore;
