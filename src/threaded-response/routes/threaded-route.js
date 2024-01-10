const express = require('express');
const threadedRouter = express.Router();
const threadedController = require('../controllers/threadedController')

threadedRouter.post('/', threadedController.createThreaded);
threadedRouter.get('/', threadedController.getAllThreaded);
threadedRouter.get('/:id', threadedController.getThreaded);
threadedRouter.put('/:id', threadedController.updateThreaded);
threadedRouter.delete('/:id', threadedController.deleteThreaded);

module.exports = threadedRouter;