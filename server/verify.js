module.exports = {
    user: (req, res, next) => {
        if (!req.session.user) return res.status(403).send("You must be logged in");
        next();
    }
}