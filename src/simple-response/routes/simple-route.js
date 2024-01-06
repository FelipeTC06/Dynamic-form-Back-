const express = require('express');
const simpleRouter = express.Router();
const simpleController = require('../controllers/simpleController')

simpleRouter.post('/', simpleController.createItem);
simpleRouter.get('/', simpleController.getAllItems);
simpleRouter.get('/:id', simpleController.getItem);
simpleRouter.put('/:id', simpleController.updateItem);
simpleRouter.delete('/:id', simpleController.deleteItem);

module.exports = simpleRouter;