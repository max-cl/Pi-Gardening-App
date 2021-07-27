const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const socketIO = require("socket.io");
const { connectToDatabase } = require("./utils/mongodb");
const { ObjectId } = require("mongodb");
const http = require("http");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("./routes/auth.route")(app);
require("./routes/sensors.route")(app);
require("./routes/devices.route")(app);
require("./routes/dashboard.route")(app);
require("./routes/mqtt.route")(app);

const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

let interval = 5000;
io.on("connection", (socket) => {
    if (interval) {
        clearInterval(interval);
    }
    let deviceId = socket.handshake.query["deviceId"];
    console.log("Socket Info: ", deviceId);
    console.log("Nro. of Clients connected: ", io.engine.clientsCount);
    console.log("New client connected"), setInterval(() => getRealTimeSensorData(socket, deviceId), interval);
    socket.on("disconnect", () => console.log("Client disconnected"));
});

const getRealTimeSensorData = async (socket, deviceId) => {
    try {
        if (deviceId) {
            console.log("deviceId: ", deviceId);
            const { db } = await connectToDatabase();

            const dataDevice = await db
                .collection("devices")
                .find({ _id: ObjectId(`${deviceId}`) })
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

            let result = [];
            for (let i = 0; i < dataDevice[0].sensors.length; i++) {
                for (let j = 0; j < realTimeData.length; j++) {
                    if (`${dataDevice[0].sensors[i]._id}` == `${realTimeData[j]._id}`) {
                        result.push({
                            sensorId: realTimeData[j]._id,
                            date: realTimeData[j].date,
                            value: realTimeData[j].value,
                            sensorName: dataDevice[0].sensors[i].name,
                            sensorType: dataDevice[0].sensors[i].type,
                        });
                    }
                }
            }
            console.log("🚀 RESULT", result);
            socket.emit("RealTimeApi", result);
        }
    } catch (error) {
        console.error(`Error: ${error.code}`);
    }
};

// app.get("/test", async (req, res) => {
//     const { db } = await connectToDatabase();
//     const sensorData = await db.collection("raw_data").find({}).sort({ _id: -1 }).limit(1).toArray();
//     res.json({ data: sensorData });
// });

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
