import { useState, useEffect } from "react";
import styled from "styled-components";

// Components
import Navbar from "../../components/NavBar";
import SideMenu from "../../components/SideMenu";
import {
    BarChart,
    DoughnutChart,
    LineChart,
    PieChart,
    PolarChart,
    RadarChart,
    ScatterChart,
    BubbleChart,
} from "../../components/Charts";

// Utils
import { ApiRequestUtil } from "../../util/ApiRequestUtil";

const Container = styled.div`
    grid-auto-rows: 200px;

    > div {
        background: ${(props) => props.theme.colors.tertiary};
        border-radius: ${(props) => props.theme.borderRadiusCard};
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
                -ms-grid-column-span: 7;
                grid-column-end: span 7;
                -ms-grid-row-span: 2;
                grid-row-end: span 2;
            }
            > :nth-of-type(2) {
                -ms-grid-column-span: 5;
                grid-column-end: span 5;
                -ms-grid-row-span: 2;
                grid-row-end: span 2;
            }

            > :nth-of-type(3) {
                -ms-grid-column-span: 4;
                grid-column-end: span 4;
                -ms-grid-row-span: 1;
                grid-row-end: span 2;
            }
            > :nth-of-type(4) {
                -ms-grid-column-span: 4;
                grid-column-end: span 4;
                -ms-grid-row-span: 1;
                grid-row-end: span 2;
            }
            > :nth-of-type(5) {
                -ms-grid-column-span: 4;
                grid-column-end: span 4;
                -ms-grid-row-span: 1;
                grid-row-end: span 2;
            }

            > :nth-of-type(6) {
                -ms-grid-column-span: 4;
                grid-column-end: span 4;
                -ms-grid-row-span: 1;
                grid-row-end: span 2;
            }

            > :nth-of-type(7) {
                -ms-grid-column-span: 4;
                grid-column-end: span 4;
                -ms-grid-row-span: 1;
                grid-row-end: span 2;
            }

            > :nth-of-type(8) {
                -ms-grid-column-span: 4;
                grid-column-end: span 4;
                -ms-grid-row-span: 1;
                grid-row-end: span 2;
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

export default function DashboardContainer({ devicesProps }) {
    const [data, setData] = useState({});

    useEffect(() => {
        setData(devicesProps);
    }, [devicesProps]);

    return (
        <>
            <Navbar />
            <SideMenu />

            <Container>
                <div>
                    <LineChart />
                </div>
                <div>
                    <DoughnutChart />
                </div>
                <div>
                    <PieChart />
                </div>
                <div>
                    <BarChart data1={data.avgDayByHours} />
                </div>
                <div>
                    <PolarChart />
                </div>
                <div>
                    <RadarChart />
                </div>
                <div>
                    <ScatterChart />
                </div>
                <div>
                    <BubbleChart />
                </div>
            </Container>
        </>
    );
}

export async function getStaticProps(context) {
    const data = await ApiRequestUtil(`/dashboard`, "GET");
    console.log("getStaticProps: ", data);
    return { props: { devicesProps: data }, revalidate: 60 };
}
