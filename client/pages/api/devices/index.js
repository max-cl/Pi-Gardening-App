// import { ObjectId } from "mongodb";
// import { connectToDatabase } from "../../../util/mongodb";

// export default async (req, res) => {
//     const { db } = await connectToDatabase();
//     console.log("BODY: ", req.body);
//     if (req.method === "POST") {
//         // const device = await db.collection("devices").insertOne(req.body);
//         // res.status(201).json({ data: device.ops[0], statusCode: 201, message: "Device has inserted successfully" });
//     } else if (req.method === "GET") {
//         // const devices = await db.collection("devices").find({}).toArray();
//         // res.status(200).json(devices);
//     } else if (req.method === "DELETE") {
//         // await db.collection("devices").deleteOne({ _id: ObjectId(`${req.body}`) });
//         // res.status(200).json({ statusCode: 200, message: `Id device removed: ${req.body}` });
//     } else {
//         // Handle any other HTTP method
//         res.setHeader("Allow", ["GET", "PUT"]);
//         res.status(405).end(`Method ${method} Not Allowed`);
//     }
// };
