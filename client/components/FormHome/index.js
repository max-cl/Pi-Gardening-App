import styled from "styled-components";

// Components
import { FormContainer } from "../Common";
import FormSignin from "../FormSignin";
import FormSignup from "../FormSignup";

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .forgot-password {
        color: ${(props) => props.theme.colors.tertiary};
        font-weight: lighter;
        font-size: 1rem;
        border: unset;

        &:hover {
            font-weight: bold;
        }
    }
`;

const FormOptions = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1em;

    a.active {
        background: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.secondary};
    }

    a.disabled {
        cursor: not-allowed;
        pointer-events: none;
    }

    .signin {
        margin-right: -2px;
    }

    .signup {
        margin-left: -2px;
    }

    a {
        padding: 0.4em 1.2em;
        color: ${(props) => props.theme.colors.tertiary};
        border: 1px solid ${(props) => props.theme.colors.primary};
        font-weight: bold;
        border-radius: 0.1em;
        margin-top: -0.2em;
        text-align: center;
        text-transform: uppercase;
        cursor: pointer;

        &:hover {
            color: white;
            background: ${(props) => props.theme.colors.secondary};
            border: 1px solid ${(props) => props.theme.colors.secondary};
        }
    }
`;

export default function FormHome({
    isLogin,
    handleOnSubmitLogin,
    handleOnChangeLogin,
    loginValues,
    handleOnSubmitSignup,
    handleOnChangeSignup,
    signupValues,
    formMessage,
    handleIsLogin,
}) {
    return (
        <Container>
            <FormContainer>
                <FormOptions>
                    <a href="#" className={`signin ${isLogin ? "active disabled" : ""}`} onClick={handleIsLogin}>
                        Login
                    </a>
                    <a href="#" className={`signup ${isLogin ? "" : "active disabled"}`} onClick={handleIsLogin}>
                        Signup
                    </a>
                </FormOptions>
                <div>
                    {isLogin ? (
                        <FormSignin
                            handleOnSubmitLogin={handleOnSubmitLogin}
                            formMessage={formMessage}
                            handleOnChangeLogin={handleOnChangeLogin}
                            loginValues={loginValues}
                        />
                    ) : (
                        <FormSignup
                            handleOnSubmitSignup={handleOnSubmitSignup}
                            formMessage={formMessage}
                            handleOnChangeSignup={handleOnChangeSignup}
                            signupValues={signupValues}
                        />
                    )}
                </div>
            </FormContainer>
        </Container>
    );
}
