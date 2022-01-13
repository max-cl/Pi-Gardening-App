import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    margin: 2rem;
    padding: 0;
    background-color: ${(props) => props.theme.colors.utility.white};
    border-radius: ${(props) => props.theme.borderRadiusCard};
    box-shadow: ${(props) => props.theme.colors.ui.boxShadow};
    max-height: 76vh;
    overflow: auto;

    @media only screen and (min-width: 1000px) {
        margin: 0;
        margin-top: 2rem;
        padding: 2.5rem;
    }
`;

export default function TableContainer({ children }) {
    return (
        <Container animate={{ scale: 1.02 }} transition={{ duration: 0.5 }}>
            {children}
        </Container>
    );
}
