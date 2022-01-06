import styled from "styled-components";

// Components
import { FormContainer } from "../Common";
import FormSignin from "../FormSignin";
import FormSignup from "../FormSignup";

const FormOptions = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;

    a.active {
        background: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.secondary};
        cursor: not-allowed;
        pointer-events: none;
    }

    a.disabled {
        color: white;
        background: ${(props) => props.theme.colors.secondary};
    }

    .signin {
        margin-right: -0.125rem;
    }

    .signup {
        margin-left: -0.125rem;
    }

    a {
        padding: 0.5rem 1.25em;
        color: ${(props) => props.theme.colors.white};
        font-weight: bold;
        border-radius: 0.078125rem;
        margin-top: -0.25rem;
        text-align: center;
        text-transform: uppercase;
        cursor: pointer;
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
        <FormContainer height={isLogin ? undefined : 476}>
            <FormOptions>
                <a href="#" className={`signin ${isLogin ? "active" : "disabled"}`} onClick={handleIsLogin}>
                    Login
                </a>
                <a href="#" className={`signup ${isLogin ? "disabled" : "active"}`} onClick={handleIsLogin}>
                    Signup
                </a>
            </FormOptions>
            <>
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
            </>
        </FormContainer>
    );
}
