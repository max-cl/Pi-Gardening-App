import styled from "styled-components";

export const DeviceStatusLigth = styled.div`
    background-color: ${(props) => (props.status ? props.theme.colors.utility.green : props.theme.colors.utility.red)};
    padding: 0.5rem;
    width: 10px;
    border-radius: 50%;
    margin: 0 auto;
    box-shadow: ${(props) => props.theme.colors.ui.boxShadow};
`;
