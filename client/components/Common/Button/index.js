import { motion } from "framer-motion";
import styled from "styled-components";

export const Button = styled.button.attrs((props) => ({
    type: props.type || "button",
    width: props.width || 50,
    zIndex: props.zIndex || 1,
}))`
    width: ${(props) => props.width}%;
    z-index: ${(props) => props.zIndex};
    cursor: pointer;

    @media only screen and (min-width: 600px) {
        width: 25%;
    }

    @media only screen and (min-width: 900px) {
        width: 15%;
    }

    @media only screen and (min-width: 1000px) {
        width: ${(props) => props.width}%;
    }
`;
