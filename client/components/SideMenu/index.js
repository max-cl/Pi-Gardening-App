import * as React from "react";
import styled from "styled-components";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

const Nav = styled(motion.nav)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    z-index: ${(props) => (props.open ? 1002 : 0)};
`;

const Drawer = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    background: ${(props) => props.theme.colors.secondary};
`;

export default function SideMenu() {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <Nav initial={false} animate={isOpen ? "open" : "closed"} custom={height} ref={containerRef} open={isOpen}>
            <Drawer variants={sidebar} />
            {isOpen && <Navigation />}
            <MenuToggle toggle={() => toggleOpen()} />
        </Nav>
    );
}
