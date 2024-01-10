const ThreadedResponse = require('../models/userTModel');
const formatResponse = require('../helpers/format.TreadedSimple');

createThreaded = async (req, res) => {
    try {
        const { personalInfo, workInfo } = req.body;
        const response = await ThreadedResponse.create({
            ...personalInfo,
            ...workInfo
        });

        const formattedResponse = formatResponse(response.toJSON());
        res.status(201).send(formattedResponse);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

getAllThreaded = async (req, res) => {
    try {
        const responses = await ThreadedResponse.findAll();
        const formattedResponses = responses.map(response => formatResponse(response.toJSON()));
        res.status(200).send(formattedResponses);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


getThreaded = async (req, res) => {
    try {
        const response = await ThreadedResponse.findByPk(req.params.id);
        if (response) {
            const formattedResponse = formatResponse(response.toJSON());
            res.status(200).send(formattedResponse);
        } else {
            res.status(404).send('ThreadedResponse not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};


updateThreaded = async (req, res) => {
    try {
        const { personalInfo, workInfo } = req.body;
        const response = await ThreadedResponse.findByPk(req.params.id);
        if (response) {
            await response.update({
                ...personalInfo,
                ...workInfo
            });
            const formattedResponse = formatResponse(response.toJSON());
            res.status(200).send(formattedResponse);
        } else {
            res.status(404).send('ThreadedResponse not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};


deleteThreaded = async (req, res) => {
    try {
        const response = await ThreadedResponse.findByPk(req.params.id);
        if (response) {
            await response.destroy();
            res.status(200).send('ThreadedResponse deleted');
        } else {
            res.status(404).send('ThreadedResponse not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};


module.exports = { createThreaded, getAllThreaded, getThreaded, updateThreaded, deleteThreaded };