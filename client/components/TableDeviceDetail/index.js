import Image from "next/image";

// Components
import { TableContainer, Table, DeviceStatusLigth } from "../Common";

export default function TableDeviceDetail({ device, handleOnClick }) {
    return (
        <TableContainer>
            <Table>
                <thead>
                    <tr>
                        <th>Device Id</th>
                        <th>Hostname</th>
                        <th>IP address</th>
                        <th>Type</th>
                        <th>Status</th>

                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={device._id}>
                        <td>{device._id}</td>
                        <td>{device.hostname}</td>
                        <td>{device.ipAddress}</td>
                        <td>{device.type}</td>
                        <td>
                            <DeviceStatusLigth status={device.status} />
                        </td>

                        <td>
                            <Image
                                className="icon"
                                src="/images/pencil.svg"
                                alt="Edit element"
                                width={20}
                                height={20}
                                onClick={handleOnClick}
                            />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </TableContainer>
    );
}
