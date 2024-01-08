const SimpleResponse = require('../models/userModel');

createItem = async (req, res) => {
    try {
        const simpleResponse = await SimpleResponse.create(req.body);
        res.status(201).send(simpleResponse);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

getAllItems = (req, res) => {
    res.send('List of all items');
};

getItem = (req, res) => {
    res.send(`Get item with id ${req.params.id}`);
};

updateItem = (req, res) => {
    res.send(`Update item with id ${req.params.id}`);
};

deleteItem = (req, res) => {
    res.send(`Delete item with id ${req.params.id}`);
};

module.exports = { createItem, getAllItems, getItem, updateItem, deleteItem };