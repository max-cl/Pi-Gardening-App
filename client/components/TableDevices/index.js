import Image from "next/image";
import Link from "next/link";
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

export default function TableDevices({ devices, removeDevice, addDevice }) {
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
                    onClick={addDevice}
                />
            </IconContainer>
            <Table>
                <thead>
                    <tr>
                        <th>Device Id</th>
                        <th>Hostname</th>
                        <th>IP address</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {devices.map((device) => (
                        <tr key={device._id}>
                            <td>{device._id}</td>
                            <td>{device.hostname}</td>
                            <td>{device.ipAddress}</td>
                            <td>{device.type}</td>
                            <td>
                                <DeviceStatusLigth status={device.status} />
                            </td>
                            <td>
                                <Link href={`/devices/${device._id}`}>
                                    <a>
                                        <Image
                                            className="icon"
                                            src="/images/detail.svg"
                                            alt="Edit element"
                                            width={20}
                                            height={20}
                                        />
                                    </a>
                                </Link>
                            </td>
                            <td>
                                <div>
                                    <Image
                                        className="icon"
                                        src="/images/recycle-bin.svg"
                                        alt="Remove element"
                                        width={20}
                                        height={20}
                                        onClick={() => removeDevice(device._id)}
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
