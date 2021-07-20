import { createGlobalStyle } from "styled-components";

export const theme = {
    colors: {
        primary: "#08e5b9",
        secondary: "#2e3346",
        tertiary: "#f9f9f9",
        bgColor: "#252837",
        glassColor: "linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3))",
    },
    boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
    borderRadiusCard: "4px",
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } 
    
    html,
    body {
        background-color: ${theme.colors.bgColor};
        font-family: "Poppins";
       
        /* overflow: hidden; */
        overflow-y: auto;
        overflow-x: hidden;
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

    input {
        box-sizing: border-box;
        width: 100%;
        padding: 1em;
        margin: 0.4em 0;
        border: none;
        border-radius: 0.1em;

        &:focus {
            border: unset;
            border: 1px solid ${theme.colors.primary};
        }
    }

    input[type=submit] {
        width: 100%;
        padding: 0.5em;
        margin: 0.4em 0;
        background: ${theme.colors.primary};
        color: ${theme.colors.secondary};
        font-weight: bold;
        text-transform: uppercase;
        border-radius: 0.1em;
        cursor: pointer;
        &:active {
            color: white;
        } 
        &:hover {
            color: white;
            background: #2e3346;
            border: 1px solid ${theme.colors.primary}
        }
}   

    button {
        /* width: 100%; */
        padding: 0.5em;
        margin: 0.4em 0;
        background: ${theme.colors.primary};
        color: ${theme.colors.secondary};
        font-weight: bold;
        text-transform: uppercase;
        border: none;
        border-radius: 0.1em;
    }

`;
