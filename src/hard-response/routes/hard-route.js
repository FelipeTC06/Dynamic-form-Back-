const express = require('express');
const hardRouter = express.Router();
const hardController = require('../controllers/hardController')

hardRouter.post('/', hardController.createhard);
hardRouter.get('/', hardController.getAllhard);
hardRouter.get('/:id', hardController.gethard);
hardRouter.put('/:id', hardController.updatehard);
hardRouter.delete('/:id', hardController.deletehard);

module.exports = hardRouter;