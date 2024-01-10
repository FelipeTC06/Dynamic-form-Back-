function formatResponse(data) {
    const personalInfo = {};
    const workInfo = {};

    Object.keys(data).forEach(key => {
        if (key.startsWith('per_')) {
            personalInfo[key.replace('per_', '')] = data[key];
        } else if (key.startsWith('wor_')) {
            workInfo[key.replace('wor_', '')] = data[key];
        }
    });

    return { personalInfo, workInfo };
}

module.exports = formatResponse;
