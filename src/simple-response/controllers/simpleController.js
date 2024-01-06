createItem = (req, res) => {
    res.send('Create a new item');
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