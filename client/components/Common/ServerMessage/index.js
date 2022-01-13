import styled from "styled-components";

const Message = styled.p`
    color: ${(props) => props.theme.colors.ui.success};
`;

export function ServerMessage({ children }) {
    return (
        <div>
            <Message>{children}</Message>
        </div>
    );
}
