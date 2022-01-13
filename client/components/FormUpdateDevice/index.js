import styled from "styled-components";
import { Button, FlipSwitch, FormContainer, ServerMessage, ButtonContainer } from "../Common";

const Form = styled.form`
    width: 100%;
`;

export default function FormUpdateDevice({ title, handleOnChange, handleOnSubmit, deviceToUpdate, onChangeStatus, serverMessage }) {
    return (
        <FormContainer>
            <h2>{title}</h2>
            <ServerMessage>{serverMessage}</ServerMessage>
            <Form onSubmit={handleOnSubmit}>
                <div>
                    {/* <ErrorMessage>Email can not be empty</ErrorMessage> */}
                    <input
                        type="text"
                        name="hostname"
                        id="hostname"
                        placeholder="Hostname"
                        onChange={handleOnChange}
                        value={deviceToUpdate.hostname}
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
                        value={deviceToUpdate.ipAddress}
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
                        value={deviceToUpdate.type}
                    />
                </div>
                <div>
                    <FlipSwitch isChecked={deviceToUpdate.status} handleOnChange={onChangeStatus} />
                </div>
                <ButtonContainer>
                    <Button type="submit">Update</Button>
                </ButtonContainer>
            </Form>
        </FormContainer>
    );
}
