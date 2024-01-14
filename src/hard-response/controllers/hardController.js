const HardResponse = require('../models/userHModel');
const formatResponse = require('../helpers/format.Hard');

createHard = async (req, res) => {
    try {
        const { personalInfo, workInfo } = req.body;
        const response = await HardResponse.create({
            ...personalInfo,
            ...workInfo
        });

        const formattedResponse = formatResponse(response.toJSON());
        res.status(201).send(formattedResponse);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

getAllHard = async (req, res) => {
    try {
        const responses = await HardResponse.findAll();
        const formattedResponses = responses.map(response => formatResponse(response.toJSON()));
        res.status(200).send(formattedResponses);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


getHard = async (req, res) => {
    try {
        const response = await HardResponse.findByPk(req.params.id);
        if (response) {
            const formattedResponse = formatResponse(response.toJSON());
            res.status(200).send(formattedResponse);
        } else {
            res.status(404).send('HardResponse not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};


updateHard = async (req, res) => {
    try {
        const { personalInfo, workInfo } = req.body;
        const response = await HardResponse.findByPk(req.params.id);
        if (response) {
            await response.update({
                ...personalInfo,
                ...workInfo
            });
            const formattedResponse = formatResponse(response.toJSON());
            res.status(200).send(formattedResponse);
        } else {
            res.status(404).send('HardResponse not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};


deleteHard = async (req, res) => {
    try {
        const response = await HardResponse.findByPk(req.params.id);
        if (response) {
            await response.destroy();
            res.status(200).send('HardResponse deleted');
        } else {
            res.status(404).send('HardResponse not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};


module.exports = { createHard, getAllHard, getHard, updateHard, deleteHard };