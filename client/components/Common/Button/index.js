import styled from "styled-components";

export const Button = styled.button.attrs((props) => ({
    type: props.type || "button",
    width: props.width || 100,
    zIndex: props.zIndex || 1,
}))`
    z-index: ${(props) => props.zIndex};
    cursor: pointer;
    padding: 0.75rem;
    margin: 0.25rem 0;
    background-color: ${(props) => props.theme.colors.form.primary};
    color: ${(props) => props.theme.colors.utility.white};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    text-transform: uppercase;
    border: none;
    box-shadow: ${(props) => props.theme.colors.ui.boxShadow};
    width: 100%;

    &:disabled {
        background-color: ${(props) => props.theme.colors.ui.disabled};
        cursor: not-allowed;
        pointer-events: none;
    }

    &:hover {
        background-color: ${(props) => props.theme.colors.ui.hover};
    }
`;
