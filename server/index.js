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

let interval = 10000;
let numClients = 0;
io.on("connection", function (socket) {
    numClients++;
    const deviceId = socket.handshake.query["deviceId"];
    // const numClients = io.engine.clientsCount;
    console.log("[Emit] Connected clients: ", numClients);
    setInterval(() => getRealTimeSensorData(socket, deviceId), interval);
    socket.on("disconnect", function () {
        numClients--;
        console.log("Disconnect] Connected clients:", numClients);
    });
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

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
