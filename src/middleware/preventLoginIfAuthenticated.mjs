export default function preventLoginIfAuthenticated(req, res, next) {
    if (req.isAuthenticated?.()) {
        return res.status(403).send("Already logged in.");
    }
    next();
}