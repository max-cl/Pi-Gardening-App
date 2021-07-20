import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)`
    width: 80%;
    border: 3px solid ${(props) => props.theme.colors.primary};
    border-radius: 0.8em;
    padding: 6em 3em;
    position: relative;
    z-index: 1;
    box-shadow: ${(props) => props.theme.boxShadow};

    &:before {
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
    }

    @media only screen and (min-width: 768px) {
        width: 400px;
    }

    @media only screen and (min-width: 1024px) {
        width: 440px;
    }

    @media only screen and (min-width: 1366px) {
        width: 440px;
    }
`;

export default function FormContainer({ children }) {
    return (
        <Container animate={{ scale: 1.2 }} transition={{ duration: 1 }}>
            {children}
        </Container>
    );
}
