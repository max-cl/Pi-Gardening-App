import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import socketIOClient from "socket.io-client";
import { useRouter } from "next/router";

// Components
import Navbar from "../../components/NavBar";
import SideMenu from "../../components/SideMenu";
import { LineRealTime } from "../../components/Charts";
import SensorDataManage from "../../components/SensorDataManage";
import SensorStatusManage from "../../components/SensorStatusManage";

// Utils
import { ApiRequestUtil } from "../../util/ApiRequestUtil";
import { getAppCookies, verifyToken } from "../../util/authUtil";

const Container = styled.div`
    grid-auto-rows: 200px;

    > div {
        background: ${(props) => props.theme.colors.tertiary};
        border-radius: ${(props) => props.theme.borderRadiusCard};
    }

    @supports (grid-area: auto) {
        display: grid;
        grid-column-gap: 0.25rem;
        grid-row-gap: 0.25rem;
    }

    @media only screen and (min-width: 600px) {
        @supports (grid-area: auto) {
            grid-template-columns: repeat(12, 1fr);

            > :nth-of-type(1) {
                -ms-grid-column-span: 12;
                grid-column-end: span 12;
                -ms-grid-row-span: 2;
                grid-row-end: span 2;
            }
            > :nth-of-type(2) {
                -ms-grid-column-span: 6;
                grid-column-end: span 6;
                -ms-grid-row-span: 3;
                grid-row-end: span 3;
            }

            > :nth-of-type(3) {
                -ms-grid-column-span: 6;
                grid-column-end: span 6;
                -ms-grid-row-span: 3;
                grid-row-end: span 3;
            }
        }
    }

    max-width: 100%;
    margin: 0 auto;
    padding: 1rem;

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const ENDPOINT = "http://localhost:3001/";

export default function DashboardContainer({ sensorsProps }) {
    // Router
    const router = useRouter();
    const { id } = router.query;
    // States
    const [dataSocket, setDataSocket] = useState([]);
    const [sensors, setSensors] = useState({});

    // Web-Socket
    const socket = socketIOClient(ENDPOINT, { query: `deviceId=${id}` });

    // Real-Time;
    useEffect(() => {
        socket.on("RealTimeApi", getRealTimeData);
        return () => {
            socket.off("RealTimeApi", getRealTimeData);
            socket.disconnect();
        };
    });

    const getRealTimeData = useCallback(
        (data) => {
            setDataSocket(data);
        },
        [dataSocket]
    );

    // StatusManage;
    useEffect(() => {
        console.log("useEffect Statusmanage: ", sensorsProps);
        setSensors(sensorsProps);
    }, [sensorsProps]);

    console.log("sensorsProps: ", sensorsProps);

    return (
        <>
            <Navbar />
            <SideMenu />

            <Container>
                <div>
                    <LineRealTime data={dataSocket} />
                </div>
                <>
                    <SensorDataManage deviceId={id} />
                </>
                <>
                    <SensorStatusManage data={sensors} deviceId={id} />
                </>
            </Container>
        </>
    );
}

export async function getServerSideProps(context) {
    const { req, params } = context;
    const { token } = getAppCookies(req);
    const profile = token ? verifyToken(token.split(" ")[1]) : "";
    console.log("profile-RealTime[id]: ", profile);

    if (!profile) {
        console.log("Redirect from RealTime[id] to Login ");
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
        };
    } else {
        const { data, statusCode, message } = await ApiRequestUtil(`/sensors/${params.id}`, "GET");
        console.log("getServerSideProps: ", data);
        return {
            props: {
                sensorsProps: data,
            },
        };
    }
}
