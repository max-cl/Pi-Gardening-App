const mqttController = require("../controllers/mqtt.controller");

module.exports = function (app) {
    app.post("/api/mqtt", mqttController.publishMessageToDevice);
};
