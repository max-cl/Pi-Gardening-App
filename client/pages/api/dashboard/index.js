// import { ObjectId } from "mongodb";
// import { connectToDatabase } from "../../../util/mongodb";

// export default async (req, res) => {
//     const { db } = await connectToDatabase();
//     console.log("BODY: ", req.body);
//     if (req.method === "GET") {
//         // const devices = await db.collection("dashboard").find({}).toArray();
//         // const data = {
//         //     avgDayByHours: {
//         //         data: [5, 5, 8, 7, 9, 10, 10, 12, 12, 12, 13, 14, 15, 20, 21, 22, 23, 19, 18, 13, 12, 12, 10, 10],
//         //         labels: [
//         //             "0",
//         //             "1",
//         //             "2",
//         //             "3",
//         //             "4",
//         //             "5",
//         //             "6",
//         //             "7",
//         //             "8",
//         //             "9",
//         //             "10",
//         //             "11",
//         //             "12",
//         //             "13",
//         //             "14",
//         //             "15",
//         //             "16",
//         //             "17",
//         //             "18",
//         //             "19",
//         //             "20",
//         //             "21",
//         //             "22",
//         //             "23",
//         //         ],
//         //         label: "AVG Monday by hours",
//         //     },
//         // };
//         // res.status(200).json(data);
//     } else {
//         // Handle any other HTTP method
//         res.setHeader("Allow", ["GET", "PUT"]);
//         res.status(405).end(`Method ${method} Not Allowed`);
//     }
// };

// /**
//  * Create filter Chosen Year, Month, Day
//     Month by Day (AVG)
//     Month by Week (AVG)
//     Day by Hours  (AVG)

// */
