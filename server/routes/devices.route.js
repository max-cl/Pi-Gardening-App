const devicesController = require("../controllers/devices.controller");

module.exports = function (app) {
    app.get("/api/devices", devicesController.getDevices);
    app.post("/api/devices", devicesController.addDevice);
    app.put("/api/devices/:id", devicesController.updateDevice);
    app.delete("/api/devices/:id", devicesController.deleteDevice);
};
