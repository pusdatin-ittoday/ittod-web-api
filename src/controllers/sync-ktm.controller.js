const { syncKtmPrisma } = require("../services/sync-ktm.service");

const syncKtm = async (req, res, next) => {
    try {
        const result = await syncKtmPrisma();
        res.status(201).json(result);
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
};

module.exports = { syncKtm };
