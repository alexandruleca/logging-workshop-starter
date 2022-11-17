const express = require('express');
const dataSource = require('../datasource');

const resourceRoutes = function () {
    const resourceRouter = express.Router();

    resourceRouter.get('/', async (req, res) => {
        const result = await dataSource.resource().getList();
        res.send(result);
    });

    resourceRouter.get('/:id', async (req, res) => {
        const id = req.params.id;
        const result = await dataSource.resource().getById(id);
        res.send(result);
    });

    return resourceRouter;
}

module.exports = resourceRoutes;

