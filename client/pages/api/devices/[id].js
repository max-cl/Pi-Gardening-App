// import { ObjectId } from "mongodb";
// import { connectToDatabase } from "../../../util/mongodb";

// export default async (req, res) => {
//     const { db } = await connectToDatabase();

//     if (req.method === "PUT") {
// const updated = await db.collection("devices").updateOne(
//     { _id: ObjectId(`${req.body._id}`) },
//     {
//         $set: {
//             hostname: req.body.hostname,
//             ipAddress: req.body.ipAddress,
//             type: req.body.type,
//             status: req.body.status,
//         },
//     }, // Update
//     { upsert: true }
// );
// console.log("🚀 ~ PUT ID updated", updated);
// res.status(200).json({
//     data: updated,
//     statusCode: 200,
//     message: `Device has updated successfully`,
// });
//     } else {
//         // Handle any other HTTP method
//         res.setHeader("Allow", ["GET", "PUT"]);
//         res.status(405).end(`Method ${method} Not Allowed`);
//     }
// };
