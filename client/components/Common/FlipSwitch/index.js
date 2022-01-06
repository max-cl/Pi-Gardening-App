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
        border: 0.125rem solid ${(props) => props.theme.colors.border};
        border-radius: 1.25rem;
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
        line-height: 2rem;
        font-size: 1rem;
        color: ${(props) => props.theme.colors.white};
        font-weight: bold;
        box-sizing: border-box;
    }
    .onoffswitch-inner:before {
        content: "ON";
        padding-left: 0.75rem;
        background-color: green;
        color: ${(props) => props.theme.colors.white};
    }
    .onoffswitch-inner:after {
        content: "OFF";
        padding-right: 0.75rem;
        background-color: red;
        color: ${(props) => props.theme.colors.white};
        text-align: right;
    }
    .onoffswitch-switch {
        display: block;
        width: 18px;
        margin: 0.5rem;
        background: ${(props) => props.theme.colors.white};
        position: absolute;
        top: 0;
        bottom: 0;
        right: 3.5rem;
        border: 0.125rem solid ${(props) => props.theme.colors.border};
        border-radius: 1.25rem;
        transition: all 0.3s ease-in 0s;
    }
    .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {
        margin-left: 0;
    }
    .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {
        right: 0;
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
