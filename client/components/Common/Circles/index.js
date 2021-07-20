import styled from "styled-components";

export const Circle1 = styled.div`
    background: white;
    background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3));
    height: 12rem;
    width: 12rem;
    position: absolute;
    border-radius: 50%;
    top: 10%;
    right: 6%;
    box-shadow: ${(props) => props.theme.boxShadow};

    @media only screen and (min-width: 550px) {
        right: 12%;
    }

    @media only screen and (min-width: 700px) {
        right: 18%;
    }

    @media only screen and (min-width: 800px) {
        height: 14rem;
        width: 14rem;
        right: 14%;
    }

    @media only screen and (min-width: 1000px) {
        top: 12%;
        right: 20%;
    }
    @media only screen and (min-width: 1200px) {
        right: 24%;
    }

    @media only screen and (min-width: 1350px) {
        right: 26%;
    }
    @media only screen and (min-width: 1600px) {
        right: 28%;
    }
`;

export const Circle2 = styled.div`
    background: white;
    background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3));
    height: 12rem;
    width: 12rem;
    position: absolute;
    border-radius: 50%;
    bottom: 10%;
    left: 6%;
    box-shadow: ${(props) => props.theme.boxShadow};

    @media only screen and (min-width: 550px) {
        left: 12%;
    }

    @media only screen and (min-width: 700px) {
        left: 18%;
    }

    @media only screen and (min-width: 800px) {
        height: 14rem;
        width: 14rem;
        bottom: 8%;
        left: 14%;
    }

    @media only screen and (min-width: 1000px) {
        left: 20%;
    }
    @media only screen and (min-width: 1200px) {
        left: 24%;
    }

    @media only screen and (min-width: 1350px) {
        left: 26%;
    }
    @media only screen and (min-width: 1600px) {
        left: 30%;
    }
`;
