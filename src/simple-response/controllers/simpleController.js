const SimpleResponse = require('../models/userModel');

createItem = async (req, res) => {
    try {
        const simpleResponse = await SimpleResponse.create(req.body);
        res.status(201).send(simpleResponse);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

getAllItems = async (req, res) => {
    try {
        const items = await SimpleResponse.findAll();
        res.status(200).send(items);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


getItem = async (req, res) => {
    try {
        const item = await SimpleResponse.findByPk(req.params.id);
        if (item) {
            res.status(200).send(item);
        } else {
            res.status(404).send("Item not found");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};


updateItem = async (req, res) => {
    try {
        const item = req.body;
        const updated = await SimpleResponse.update(item, {
            where: { id: req.params.id }
        });
        if (updated[0] === 1) {
            res.status(200).send({ message: "Item updated successfully" });
        } else {
            res.status(404).send("Item not found");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};


deleteItem = async (req, res) => {
    try {
        const deleted = await SimpleResponse.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(200).send({ message: "Item deleted successfully" });
        } else {
            res.status(404).send("Item not found");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};


module.exports = { createItem, getAllItems, getItem, updateItem, deleteItem };