import styled from "styled-components";
import Image from "next/image";

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
    z-index: 1;

    h2 {
        color: white;
    }

    &:before {
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: ${(props) => props.theme.colors.bgColor};
        position: absolute;
        opacity: 1;
    }
`;

const IconContainer = styled.div`
    position: absolute;
    top: 18px;
    right: 15px;

    .icon {
        cursor: pointer;

        &:hover {
            width: 140%;
        }
    }
`;

export default function Modal({ children, handleClose }) {
    return (
        <ContainerModal>
            <IconContainer>
                <Image
                    className="icon"
                    src="/images/close.svg"
                    alt="Edit element"
                    width={20}
                    height={20}
                    objectFit="cover"
                    onClick={handleClose}
                />
            </IconContainer>
            {children}
        </ContainerModal>
    );
}
