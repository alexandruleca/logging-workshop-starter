const express = require('express');
const dataSource = require("../datasource");
const authRoutes = function () {
    const authRouter = express.Router();

    authRouter.post('/login', async (req, res) => {
        const payload = req.body;
        const result = await dataSource.auth().login(payload);
        res.send(result);
    });

    authRouter.post('/register', async (req, res) => {
        const payload = req.body;
        const result = await dataSource.auth().register(payload);
        res.send(result);
    });

    return authRouter;
}

module.exports = authRoutes;

