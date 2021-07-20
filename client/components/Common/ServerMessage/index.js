import styled from "styled-components";

const Message = styled.p`
    color: green;
`;

export function ServerMessage({ children }) {
    return (
        <div>
            <Message>{children}</Message>
        </div>
    );
}
