import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

// Utils
import { setLogout } from "../../util/authUtil";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const Ul = styled(motion.ul)`
    padding: 25px;
    position: absolute;
    top: 100px;
    width: 230px;
`;

export const Navigation = () => (
    <Ul variants={variants}>
        {Sections.map((section) => (
            <MenuItem
                id={section.id}
                sectionName={section.sectionName}
                path={section.path}
                key={section.id}
                handleClick={section.handleClick}
            />
        ))}
    </Ul>
);

const Sections = [
    {
        id: 1,
        sectionName: "Dashboard",
        path: "/dashboard",
        handleClick: () => console.log("Dashboard Section"),
    },
    {
        id: 2,
        sectionName: "Real-Time",
        path: "/realtime",
        handleClick: () => console.log("Real-Time Section"),
    },

    {
        id: 3,
        sectionName: "Devices",
        path: "/devices",
        handleClick: () => console.log("Devices Section"),
    },
    {
        id: 4,
        sectionName: "Profile",
        path: "/profile",
        handleClick: () => console.log("Profile Section"),
    },
    {
        id: 99,
        sectionName: "Sign Out",
        path: "/",
        handleClick: (e) => setLogout(e),
    },
];
