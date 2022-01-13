import styled from "styled-components";

// Components
import { FormContainer } from "../Common";
import FormSignin from "../FormSignin";
import FormSignup from "../FormSignup";

const FormOptions = styled.div`
    display: flex;
    justify-content: center;

    a.active {
        color: ${(props) => props.theme.colors.utility.black};
        border-bottom: 0.125rem solid ${(props) => props.theme.colors.form.secondary};
        cursor: not-allowed;
        pointer-events: none;
    }

    a.disabled {
        color: ${(props) => props.theme.colors.ui.disabled};
    }

    a {
        padding: 0.25rem 1rem;
        color: ${(props) => props.theme.colors.white};
        font-weight: ${(props) => props.theme.fontWeights.bold};
        text-align: center;
        text-transform: uppercase;
        cursor: pointer;
        font-size: 0.75rem;
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
                <a href="#" className={`${isLogin ? "active" : "disabled"}`} onClick={handleIsLogin}>
                    Login
                </a>
                <a href="#" className={`${isLogin ? "disabled" : "active"}`} onClick={handleIsLogin}>
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
