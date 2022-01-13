import { secondary } from "mongodb/lib/core/topologies/read_preference";
import { createGlobalStyle } from "styled-components";

export const theme = {
    fontWeights: {
        light: 200,
        normal: 400,
        bold: 700,
    },
    borderRadius: "4px",

    colors: {
        form: {
            primary: "rgba(231, 111, 81, 0.8)",
            secondary: "#e9c46a",
            tertiary: "#f7fcff",
            quaternary: "#fefefe",
            error: "#bb2124",
        },
        text: {
            primary: "#00111c",
            secondary: "#595959",
            inactive: "",
            error: "#bb2124",
        },
        ui: {
            primary: "#264653",
            secondary: "#e9c46a",
            tertiary: "#e76f51",
            quaternary: "#f7fcff",
            background: {
                primary: "#f7f7f7",
                secondary: "#264653",
            },
            success: "#22bb33",
            error: "#bb2124",
            warning: "#f0ad4e",
            hover: "rgba(231, 111, 81, 1)",
            disabled: "#B3B3B3",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            border: "#d9dcd6",
        },
        utility: {
            white: "#ffffff",
            black: "#000000",
            gray: "#d9dcd6",
            green: "green",
            red: "red",
        },

        // primary: "#08e5b9",
        // secondary: "#2e3346",
        // tertiary: "#f9f9f9",
        // bgColor: "#252837",

        glassColor: "linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3))",
    },
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        &:focus {
            outline: none;
        }
    } 
    
    html,
    body {
        background-color: ${theme.colors.ui.background.primary};;
        font-family: "Poppins";
        overflow-y: auto;
        overflow-x: hidden;
        font-size: 16px;
        height: 100%
    }
    #__next{
        height: 100%
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    input, select {
        width: 100%;
        padding: 0.75rem;
        margin: 0.25rem 0;
        font-size: 0.75rem;
        border-bottom: 0.0625rem solid ${theme.colors.ui.border}; 
        border-left: none;
        border-right: none;
        border-top: none;
        background-color: ${theme.colors.form.quaternary};
        color: ${theme.colors.text.secondary};
        

        &::placeholder {
            font-size: 0.75em;
            text-transform: uppercase;
            color: ${theme.colors.ui.disabled}
        }

        &:focus {
            border: unset;
            border-bottom: 0.125rem solid ${theme.colors.ui.primary}; 
            border-left: none;
            border-right: none;
            border-top: none;
        }
    }
`;
