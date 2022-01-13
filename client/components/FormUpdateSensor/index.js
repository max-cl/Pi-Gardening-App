import styled from "styled-components";
import { Button, FlipSwitch, FormContainer, ServerMessage, ButtonContainer } from "../Common";

const Form = styled.form`
    width: 100%;
`;

export default function FormUpdateSensor({ title, handleOnChange, handleOnSubmit, sensorToUpdate, onChangeStatus, serverMessage }) {
    return (
        <FormContainer>
            <h2>{title}</h2>
            <ServerMessage>{serverMessage}</ServerMessage>
            <Form onSubmit={handleOnSubmit}>
                <div>
                    {/* <ErrorMessage>Email can not be empty</ErrorMessage> */}
                    <input type="text" name="name" id="name" placeholder="Sensor" onChange={handleOnChange} value={sensorToUpdate.name} />
                </div>
                <div>
                    {/* <ErrorMessage>Password can not be empty</ErrorMessage> */}
                    <input
                        type="text"
                        name="type"
                        id="type"
                        placeholder="Sensor Type"
                        onChange={handleOnChange}
                        value={sensorToUpdate.type}
                    />
                </div>
                <div>
                    {/* <ErrorMessage>Password can not be empty</ErrorMessage> */}
                    <input type="text" name="icon" id="icon" placeholder="Icon" onChange={handleOnChange} value={sensorToUpdate.icon} />
                </div>
                <div>
                    {/* <ErrorMessage>Password can not be empty</ErrorMessage> */}
                    <input
                        type="text"
                        name="signValue"
                        id="signValue"
                        placeholder="Unity of measure"
                        onChange={handleOnChange}
                        value={sensorToUpdate.signValue}
                    />
                </div>

                <div>
                    <FlipSwitch isChecked={sensorToUpdate.status} handleOnChange={onChangeStatus} />
                </div>

                <ButtonContainer>
                    <Button type="submit">Update</Button>
                </ButtonContainer>
            </Form>
        </FormContainer>
    );
}
