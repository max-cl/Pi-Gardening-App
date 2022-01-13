import { useState, useEffect } from "react";
import styled from "styled-components";

// Components
import Navbar from "../../components/NavBar";
import SideMenu from "../../components/SideMenu";
import { Spinner, Modal, Separator } from "../../components/Common";
import FormAddDevice from "../../components/FormAddDevice";
import TableDevices from "../../components/TableDevices";

// Utils
import { ApiRequestUtil } from "../../util/ApiRequestUtil";
import { getAppCookies, verifyToken } from "../../util/authUtil";

const Container = styled.div`
    overflow: hidden;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 133px);
`;

export default function DevicesContainer({ devicesProps }) {
    const [devices, setDevices] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [newDevice, setNewDevice] = useState({
        hostname: "",
        ipAddress: "",
        type: "",
        status: false,
        sensors: [],
    });
    const [responseApi, setResponseApi] = useState({
        statusCode: 0,
        serverMessage: "",
    });

    const onChangeNewDevice = (event) => setNewDevice({ ...newDevice, [event.target.name]: event.target.value });

    const AddNewDevice = async (event) => {
        event.preventDefault();
        const { data, statusCode, message } = await ApiRequestUtil(`/devices`, "POST", newDevice);
        console.log("result: ", { data, statusCode, message });
        setResponseApi({ statusCode, serverMessage: message });
        let allDevices = [...devices];
        allDevices.push(data);
        setDevices(allDevices);
    };

    const removeDevice = async (deviceId) => {
        await ApiRequestUtil(`/devices/${deviceId}`, "DELETE");
        const filteredDevices = devices.filter((filter) => filter._id !== deviceId);
        setDevices(filteredDevices);
    };

    useEffect(() => {
        setDevices(devicesProps);
    }, [devicesProps]);

    return (
        <Container>
            <Navbar />
            <SideMenu />

            <Separator />

            <Content>
                {openModal && (
                    <Modal handleClose={() => setOpenModal(!openModal)}>
                        <FormAddDevice
                            title="Device Information"
                            handleOnChange={onChangeNewDevice}
                            handleOnSubmit={AddNewDevice}
                            newDevice={newDevice}
                            serverMessage={responseApi.serverMessage}
                        />
                    </Modal>
                )}

                {devices.length === 0 ? (
                    <Spinner />
                ) : (
                    <TableDevices
                        devices={devices}
                        removeDevice={removeDevice}
                        addDevice={() => {
                            setOpenModal(!openModal);
                            setNewDevice({
                                hostname: "",
                                ipAddress: "",
                                type: "",
                                status: false,
                                sensors: [],
                            });
                            setResponseApi({
                                statusCode: 0,
                                serverMessage: "",
                            });
                        }}
                    />
                )}
            </Content>
        </Container>
    );
}

export async function getServerSideProps(context) {
    const { req } = context;
    const { token } = getAppCookies(req);
    const profile = token ? verifyToken(token.split(" ")[1]) : "";
    console.log("profile-Devices: ", profile);

    if (!profile) {
        console.log("Redirect from Devices to Login ");
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
        };
    } else {
        const { data, statusCode, message } = await ApiRequestUtil(`/devices`, "GET");
        console.log("getServerSideProps: ", data);
        return {
            props: { devicesProps: data },
        };
    }
}
