module.exports = ({ apiKey, fileID }) => ({
    figma: {
        fileID,
        apiKey,
        tokens: {
            colors: {
                frame: 'Colors',
                formatter,
            },
        },
    },
});