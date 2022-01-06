import styled from "styled-components";

const Message = styled.span`
    color: ${(props) => props.theme.colors.error};
    font-size: 0.75rem;
    font-weight: bold;
    display: block;
    text-transform: uppercase;
`;

export const ErrorMessage = ({ children }) => {
    return <Message>{children}</Message>;
};
