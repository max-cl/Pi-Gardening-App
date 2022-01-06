import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.div.attrs((props) => ({
    height: props.height || 376,
}))`
    width: 376px;
    height: ${(props) => props.height}px;
    border: 0.25rem solid ${(props) => props.theme.colors.primary};
    border-radius: 0.5rem;
    padding: 3rem 2rem;
    position: relative;
    z-index: 1;
    box-shadow: ${(props) => props.theme.boxShadow};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
        font-size: 1rem;
        color: ${(props) => props.theme.colors.white};
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
