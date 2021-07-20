const { ObjectId } = require("mongodb");
const { connectToDatabase } = require("../utils/mongodb");

exports.getDevices = async (req, res, next) => {
    try {
        const { db } = await connectToDatabase();
        const devices = await db.collection("devices").find({}).toArray();

        if (devices.length > 0) {
            res.status(200).json({
                data: devices,
                statusCode: 200,
                message: "Device data successfully",
            });
        } else {
            console.log("There is not devices data");
            res.status(404).send("There is not devices data");
        }
    } catch (e) {
        console.error(e);
    }
};

exports.addDevice = async (req, res, next) => {
    try {
        const { db } = await connectToDatabase();
        const device = await db.collection("devices").insertOne(req.body);
        res.status(201).json({ data: device.ops[0], statusCode: 201, message: "Device has inserted successfully" });
    } catch (e) {
        console.error(e);
    }
};

exports.updateDevice = async (req, res, next) => {
    try {
        const { db } = await connectToDatabase();
        const { id } = req.params;
        const { hostname, ipAddress, type, status } = req.body;
        const updated = await db.collection("devices").updateOne(
            { _id: ObjectId(`${id}`) },
            {
                $set: {
                    hostname: hostname,
                    ipAddress: ipAddress,
                    type: type,
                    status: status,
                },
            }, // Update
            { upsert: true }
        );
        console.log("🚀 ~ PUT ID updated", updated);
        res.status(200).json({
            data: updated,
            statusCode: 200,
            message: `Device has updated successfully`,
        });
    } catch (e) {
        console.error(e);
    }
};

exports.deleteDevice = async (req, res, next) => {
    try {
        const { db } = await connectToDatabase();
        const { id } = req.params;
        console.log("🚀 ~ exports.deleteDevice ~ deviceId", id);

        await db.collection("devices").deleteOne({ _id: ObjectId(`${id}`) });
        res.status(200).json({ statusCode: 200, message: `Id device removed: ${id}` });
    } catch (e) {
        console.error(e);
    }
};
