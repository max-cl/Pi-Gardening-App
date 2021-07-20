// import { ObjectId } from "mongodb";
// import { connectToDatabase } from "../../../util/mongodb";

// export default async (req, res) => {
//     const { db } = await connectToDatabase();
//     console.log("BODY: ", req.body);
//     if (req.method === "GET") {
//         // const deviceId = "6092c6019a65b92624f56ba1";
//         // const devices = await db
//         //     .collection("devices")
//         //     .find({
//         //         _id: ObjectId(`${deviceId}`),
//         //     })
//         //     .toArray();
//         // res.status(200).json({
//         //     data: { sensors: devices[0].sensors, deviceId },
//         //     // data: { sensors: [], deviceId },
//         //     statusCode: 200,
//         //     message: "Sensor data successfully",
//         // });
//     } else if (req.method === "PUT") {
//         if (req.body.type === "update") {
//             // const updated = await db.collection("devices").update(
//             //     {
//             //         _id: ObjectId(`${req.body.deviceId}`),
//             //         "sensors._id": ObjectId(`${req.body.sensor._id}`),
//             //     },
//             //     {
//             //         $set: {
//             //             "sensors.$.name": req.body.sensor.name,
//             //             "sensors.$.type": req.body.sensor.type,
//             //             "sensors.$.status": req.body.sensor.status,
//             //         },
//             //     }
//             // );
//             // console.log("updated sensor: ", updated);
//             // res.status(200).json({ data: updated, statusCode: 200, message: "Sensor has updated successfully" });
//         } else if (req.body.type === "updateStatus") {
//             // const updated = await db.collection("devices").update(
//             //     {
//             //         _id: ObjectId(`${req.body.deviceId}`),
//             //         "sensors._id": ObjectId(`${req.body.sensor._id}`),
//             //     },
//             //     {
//             //         $set: {
//             //             "sensors.$.status": req.body.sensor.status,
//             //         },
//             //     }
//             // );
//             // // console.log("updated sensor: ", updated);
//             // res.status(200).json({ data: updated, statusCode: 200, message: "SensorStatus has updated successfully" });
//         } else {
//             // const newSensorId = ObjectId();
//             // const added = await db.collection("devices").update(
//             //     { _id: ObjectId(`${req.body.deviceId}`) },
//             //     {
//             //         $push: {
//             //             sensors: { ...req.body.newSensor, _id: newSensorId },
//             //         },
//             //     }
//             // );
//             // console.log("🚀 ~ sensor added", added);
//             // res.status(200).json({
//             //     data: { ...req.body.newSensor, _id: newSensorId },
//             //     statusCode: 200,
//             //     message: "Sensor has inserted successfully",
//             // });
//         }
//     } else if (req.method === "DELETE") {
//         // console.log("DELETE: ", req.body);
//         // db.collection("devices").update(
//         //     { _id: ObjectId(`${req.body.deviceId}`) },
//         //     { $pull: { sensors: { _id: ObjectId(`${req.body.sensorId}`) } } }
//         // );
//         // res.status(200).json({
//         //     message: `Removed Sensor Id: ${req.body.sensorId} from device Id: ${req.body.deviceId}`,
//         // });
//     } else {
//         // Handle any other HTTP method
//         res.setHeader("Allow", ["GET", "PUT"]);
//         res.status(405).end(`Method ${method} Not Allowed`);
//     }
// };
