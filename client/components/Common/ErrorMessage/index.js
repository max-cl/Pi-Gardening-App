import styled from "styled-components";

const Message = styled.span`
    color: rgb(255, 149, 149);
    font-size: 0.8em;
    display: block;
    margin-top: -2px;
`;

export const ErrorMessage = ({ children }) => {
    return <Message>{children}</Message>;
};
