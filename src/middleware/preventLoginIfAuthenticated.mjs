export default function preventLoginIfAuthenticated(req, res, next) {
    if (req.isAuthenticated && req.isAuthenticated()) {
        return res.status(400).send("Already logged in.");
    }
    next();
}