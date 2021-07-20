import { Button, FlipSwitch, FormContainer, ServerMessage } from "../Common";

export default function FormAddSensor({
    title,
    handleOnChange,
    handleOnSubmit,
    newSensor,
    // onChangeStatus,
    serverMessage,
}) {
    return (
        <FormContainer>
            <h2>{title}</h2>
            <ServerMessage>{serverMessage}</ServerMessage>
            <form onSubmit={handleOnSubmit}>
                <div>
                    {/* <ErrorMessage>Email can not be empty</ErrorMessage> */}
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        onChange={handleOnChange}
                        value={newSensor.name}
                    />
                </div>
                <div>
                    {/* <ErrorMessage>Password can not be empty</ErrorMessage> */}
                    <input
                        type="text"
                        name="type"
                        id="type"
                        placeholder="Sensor Type"
                        onChange={handleOnChange}
                        value={newSensor.type}
                    />
                </div>
                <div>
                    {/* <ErrorMessage>Password can not be empty</ErrorMessage> */}
                    <input
                        type="text"
                        name="icon"
                        id="icon"
                        placeholder="Icon"
                        onChange={handleOnChange}
                        value={newSensor.icon}
                    />
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
                {/* <div>
                    <FlipSwitch isChecked={newSensor.status} handleOnChange={onChangeStatus} />
                </div> */}
                <Button type="submit" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} width={100}>
                    Add Sensor
                </Button>
            </form>
        </FormContainer>
    );
}
