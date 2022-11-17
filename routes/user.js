const express = require('express');
const dataSource = require('../datasource');
const userRoutes = function () {
    const userRouter = express.Router();

    userRouter.get('/', async (req, res) => {
        const result = await dataSource.user().getList();
        res.send(result);
    });

    userRouter.get('/:id', async (req, res) => {
        const id = req.params.id;
        const result = await dataSource.user().getById(id);
        res.send(result);
    });

    userRouter.post('/', async (req, res) => {
        const payload = req.body;
        const result = await dataSource.user().create(payload);
        res.send(result);
    });

    userRouter.put('/', async (req, res) => {
        const payload = req.body;
        const result = await dataSource.user().update(payload);
        res.send(result);
    });

    userRouter.delete('/:id', async (req, res) => {
        const id = req.params.id;
        const result = await dataSource.user().delete(id);
        res.send(result);
    });

    return userRouter;
}

module.exports = userRoutes;

