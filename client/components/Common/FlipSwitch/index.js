import styled from "styled-components";

const Container = styled.div`
    position: relative;
    width: 90px;

    .onoffswitch-checkbox {
        position: absolute;
        opacity: 0;
        pointer-events: none;
    }
    .onoffswitch-label {
        display: block;
        overflow: hidden;
        cursor: pointer;
        border: 2px solid #999999;
        border-radius: 20px;
    }
    .onoffswitch-inner {
        display: block;
        width: 200%;
        margin-left: -100%;
        transition: margin 0.3s ease-in 0s;
    }
    .onoffswitch-inner:before,
    .onoffswitch-inner:after {
        display: block;
        float: left;
        width: 50%;
        height: 30px;
        padding: 0;
        line-height: 30px;
        font-size: 14px;
        color: white;
        font-family: Trebuchet, Arial, sans-serif;
        font-weight: bold;
        box-sizing: border-box;
    }
    .onoffswitch-inner:before {
        content: "ON";
        padding-left: 10px;
        /* background-color: #34a7c1; */
        background-color: green;
        color: white;
    }
    .onoffswitch-inner:after {
        content: "OFF";
        padding-right: 10px;
        background-color: red;
        /* color: #999999; */
        color: white;
        text-align: right;
    }
    .onoffswitch-switch {
        display: block;
        width: 18px;
        margin: 6px;
        background: #ffffff;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 56px;
        border: 2px solid #999999;
        border-radius: 20px;
        transition: all 0.3s ease-in 0s;
    }
    .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {
        margin-left: 0;
    }
    .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {
        right: 0px;
    }
`;

export default function FlipSwitch({ id, isChecked, handleOnChange }) {
    return (
        <Container>
            <input
                type="checkbox"
                name={`onoffswitch${id}`}
                className="onoffswitch-checkbox"
                id={`myonoffswitch${id}`}
                tabIndex={id}
                checked={isChecked}
                onChange={handleOnChange}
            />
            <label className="onoffswitch-label" htmlFor={`myonoffswitch${id}`}>
                <span className="onoffswitch-inner"></span>
                <span className="onoffswitch-switch"></span>
            </label>
        </Container>
    );
}
