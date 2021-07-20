import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    margin: 2em;
    padding: 0;
    background: ${(props) => props.theme.colors.tertiary};
    border-radius: ${(props) => props.theme.borderRadiusCard};
    box-shadow: ${(props) => props.theme.boxShadow};
    max-height: 76vh;
    overflow: auto;

    @media only screen and (min-width: 1000px) {
        margin: 0;
        margin-top: 2em;
        padding: 2.4em;
    }
`;

export default function TableContainer({ children }) {
    return (
        <Container animate={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
            {children}
        </Container>
    );
}
