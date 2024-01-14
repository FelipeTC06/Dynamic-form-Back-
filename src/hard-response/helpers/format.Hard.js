function formatResponse(data) {
    const id = data.id;
    const personalInfo = {};
    const workInfo = {};

    Object.keys(data).forEach(key => {
        if (key.startsWith('per_')) {
            personalInfo[key] = data[key];
        } else if (key.startsWith('wor_')) {
            workInfo[key] = data[key];
        }
    });

    return { id, personalInfo, workInfo };
}

module.exports = formatResponse;
