import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

// Components
import FormHome from "../../FormHome";

// Utils
import { ApiRequestUtil } from "../../../util/ApiRequestUtil";

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.ui.background.secondary};
`;

const TitleContainer = styled.div`
    width: 100%;
    height: 24%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        text-transform: uppercase;
        font-weight: bold;
        color: white;
        font-size: 4rem;
        /* padding: 0 0 2rem; */
        color: ${(props) => props.theme.colors.ui.quaternary};
    }

    span {
        color: ${(props) => props.theme.colors.ui.secondary};
    }
`;

const FormContainer = styled.div`
    height: 76%;
`;

export default function HomeContainer() {
    // Router
    const router = useRouter();
    // States
    const [isLogin, setIsLogin] = useState(true);
    const [loginValues, setLoginValues] = useState({
        email: "",
        password: "",
    });
    const [signupValues, setSignupValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        repeated_password: "",
    });
    const [loading, setLoading] = useState(false);
    const [formMessage, setFormMessage] = useState({});

    const handleOnChangeLogin = (event) => {
        setLoginValues({
            ...loginValues,
            [event.target.name]: event.target.value,
        });
        console.log("onchange: ", loginValues);
    };

    const handleOnSubmitLogin = async (event) => {
        try {
            event.preventDefault();
            setLoading(!loading);
            const result = await ApiRequestUtil(`/auth/signin`, "POST", loginValues);

            if (result.success && result.token) {
                Cookies.set("token", result.token);
                console.log("resultSuccessLogin: ", result);
                router.push("/dashboard");
            } else {
                setFormMessage(result);
                console.log("resulFailedLogin: ", result);
            }
            setLoading(false);
            console.log("Submit: ", loginValues);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleOnSubmitSignup = async (event) => {
        try {
            event.preventDefault();
            setLoading(!loading);
            const result = await ApiRequestUtil(`/auth/signup`, "POST", signupValues);

            if (result.success && result.token) {
                Cookies.set("token", result.token);
                console.log("resultSuccessSignUp: ", result);
                router.push("/dashboard");
            } else {
                setFormMessage(result);
                console.log("resulFailedSignUp: ", result);
            }
            setLoading(false);
            console.log("Submit: ", signupValues);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleOnChangeSignup = (event) => {
        setSignupValues({
            ...signupValues,
            [event.target.name]: event.target.value,
        });
        console.log("onchange: ", signupValues);
    };

    const handleIsLogin = () => {
        setFormMessage({});
        setIsLogin(!isLogin);
    };

    return (
        <Container>
            <TitleContainer>
                <h1>
                    Pi<span>Gardenning</span>
                </h1>
            </TitleContainer>
            <FormContainer>
                <FormHome
                    isLogin={isLogin}
                    handleIsLogin={handleIsLogin}
                    handleOnSubmitLogin={handleOnSubmitLogin}
                    handleOnChangeLogin={handleOnChangeLogin}
                    handleOnSubmitSignup={handleOnSubmitSignup}
                    handleOnChangeSignup={handleOnChangeSignup}
                    loginValues={loginValues}
                    signupValues={signupValues}
                    formMessage={formMessage}
                />
            </FormContainer>
        </Container>
    );
}
