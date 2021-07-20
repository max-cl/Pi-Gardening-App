const sensorsController = require("../controllers/sensors.controller");

module.exports = function (app) {
    app.get("/api/sensors/:id", sensorsController.getSensors);
    app.get("/api/sensors/current-data/:id", sensorsController.getSensorCurrentData);
    app.put("/api/sensors", sensorsController.updateSensor);
    app.put("/api/sensors/update-status", sensorsController.updateStatus);
    app.post("/api/sensors", sensorsController.addSensor);
    app.delete("/api/sensors", sensorsController.deleteSensor);
};
