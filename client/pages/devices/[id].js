import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

// Utils
import { ApiRequestUtil } from "../../util/ApiRequestUtil";
import { getAppCookies, verifyToken } from "../../util/authUtil";

// Components
import Navbar from "../../components/NavBar";
import SideMenu from "../../components/SideMenu";
import TableDeviceDetail from "../../components/TableDeviceDetail";
import FormUpdateDevice from "../../components/FormUpdateDevice";
import TableSensors from "../../components/TableSensors";
import FormAddSensor from "../../components/FormAddSensor";
import FormUpdateSensor from "../../components/FormUpdateSensor";
import { Modal, Spinner, Separator } from "../../components/Common";

const Container = styled.div`
    overflow: hidden;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 133px);
`;

export default function Device({ deviceProps }) {
    const router = useRouter();
    const { id } = router.query;

    // Local States
    const [openModal, setOpenModal] = useState(false);
    const [openModalAddSensor, setOpenModalAddSensor] = useState(false);
    const [openModalUpdateSensor, setOpenModalUpdateSensor] = useState(false);
    const [device, setDevice] = useState({
        id: "0",
        hostname: "",
        ipAddress: "",
        type: "",
        status: false,
    });
    const [sensors, setSensors] = useState([]);
    const [newSensor, setNewSensor] = useState({
        name: "",
        type: "",
        status: false,
        icon: "",
        signValue: "",
    });
    const [sensor, setSensor] = useState({
        name: "",
        type: "",
        status: false,
        icon: "",
        signValue: "",
    });
    const [responseApi, setResponseApi] = useState({
        statusCode: 0,
        serverMessage: "",
    });

    /** Device */
    const onChangeDevice = (event) => setDevice({ ...device, [event.target.name]: event.target.value });
    const onChangeStatusDevice = (event) => setDevice({ ...device, status: event.target.checked });
    const UpdateDevice = async (event) => {
        event.preventDefault();
        console.log("device Update: ", device);
        const { data, statusCode, message } = await ApiRequestUtil(`/devices/${id}`, "PUT", device);
        console.log("🚀 ~ UpdateDevice ~ result", {
            data,
            statusCode,
            message,
        });
        setResponseApi({ statusCode, serverMessage: message });
    };

    /** Sensor */
    const onChangeNewSensor = (event) => setNewSensor({ ...newSensor, [event.target.name]: event.target.value });
    // const onChangeStatusSensor = (event) => setNewSensor({ ...newSensor, status: event.target.checked });
    const AddNewSensor = async (event) => {
        event.preventDefault();
        const { data, statusCode, message } = await ApiRequestUtil(`/sensors`, "POST", {
            deviceId: id,
            newSensor,
        });
        console.log("AddNewSensor Added: ", { data, statusCode, message });
        let allSensors = [...sensors];
        allSensors.push(data);
        setSensors(allSensors);
        setResponseApi({ statusCode, serverMessage: message });
    };

    const removeSensor = async (sensorId) => {
        await ApiRequestUtil(`/sensors`, "DELETE", { deviceId: id, sensorId });
        const filteredSensors = sensors.filter((filter) => filter._id !== sensorId);
        setSensors(filteredSensors);
    };

    const onChangeSensorToUpdate = (event) => setSensor({ ...sensor, [event.target.name]: event.target.value });
    const onChangeStatusSensorToUpdate = (event) => setSensor({ ...sensor, status: event.target.checked });
    const editSensor = (sensorId) => {
        setOpenModalUpdateSensor(!openModalUpdateSensor);
        const sensorToUpdate = sensors.filter((sensor) => sensor._id === sensorId);
        console.log("🚀 ~ editSensor ~ sensorToUpdate", sensorToUpdate);
        setSensor(sensorToUpdate[0]);
    };
    const UpdateSensor = async (event) => {
        event.preventDefault();
        const { data, statusCode, message } = await ApiRequestUtil(`/sensors`, "PUT", {
            deviceId: id,
            sensor,
        });
        const sensorIndex = sensors.findIndex((element) => element._id == sensor._id);
        let copySensors = [...sensors];

        copySensors[sensorIndex] = {
            ...copySensors[sensorIndex],
            name: sensor.name,
            type: sensor.type,
            icon: sensor.icon,
            signValue: sensor.signValue,
            status: sensor.status,
        };
        console.log("🚀 ~ UpdateSensor ~ copySensors", copySensors);
        setSensors(copySensors);
        setResponseApi({ statusCode, serverMessage: message });
    };

    const handleMQTT = async (topic) => {
        const { data, statusCode, message } = await ApiRequestUtil(`/mqtt`, "POST", {
            topic: `${id}/${topic}`,
            message: `Sent message to topic ${id}/${topic}`,
        });
        console.log(`Sent message to topic ${id}/${topic}`);
    };

    useEffect(() => {
        console.log("useEffect : ", deviceProps);
        setDevice(deviceProps.device);
        setSensors(deviceProps.device.sensors);
        setResponseApi({
            statusCode: deviceProps.statusCode,
            serverMessage: deviceProps.message,
        });
    }, [deviceProps]);

    return (
        <Container>
            <Navbar />
            <SideMenu />

            <Separator />

            <Content>
                {openModal && (
                    <Modal handleClose={() => setOpenModal(!openModal)}>
                        <FormUpdateDevice
                            title="Device Information"
                            handleOnChange={onChangeDevice}
                            handleOnSubmit={UpdateDevice}
                            onChangeStatus={onChangeStatusDevice}
                            deviceToUpdate={device}
                            serverMessage={responseApi.serverMessage}
                        />
                    </Modal>
                )}
                {device.length === 0 ? (
                    <Spinner />
                ) : (
                    <TableDeviceDetail device={device} handleOnClick={() => setOpenModal(!openModal)} handleMQTT={handleMQTT} />
                )}

                {openModalAddSensor && (
                    <Modal handleClose={() => setOpenModalAddSensor(!openModalAddSensor)}>
                        <FormAddSensor
                            title="Sensor Information"
                            handleOnChange={onChangeNewSensor}
                            handleOnSubmit={AddNewSensor}
                            // onChangeStatus={onChangeStatusSensor}
                            newSensor={newSensor}
                            serverMessage={responseApi.serverMessage}
                        />
                    </Modal>
                )}

                {openModalUpdateSensor && (
                    <Modal handleClose={() => setOpenModalUpdateSensor(!openModalUpdateSensor)}>
                        <FormUpdateSensor
                            title="Sensor Information"
                            handleOnChange={onChangeSensorToUpdate}
                            handleOnSubmit={UpdateSensor}
                            onChangeStatus={onChangeStatusSensorToUpdate}
                            sensorToUpdate={sensor}
                            serverMessage={responseApi.serverMessage}
                        />
                    </Modal>
                )}

                <TableSensors
                    sensors={sensors}
                    removeSensor={removeSensor}
                    editSensor={editSensor}
                    addSensor={() => {
                        setOpenModalAddSensor(!openModalAddSensor);
                        setNewSensor({ name: "", type: "", status: false });
                        setResponseApi({ statusCode: 0, serverMessage: "" });
                    }}
                />
            </Content>
        </Container>
    );
}

export async function getServerSideProps(context) {
    const { req, params } = context;
    const { token } = getAppCookies(req);
    const profile = token ? verifyToken(token.split(" ")[1]) : "";
    console.log("profile-Devices[id]: ", profile);

    if (!profile) {
        console.log("Redirect from Devices[id] to Login ");
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
        };
    } else {
        const { data, statusCode, message } = await ApiRequestUtil(`/devices`, "GET");
        const deviceById = data.filter((device) => device._id === params.id);
        console.log("getServerSideProps: ", {
            device: deviceById[0],
            statusCode,
            message,
        });
        return {
            props: {
                deviceProps: { device: deviceById[0], statusCode, message },
            },
        };
    }
}
