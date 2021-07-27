import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

// Components
import Navbar from "../../components/NavBar";
import SideMenu from "../../components/SideMenu";
import { Button } from "../../components/Common";

// Utils
import { ApiRequestUtil } from "../../util/ApiRequestUtil";
import { getAppCookies, verifyToken } from "../../util/authUtil";

export const Container = styled.div`
    margin: 2em;
    padding: 0;
    height: 76vh;
    display: flex;
    justify-content: center;
    align-items: center;

    label {
        color: white;
    }

    select {
        width: 100%;
        height: 48px;
        font-size: 18px;
    }

    @media only screen and (min-width: 1000px) {
        margin: 0;
        margin-top: 2em;
        padding: 2.4em;
    }
`;

export default function DashboardContainer({ devicesProps }) {
    const [devices, setDevices] = useState([]);
    const [deviceSelected, setDeviceSelected] = useState({ value: 0 });

    useEffect(() => {
        console.log("devicesProps: ", devicesProps);
        setDevices(devicesProps);
    }, [devicesProps]);

    const handleChange = (e) => {
        console.log("Device Selected!!: ", e.target.value);
        setDeviceSelected({
            value:
                e.target.value === "0"
                    ? parseInt(e.target.value)
                    : e.target.value,
        });
    };

    return (
        <>
            <Navbar />
            <SideMenu />

            <Container>
                {devices.length > 0 && (
                    <div>
                        <div>
                            <label for="devices">Choose a device</label>
                        </div>
                        <select
                            value={deviceSelected.value}
                            onChange={handleChange}
                        >
                            <option value={0}>Devices</option>
                            {devices.map((option) => (
                                <option value={option._id}>
                                    {option.hostname}
                                </option>
                            ))}
                        </select>
                        {deviceSelected.value !== 0 && (
                            <Link href={`/realtime/${deviceSelected.value}`}>
                                <a>
                                    <Button
                                        type="button"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        width={100}
                                    >
                                        Check it
                                    </Button>
                                </a>
                            </Link>
                        )}
                    </div>
                )}
            </Container>
        </>
    );
}

export async function getServerSideProps(context) {
    const { req } = context;
    const { token } = getAppCookies(req);
    const profile = token ? verifyToken(token.split(" ")[1]) : "";
    console.log("profile-RealTime: ", profile);

    if (!profile) {
        console.log("Redirect from RealTime to Login ");
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
        };
    } else {
        const { data, statusCode, message } = await ApiRequestUtil(
            `/devices`,
            "GET"
        );
        console.log("getServerSideProps: ", data);
        return {
            props: { devicesProps: data },
        };
    }
}
