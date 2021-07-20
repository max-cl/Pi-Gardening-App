// // import { connectToDatabase } from "../../../util/mongodb";
// // import { ObjectId } from "mongodb";

// export default async (req, res) => {
//     // const { db } = await connectToDatabase();
//     // console.log("QUERY: ", req.query);
//     if (req.method === "GET") {
//         // const deviceId = "6092c6019a65b92624f56ba1";
//         // // const sensorData2 = await db
//         // //     .collection("raw_data")
//         // //     .find({ deviceId: ObjectId(`${deviceId}`) })
//         // //     .sort({ _id: -1 })
//         // //     .limit(1)
//         // //     .toArray();
//         // const dataDevice = await db
//         //     .collection("devices")
//         //     .find({ _id: ObjectId(`${deviceId}`) })
//         //     .toArray();
//         // // console.log("🚀 ~ dataDevice", dataDevice[0].sensors);
//         // const realTimeData = await db
//         //     .collection("raw_data")
//         //     .aggregate([
//         //         { $sort: { sensorId: 1, date: 1, value: 1 } },
//         //         {
//         //             $group: {
//         //                 _id: "$sensorId",
//         //                 date: { $last: "$date" },
//         //                 value: { $last: "$value" },
//         //             },
//         //         },
//         //     ])
//         //     .toArray();
//         // let result = [];
//         // for (let i = 0; i < dataDevice[0].sensors.length; i++) {
//         //     for (let j = 0; j < realTimeData.length; j++) {
//         //         if (`${dataDevice[0].sensors[i]._id}` == `${realTimeData[j]._id}`) {
//         //             result.push({
//         //                 value: realTimeData[j].value,
//         //                 sensor: dataDevice[0].sensors[i].type,
//         //                 icon: dataDevice[0].sensors[i].icon,
//         //                 signValue: dataDevice[0].sensors[i].signValue,
//         //             });
//         //         }
//         //     }
//         // }
//         // console.log("🚀 RESULT", result);
//         // console.log("🚀 ~ realTimeData", realTimeData);
//         // // const sensorData = [
//         // //     {
//         // //         sensor: "Temperature",
//         // //         value: Math.floor(Math.random() * 50),
//         // //         icon: "temperature",
//         // //         signValue: " °C",
//         // //     },
//         // //     {
//         // //         sensor: "Moisture",
//         // //         value: Math.floor(Math.random() * 50),
//         // //         icon: "moisture",
//         // //         signValue: " %",
//         // //     },
//         // //     {
//         // //         sensor: "Humidity",
//         // //         value: Math.floor(Math.random() * 50),
//         // //         icon: "humidity",
//         // //         signValue: " %",
//         // //     },
//         // //     {
//         // //         sensor: "Wind Speed",
//         // //         value: Math.floor(Math.random() * 50),
//         // //         icon: "wind",
//         // //         signValue: " kp/h",
//         // //     },
//         // // ];
//         // res.status(200).json(result);
//     } else {
//         // Handle any other HTTP method
//         res.setHeader("Allow", ["GET", "PUT"]);
//         res.status(405).end(`Method ${method} Not Allowed`);
//     }
// };
