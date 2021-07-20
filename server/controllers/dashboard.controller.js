// const { ObjectId } = require("mongodb");
// const { connectToDatabase } = require("../utils/mongodb");

exports.getDashboard = async (req, res, next) => {
    try {
        // const { db } = await connectToDatabase();
        // const devices = await db.collection("dashboard").find({}).toArray();
        const data = {
            avgDayByHours: {
                data: [5, 5, 8, 7, 9, 10, 10, 12, 12, 12, 13, 14, 15, 20, 21, 22, 23, 19, 18, 13, 12, 12, 10, 10],
                labels: [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                ],
                label: "AVG Monday by hours",
            },
        };

        if (Object.keys(data).length > 0) {
            res.status(200).json(data);
        } else {
            console.log("There is not dashboard data");
            res.status(404).send("There is not dashboard data");
        }
    } catch (e) {
        console.error(e);
    }
};
