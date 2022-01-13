import styled from "styled-components";

const Container = styled.div.attrs((props) => ({
    height: props.height || 376,
}))`
    width: 376px;
    height: ${(props) => props.height}px;
    padding: 3rem 2rem;
    position: relative;
    z-index: 1;
    box-shadow: ${(props) => props.theme.colors.ui.boxShadow};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.form.quaternary};

    h2 {
        font-size: 1rem;
        color: ${(props) => props.theme.colors.text.primary};
        text-transform: uppercase;
        font-weight: ${(props) => props.theme.fontWeights.bold};
    }

    /* &:before {
        content: "";
        background: ${(props) => props.theme.colors.glassColor};
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        opacity: 0.4;
        z-index: -1;
    } */
`;

export default function FormContainer({ height, children }) {
    return <Container height={height}>{children}</Container>;
}
