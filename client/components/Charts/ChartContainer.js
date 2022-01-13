import styled from "styled-components";

export const ChartContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem 1.5rem;
    box-shadow: ${(props) => props.theme.colors.ui.boxShadow};

    /* @media only screen and (min-width: 600px) {
        padding: 2em;
    }

    @media only screen and (min-width: 1000px) {
        padding: 3em;
    } */
`;
