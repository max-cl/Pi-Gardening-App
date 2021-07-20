import { useState, useEffect, memo } from "react";
import styled from "styled-components";

import Image from "next/image";

// Components
import { FlipSwitch } from "../../components/Common";

// Utils
import { ApiRequestUtil } from "../../util/ApiRequestUtil";

const Container = styled.div`
    display: grid !important;
    grid-template-columns: repeat(3, 33%);
    grid-template-rows: repeat(2, 50%);
    grid-gap: 8px;
    background-color: #2e3346 !important;
    overflow: hidden;
`;

const Content = styled.div`
    text-align: center;
    background-color: #ffffff;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    h5 {
        width: 100%;
        color: #2e3346;
        font-weight: 900;
    }
`;

export default memo(function SensorStatusManage({ data, deviceId }) {
    const [sensorsData, setSensorsData] = useState({});

    const onChangeSensorStatus = async (sensorId, event) => {
        const sensorIndex = sensorsData.sensors.findIndex((element) => element._id == sensorId);
        let copySensors = [...sensorsData.sensors];
        copySensors[sensorIndex] = {
            ...copySensors[sensorIndex],
            status: event.target.checked,
        };

        const { data, statusCode, message } = await ApiRequestUtil(`/sensors/update-status`, "PUT", {
            deviceId,
            sensor: { _id: copySensors[sensorIndex]._id, status: copySensors[sensorIndex].status },
        });

        setSensorsData({ sensors: copySensors, deviceId });
    };

    useEffect(() => {
        setSensorsData(data);
    }, [data]);

    return (
        <Container>
            {Object.keys(sensorsData).length > 0 &&
                sensorsData.sensors.map((data, index) => (
                    <Content key={index}>
                        <h5>{data.type}</h5>
                        <Image
                            className="icon"
                            src={`/images/${data.icon}.svg`}
                            alt={`${data.sensor}`}
                            width={80}
                            height={80}
                        />

                        <FlipSwitch
                            id={data._id}
                            isChecked={data.status}
                            handleOnChange={(e) => onChangeSensorStatus(data._id, e)}
                        />
                    </Content>
                ))}
        </Container>
    );
});
