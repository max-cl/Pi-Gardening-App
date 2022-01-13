import styled from "styled-components";

const ContainerModal = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    z-index: 1003;

    &:before {
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: ${(props) => props.theme.colors.ui.background.secondary};
        position: absolute;
        opacity: 1;
    }
`;

const IconContainer = styled.div`
    position: absolute;
    top: 1rem;
    right: 2rem;
    color: ${(props) => props.theme.colors.ui.secondary};
    cursor: pointer;
    font-size: 2rem;
`;

export default function Modal({ children, handleClose }) {
    return (
        <ContainerModal>
            <IconContainer onClick={handleClose}>&#10006;</IconContainer>
            {children}
        </ContainerModal>
    );
}
