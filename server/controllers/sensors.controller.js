const { ObjectId } = require("mongodb");
const { connectToDatabase } = require("../utils/mongodb");

exports.getSensors = async (req, res, next) => {
    try {
        const { db } = await connectToDatabase();
        const { id } = req.params;
        const devices = await db
            .collection("devices")
            .find({
                _id: ObjectId(`${id}`),
            })
            .toArray();

        if (devices.length > 0) {
            console.log("DATA: ", devices);
            res.status(200).json({
                data: { sensors: devices[0].sensors, id },
                statusCode: 200,
                message: "Sensor data successfully",
            });
        } else {
            console.log("There is not sensors data for this device");
            res.status(404).send("There is not sensors data for this device");
        }
    } catch (e) {
        console.error(e);
    }
};

exports.addSensor = async (req, res, next) => {
    try {
        const { db } = await connectToDatabase();
        const { deviceId, newSensor } = req.body;
        const newSensorId = ObjectId();
        const added = await db.collection("devices").update(
            { _id: ObjectId(`${deviceId}`) },
            {
                $push: {
                    sensors: { ...newSensor, _id: newSensorId },
                },
            }
        );
        console.log("🚀 ~ sensor added", added);
        res.status(200).json({
            data: { ...newSensor, _id: newSensorId },
            statusCode: 200,
            message: "Sensor has inserted successfully",
        });
    } catch (e) {
        console.error(e);
    }
};

exports.updateSensor = async (req, res, next) => {
    try {
        const { db } = await connectToDatabase();
        const { deviceId, sensor } = req.body;
        const updated = await db.collection("devices").update(
            {
                _id: ObjectId(`${deviceId}`),
                "sensors._id": ObjectId(`${sensor._id}`),
            },
            {
                $set: {
                    "sensors.$.name": sensor.name,
                    "sensors.$.type": sensor.type,
                    "sensors.$.icon": sensor.icon,
                    "sensors.$.signValue": sensor.signValue,
                    "sensors.$.status": sensor.status,
                },
            }
        );

        console.log("updated sensor: ", updated);
        res.status(200).json({ data: updated, statusCode: 200, message: "Sensor has updated successfully" });
    } catch (e) {
        console.error(e);
    }
};

exports.updateStatus = async (req, res, next) => {
    try {
        const { db } = await connectToDatabase();
        const { deviceId, sensor } = req.body;
        console.log("UpdateSensorStatus: ", { deviceId, sensor });
        const updated = await db.collection("devices").update(
            {
                _id: ObjectId(`${deviceId}`),
                "sensors._id": ObjectId(`${sensor._id}`),
            },
            {
                $set: {
                    "sensors.$.status": sensor.status,
                },
            }
        );

        console.log("updated sensor: ", updated);
        res.status(200).json({ data: updated, statusCode: 200, message: "SensorStatus has updated successfully" });
    } catch (e) {
        console.error(e);
    }
};

exports.deleteSensor = async (req, res, next) => {
    try {
        const { db } = await connectToDatabase();
        const { deviceId, sensorId } = req.body;

        db.collection("devices").update(
            { _id: ObjectId(`${deviceId}`) },
            { $pull: { sensors: { _id: ObjectId(`${sensorId}`) } } }
        );

        res.status(200).json({
            message: `Removed Sensor Id: ${sensorId} from device Id: ${deviceId}`,
        });
    } catch (e) {
        console.error(e);
    }
};

exports.getSensorCurrentData = async (req, res, next) => {
    try {
        const { db } = await connectToDatabase();
        const { id } = req.params;

        const dataDevice = await db
            .collection("devices")
            .find({ _id: ObjectId(`${id}`) })
            .toArray();

        const realTimeData = await db
            .collection("raw_data")
            .aggregate([
                { $sort: { sensorId: 1, date: 1, value: 1 } },
                {
                    $group: {
                        _id: "$sensorId",
                        date: { $last: "$date" },
                        value: { $last: "$value" },
                    },
                },
            ])
            .toArray();

        if (dataDevice.length > 0 && realTimeData.length > 0) {
            let result = [];
            for (let i = 0; i < dataDevice[0].sensors.length; i++) {
                for (let j = 0; j < realTimeData.length; j++) {
                    if (`${dataDevice[0].sensors[i]._id}` == `${realTimeData[j]._id}`) {
                        result.push({
                            value: realTimeData[j].value,
                            sensor: dataDevice[0].sensors[i].type,
                            icon: dataDevice[0].sensors[i].icon,
                            signValue: dataDevice[0].sensors[i].signValue,
                        });
                    }
                }
            }
            console.log("🚀 RESULT", result);
            console.log("🚀 ~ realTimeData", realTimeData);

            res.status(200).json({
                data: result,
                statusCode: 200,
                message: "Sensor data successfully",
            });
        } else {
            console.log("There is not current sensors data for this device");
            res.status(404).send("There is not current sensors data for this device");
        }
    } catch (e) {
        console.error(e);
    }
};
