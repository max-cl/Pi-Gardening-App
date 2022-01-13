import styled from "styled-components";
import { Button, FormContainer, ServerMessage, ButtonContainer } from "../Common";

const Form = styled.form`
    width: 100%;
`;

export default function FormAddSensor({ title, handleOnChange, handleOnSubmit, newSensor, serverMessage }) {
    return (
        <FormContainer>
            <h2>{title}</h2>
            <ServerMessage>{serverMessage}</ServerMessage>
            <Form onSubmit={handleOnSubmit}>
                <div>
                    {/* <ErrorMessage>Email can not be empty</ErrorMessage> */}
                    <input type="text" name="name" id="name" placeholder="Name" onChange={handleOnChange} value={newSensor.name} />
                </div>
                <div>
                    {/* <ErrorMessage>Password can not be empty</ErrorMessage> */}
                    <input type="text" name="type" id="type" placeholder="Sensor Type" onChange={handleOnChange} value={newSensor.type} />
                </div>
                <div>
                    {/* <ErrorMessage>Password can not be empty</ErrorMessage> */}
                    <input type="text" name="icon" id="icon" placeholder="Icon" onChange={handleOnChange} value={newSensor.icon} />
                </div>
                <div>
                    {/* <ErrorMessage>Password can not be empty</ErrorMessage> */}
                    <input
                        type="text"
                        name="signValue"
                        id="signValue"
                        placeholder="Unity of measure"
                        onChange={handleOnChange}
                        value={newSensor.signValue}
                    />
                </div>

                <ButtonContainer>
                    <Button type="submit">Add Sensor</Button>
                </ButtonContainer>
            </Form>
        </FormContainer>
    );
}
