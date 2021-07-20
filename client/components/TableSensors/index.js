import Image from "next/image";
import styled from "styled-components";

// Components
import { TableContainer, Table, DeviceStatusLigth } from "../Common";

const IconContainer = styled.div`
    .icon {
        cursor: pointer;

        &:hover {
            width: 140%;
        }
    }
`;

export default function TableSensors({ sensors, editSensor, removeSensor, addSensor }) {
    return (
        <TableContainer>
            <IconContainer>
                <Image
                    className="icon"
                    src="/images/add.svg"
                    alt="Add element"
                    width={30}
                    height={30}
                    objectFit="cover"
                    onClick={addSensor}
                />
            </IconContainer>
            <Table>
                <thead>
                    <tr>
                        <th>Sensor Id</th>
                        <th>Sensor</th>
                        <th>Type</th>
                        <th>Unit</th>
                        <th>Status</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {sensors.map((sensor) => (
                        <tr key={sensor._id}>
                            <td>{sensor._id}</td>
                            <td>{sensor.name}</td>
                            <td>{sensor.type}</td>
                            <td>{sensor.signValue}</td>
                            <td>
                                <DeviceStatusLigth status={sensor.status} />
                            </td>
                            <td>
                                <Image
                                    className="icon"
                                    src="/images/pencil.svg"
                                    alt="Edit element"
                                    width={20}
                                    height={20}
                                    onClick={() => editSensor(sensor._id)}
                                />
                            </td>
                            <td>
                                <div>
                                    <Image
                                        className="icon"
                                        src="/images/recycle-bin.svg"
                                        alt="Remove element"
                                        width={20}
                                        height={20}
                                        onClick={() => removeSensor(sensor._id)}
                                    />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </TableContainer>
    );
}
