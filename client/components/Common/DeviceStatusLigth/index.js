import styled from "styled-components";

export const DeviceStatusLigth = styled.div`
    background: ${(props) => (props.status ? "green" : "red")};
    padding: 0.5em;
    width: 10px;
    border-radius: 50%;
    margin: 0 auto;
`;
