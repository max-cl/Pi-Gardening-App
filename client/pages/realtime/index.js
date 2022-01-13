import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

// Components
import Navbar from "../../components/NavBar";
import SideMenu from "../../components/SideMenu";
import { Button, ButtonContainer, FormContainer, Separator } from "../../components/Common";

// Utils
import { ApiRequestUtil } from "../../util/ApiRequestUtil";
import { getAppCookies, verifyToken } from "../../util/authUtil";

const Container = styled.div`
    height: calc(100% - 62px);
    width: 100%;
    padding: 0.75rem 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledAnchor = styled.a`
    width: 100%;
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
            value: e.target.value === "0" ? parseInt(e.target.value) : e.target.value,
        });
    };

    return (
        <>
            <Navbar />
            <SideMenu />

            <Separator />

            <Container>
                {devices.length > 0 && (
                    <div>
                        <FormContainer>
                            <h2>Choose a device</h2>
                            <select value={deviceSelected.value} onChange={handleChange}>
                                <option value={0}>Devices</option>
                                {devices.map((option) => (
                                    <option value={option._id}>{option.hostname}</option>
                                ))}
                            </select>

                            <Link href={`/realtime/${deviceSelected.value}`}>
                                <StyledAnchor>
                                    <ButtonContainer>
                                        <Button type="button" disabled={deviceSelected.value === 0 ? true : false}>
                                            Check it
                                        </Button>
                                    </ButtonContainer>
                                </StyledAnchor>
                            </Link>
                        </FormContainer>
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
        const { data, statusCode, message } = await ApiRequestUtil(`/devices`, "GET");
        console.log("getServerSideProps: ", data);
        return {
            props: { devicesProps: data },
        };
    }
}
