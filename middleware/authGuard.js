const authGuard = (req, res, next) => {
    const authToken = req.headers.authorization;
    if (!authToken) {
        res.status(401).send({
            message: ""
        });
        return
    }
    next()
};

module.exports = authGuard;