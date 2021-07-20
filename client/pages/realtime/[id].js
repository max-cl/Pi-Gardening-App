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

const Container = styled.div`
    grid-auto-rows: 200px;

    > div {
        background: ${(props) => props.theme.colors.tertiary};
        border-radius: ${(props) => props.theme.borderRadiusCard};
        box-shadow: ${(props) => props.theme.boxShadow};
    }

    @supports (grid-area: auto) {
        display: grid;
        grid-column-gap: 10px;
        grid-row-gap: 10px;
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
    padding: 1em;

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
            // socket.disconnect();
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

export async function getStaticPaths() {
    const { data, statusCode, message } = await ApiRequestUtil(`/devices`, "GET");
    const devicesIds = data.map((device) => {
        return {
            params: {
                id: device._id,
            },
        };
    });

    return {
        paths: devicesIds,
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    const { data, statusCode, message } = await ApiRequestUtil(`/sensors/${params.id}`, "GET");
    console.log("getStaticProps: ", data);

    // If The data empty, it's gonna shows the 404 Page (pages/404.js) (notFound: true)
    // Or redirect its gonna send you to the path
    if (data.length === 0) {
        return {
            notFound: true,
            // redirect: { destination: "/posts", permanent: true },
        };
    }
    return {
        props: {
            sensorsProps: data,
        },
        // Re-generate the post at most once per second
        // if a request comes in
        revalidate: 1,
    };
}
