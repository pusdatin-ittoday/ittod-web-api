const prisma = require("../prisma.js");
const crypto = require("crypto");

// Create new Announcement
const createAnnouncement = async ({ title, description, event_id, is_pinned = false, author_id }) => {
    if (!title || title.trim() === "") {
        throw { status: 400, message: "Title is required" };
    }
    if (!description || description.trim() === "") {
        throw { status: 400, message: "Description is required" };
    }
    if (!author_id) {
        throw { status: 400, message: "Author ID is required" };
    }

    if (event_id) {
        const eventExists = await prisma.event.findUnique({ where: { id: event_id } });
        if (!eventExists) throw { status: 404, message: "Associated event not found" };
    }

    const announcementId = crypto.randomUUID();

    const created = await prisma.event_announcement.create({
        data: {
            id: announcementId,
            title: title.trim(),
            description: description.trim(),
            event_id: event_id || null,
            is_pinned: Boolean(is_pinned),
            author_id,
        },
        select: {
            id: true,
            title: true,
            description: true,
            is_pinned: true,
            event_id: true,
            created_at: true,
            updated_at: true,
        },
    });

    return { message: "Announcement created successfully", data: created };
};

// Update existing Announcement
const updateAnnouncement = async (announcementId, data) => {
    const existing = await prisma.event_announcement.findUnique({ where: { id: announcementId } });
    if (!existing) throw { status: 404, message: "Announcement not found" };

    const updateData = {};
    if (data.title && data.title.trim() !== "") updateData.title = data.title.trim();
    if (data.description && data.description.trim() !== "") updateData.description = data.description.trim();
    if (data.event_id !== undefined) updateData.event_id = data.event_id || null;
    if (data.is_pinned !== undefined) updateData.is_pinned = Boolean(data.is_pinned);

    const updated = await prisma.event_announcement.update({
        where: { id: announcementId },
        data: updateData,
        select: {
            id: true,
            title: true,
            description: true,
            is_pinned: true,
            event_id: true,
            updated_at: true,
        },
    });

    return { message: "Announcement updated successfully", data: updated };
};

// Delete Announcement
const deleteAnnouncement = async (announcementId) => {
    const existing = await prisma.event_announcement.findUnique({ where: { id: announcementId } });
    if (!existing) throw { status: 404, message: "Announcement not found" };

    await prisma.event_announcement.delete({ where: { id: announcementId } });
    return { message: "Announcement deleted successfully", announcement_id: announcementId };
};

module.exports = {
    createAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
};
