const mqttHandler = require("../utils/mqtt-handler");

const mqttClient = new mqttHandler();
mqttClient.connect();

exports.publishMessageToDevice = (req, res, next) => {
    const { topic, message } = req.body;
    mqttClient.sendMessage(topic, message);
    res.status(200).json({
        statusCode: 200,
        message: `Topic ${topic} was executed successfully`,
    });
};
