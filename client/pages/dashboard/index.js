import { useState, useEffect } from "react";
import styled from "styled-components";

// Components
import Navbar from "../../components/NavBar";
import SideMenu from "../../components/SideMenu";
import { BarChart, DoughnutChart, LineChart, PieChart, PolarChart, RadarChart, ScatterChart, BubbleChart } from "../../components/Charts";
import { Separator } from "../../components/Common/Separator";

// Utils
import { ApiRequestUtil } from "../../util/ApiRequestUtil";
import { getAppCookies, verifyToken } from "../../util/authUtil";

const Container = styled.div`
    height: auto;
    width: 100%;
    padding: 0.75rem 0.5rem;

    div {
        background-color: ${(props) => props.theme.colors.utility.white};
        border-radius: ${(props) => props.theme.borderRadius};
    }

    @supports (grid-area: auto) {
        display: grid;
        grid-column-gap: 0.5rem;
        grid-row-gap: 0.5rem;
    }

    @media only screen and (min-width: 600px) {
        @supports (grid-area: auto) {
            grid-template-columns: repeat(12, 1fr);
            height: auto;
            width: 100%;

            > :nth-child(1) {
                -ms-grid-column-span: 7;
                grid-column-end: span 7;
                -ms-grid-row-span: 2;
                grid-row-end: span 2;
            }
            > :nth-child(2) {
                -ms-grid-column-span: 5;
                grid-column-end: span 5;
                -ms-grid-row-span: 2;
                grid-row-end: span 2;
            }

            > :nth-child(3) {
                -ms-grid-column-span: 4;
                grid-column-end: span 4;
                -ms-grid-row-span: 1;
                grid-row-end: span 2;
            }
            > :nth-child(4) {
                -ms-grid-column-span: 4;
                grid-column-end: span 4;
                -ms-grid-row-span: 1;
                grid-row-end: span 2;
            }
            > :nth-child(5) {
                -ms-grid-column-span: 4;
                grid-column-end: span 4;
                -ms-grid-row-span: 1;
                grid-row-end: span 2;
            }

            > :nth-child(6) {
                -ms-grid-column-span: 4;
                grid-column-end: span 4;
                -ms-grid-row-span: 1;
                grid-row-end: span 2;
            }

            > :nth-child(7) {
                -ms-grid-column-span: 4;
                grid-column-end: span 4;
                -ms-grid-row-span: 1;
                grid-row-end: span 2;
            }

            > :nth-child(8) {
                -ms-grid-column-span: 4;
                grid-column-end: span 4;
                -ms-grid-row-span: 1;
                grid-row-end: span 2;
            }
        }
    }
`;

export default function DashboardContainer({ devicesProps }) {
    const [data, setData] = useState({});

    useEffect(() => {
        setData(devicesProps);
    }, [devicesProps]);

    return (
        <>
            <Navbar />
            <SideMenu />

            <Separator />

            <Container>
                <div>
                    <LineChart />
                </div>

                <div id="b">
                    <DoughnutChart />
                </div>
                <div id="c">
                    <PieChart />
                </div>
                <div id="d">
                    <BarChart data1={data.avgDayByHours} />
                </div>
                <div id="e">
                    <PolarChart />
                </div>
                <div id="f">
                    <RadarChart />
                </div>
                <div id="g">
                    <ScatterChart />
                </div>
                <div id="h">
                    <BubbleChart />
                </div>
            </Container>
        </>
    );
}

export async function getServerSideProps(context) {
    const { req } = context;
    const { token } = getAppCookies(req);
    const profile = token ? verifyToken(token.split(" ")[1]) : "";
    console.log("profile-Dashboard: ", profile);

    if (!profile) {
        console.log("Redirect from Dashboard to Login ");
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
        };
    } else {
        const data = await ApiRequestUtil(`/dashboard`, "GET");
        console.log("getServerSideProps: ", data);
        return {
            props: { devicesProps: data },
        };
    }
}
