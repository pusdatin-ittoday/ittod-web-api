import session from "express-session";
import prisma from "../prisma.mjs";

class PrismaSessionStore extends session.Store {
    async get(sid, callback) {
        try {
            const session = await prisma.session.findUnique({
                where: { id: sid },
            });
            if (!session) return callback(null, null);
            return callback(null, JSON.parse(session.data));
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