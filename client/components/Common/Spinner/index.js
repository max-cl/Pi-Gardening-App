import styled from "styled-components";

const Container = styled.div`
    width: 100px;
    height: 100px;
    background-color: transparent;
    animation-name: spin;
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    border-radius: 50%;
    border: 0.25rem solid ${(props) => props.theme.colors.primary};
    border-style: dotted;
    display: flex;
    justify-content: center;
    align-items: center;

    .inner {
        width: 90px;
        height: 90px;
        background-color: transparent;
        animation-name: spin;
        animation-duration: 5000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        border-radius: 50%;
        border: 0.25rem solid ${(props) => props.theme.colors.primary};
        border-style: dotted;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

export const Spinner = () => {
    return (
        <Container>
            <div class="inner"></div>
        </Container>
    );
};
