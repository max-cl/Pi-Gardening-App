import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

const Li = styled(motion.li)`
    list-style: none;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: white;

    .active {
        font-weight: bold;
        color: ${(props) => props.theme.colors.primary};
    }

    .icon-placeholder {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        flex: 40px 0;
        margin-right: 20px;
        border: 2px solid ${(props) => props.theme.colors.primary};
    }

    .text-placeholder {
        border-radius: 5px;
        width: 200px;
        height: 40px;
        flex: 1;
        font-size: 1.5em;
    }
`;

export const MenuItem = ({ id, sectionName, path, handleClick }) => {
    const router = useRouter();

    return (
        <Link href={`${path}`}>
            <a>
                <Li
                    variants={variants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div
                        onClick={handleClick}
                        className={`text-placeholder ${
                            router.asPath === path ? "active" : ""
                        }`}
                    >
                        {sectionName}
                    </div>
                </Li>
            </a>
        </Link>
    );
};
