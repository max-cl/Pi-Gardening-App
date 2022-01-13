import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

// Components
import { Button } from "../../components/Common";

// Utils
import { ApiRequestUtil } from "../../util/ApiRequestUtil";

const Container = styled.div`
    display: grid !important;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(2, 50%);
    grid-gap: 0.25rem;
    background-color: ${(props) => props.theme.colors.ui.quaternary} !important;
    overflow: hidden;
    position: relative;
    box-shadow: ${(props) => props.theme.colors.ui.boxShadow};
`;

const Content = styled.div`
    text-align: center;
    background-color: ${(props) => props.theme.colors.utility.white};
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    h5 {
        width: 100%;
        color: ${(props) => props.theme.colors.text.primary};
        font-weight: ${(props) => props.theme.fontWeights.bold};
    }

    p {
        width: 100%;
        color: ${(props) => props.theme.colors.text.primary};
        font-weight: ${(props) => props.theme.fontWeights.bold};
        font-size: 2rem;
    }

    span {
        font-size: 1.75rem;
    }
`;

const ButtonGetData = styled(Button)`
    position: absolute;
    left: 40%;
    padding: 2rem;
    box-shadow: ${(props) => props.theme.colors.ui.boxShadow};
    border-radius: 50%;
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-size: 1rem;
    width: 120px;
    height: 120px;
`;

export default function SensorDataManage({ deviceId }) {
    const [sensorData, setSensorData] = useState([]);

    const handleGetDataSensor = async () => {
        const { data, statusCode, message } = await ApiRequestUtil(`/sensors/current-data/${deviceId}`, "GET");
        setSensorData(data);
    };

    return (
        <Container>
            <ButtonGetData onClick={handleGetDataSensor} width={20}>
                Get Data
            </ButtonGetData>
            {sensorData.length > 0 &&
                sensorData.map((data, index) => (
                    <Content key={index}>
                        <h5>{data.sensor}</h5>
                        <Image className="icon" src={`/images/${data.icon}.svg`} alt={`${data.sensor}`} width={80} height={80} />
                        <p>
                            {data.value}
                            <span>{data.signValue}</span>
                        </p>
                    </Content>
                ))}
        </Container>
    );
}
