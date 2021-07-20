import { Button, FormContainer, ServerMessage } from "../Common";

export default function FormAddDevice({ title, handleOnChange, handleOnSubmit, newDevice, serverMessage }) {
    return (
        <FormContainer>
            <h2>{title}</h2>
            <ServerMessage>{serverMessage}</ServerMessage>
            <form onSubmit={handleOnSubmit}>
                <div>
                    {/* <ErrorMessage>Email can not be empty</ErrorMessage> */}
                    <input
                        type="text"
                        name="hostname"
                        id="hostname"
                        placeholder="Hostname"
                        onChange={handleOnChange}
                        value={newDevice.hostname}
                    />
                </div>
                <div>
                    {/* <ErrorMessage>Password can not be empty</ErrorMessage> */}
                    <input
                        type="text"
                        name="ipAddress"
                        id="ipAddress"
                        placeholder="IP Address"
                        onChange={handleOnChange}
                        value={newDevice.ipAddress}
                    />
                </div>
                <div>
                    {/* <ErrorMessage>Password can not be empty</ErrorMessage> */}
                    <input
                        type="text"
                        name="type"
                        id="type"
                        placeholder="Device Type"
                        onChange={handleOnChange}
                        value={newDevice.type}
                    />
                </div>
                <Button type="submit" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} width={100}>
                    Add
                </Button>
            </form>
        </FormContainer>
    );
}
