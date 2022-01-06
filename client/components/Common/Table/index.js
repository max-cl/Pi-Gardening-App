import styled from "styled-components";

export const Table = styled.table`
    width: unset;
    margin: 1rem;
    font-size: 0.75rem;
    text-align: center;
    border-collapse: collapse;
    background: ${(props) => props.theme.colors.tertiary};

    tr {
        border-bottom: 0.0625rem solid ${(props) => props.theme.colors.secondary};
    }

    th {
        font-weight: bold;
        text-transform: uppercase;
    }
    td {
        padding: 0.5rem;
    }

    .icon {
        cursor: pointer;

        &:hover {
            width: 140%;
        }
    }

    @media only screen and (min-width: 550px) {
        width: 80vw;
    }

    @media only screen and (min-width: 1000px) {
        width: 800px;
        margin: unset;
        font-size: unset;
    }
`;
