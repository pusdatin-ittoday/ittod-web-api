const session = require("express-session");
const prisma = require("../prisma.js");

class PrismaSessionStore extends session.Store {
    static async deleteExpiredSessions() {
        try {
            const now = Math.floor(Date.now() / 1000); // Unix timestamp
            await prisma.sessions.deleteMany({
                where: { last_activity: { lt: now } },
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
            await prisma.sessions.update({
                where: { id: sid },
                data: { last_activity: Math.floor(expires.getTime() / 1000) },
            });
            callback(null);
        } catch (err) {
            callback(err);
        }
    }

    async get(sid, callback) {
        try {
            const sessionRecord = await prisma.sessions.findUnique({
                where: { id: sid },
            });
            if (!sessionRecord) return callback(null, null);
            // Parse payload JSON
            let data = null;
            try {
                data = JSON.parse(sessionRecord.payload);
            } catch (e) {
                data = sessionRecord.payload;
            }
            return callback(null, data);
        } catch (err) {
            return callback(err);
        }
    }

    async set(sid, sessionData, callback) {
        try {
            const payload = JSON.stringify(sessionData);
            const expires = sessionData.cookie?.expires
                ? new Date(sessionData.cookie.expires)
                : new Date(Date.now() + 24 * 60 * 60 * 1000);
            const last_activity = Math.floor(expires.getTime() / 1000);
            await prisma.sessions.upsert({
                where: { id: sid },
                update: { payload, last_activity },
                create: { 
                    id: sid, 
                    payload, 
                    last_activity,
                    user_id: null,
                    ip_address: null,
                    user_agent: null,
                },
            });
            callback(null);
        } catch (err) {
            callback(err);
        }
    }

    async destroy(sid, callback) {
        try {
            await prisma.sessions.delete({
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

module.exports = PrismaSessionStore;
