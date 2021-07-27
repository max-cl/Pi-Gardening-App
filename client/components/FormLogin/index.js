import { useState } from "react";
import styled from "styled-components";

// Components
import { Button, FormContainer } from "../Common";

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

const ErrorMessage = styled.span`
    color: rgb(255, 149, 149);
    font-size: 0.8em;
    display: block;
    margin-top: -2px;
`;

export default function FormLogin({
    handleOnSubmitLogin,
    handleOnChangeLogin,
    loginValues,
    handleOnSubmitSignup,
    handleOnChangeSignup,
    signupValues,
    formMessage,
}) {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <Container>
            <FormContainer>
                <FormOptions>
                    <a
                        href="#"
                        className={`signin ${isLogin ? "active disabled" : ""}`}
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        Login
                    </a>
                    <a
                        href="#"
                        className={`signup ${isLogin ? "" : "active disabled"}`}
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        Signup
                    </a>
                </FormOptions>
                <div>
                    {isLogin ? (
                        <>
                            <form onSubmit={handleOnSubmitLogin}>
                                {formMessage.status === "error" && (
                                    <ErrorMessage>
                                        {formMessage.error}
                                    </ErrorMessage>
                                )}
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="login-email"
                                        placeholder="Email Address"
                                        onChange={handleOnChangeLogin}
                                        value={loginValues.email}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        name="password"
                                        id="login-password"
                                        placeholder="Password"
                                        onChange={handleOnChangeLogin}
                                        value={loginValues.password}
                                        autoComplete="false"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    width={100}
                                >
                                    Signin
                                </Button>
                            </form>
                            <a href="#" className="forgot-password">
                                Forgot password?
                            </a>
                        </>
                    ) : (
                        <>
                            <form onSubmit={handleOnSubmitSignup}>
                                <div>
                                    <input
                                        type="text"
                                        name="firstname"
                                        id="login-firstname"
                                        placeholder="Firstname"
                                        onChange={handleOnChangeSignup}
                                        value={signupValues.firstname}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="lastname"
                                        id="login-lastname"
                                        placeholder="Lastname"
                                        onChange={handleOnChangeSignup}
                                        value={signupValues.lastname}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="login-email"
                                        placeholder="Email Address"
                                        onChange={handleOnChangeSignup}
                                        value={signupValues.email}
                                    />
                                </div>

                                <div>
                                    <input
                                        type="password"
                                        name="password"
                                        id="login-password"
                                        placeholder="Password"
                                        onChange={handleOnChangeSignup}
                                        value={signupValues.password}
                                        autoComplete="false"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        name="repeated_password"
                                        id="login-repeated_password"
                                        placeholder="Repeat Password"
                                        onChange={handleOnChangeSignup}
                                        value={signupValues.repeated_password}
                                        autoComplete="false"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    width={100}
                                >
                                    Signup
                                </Button>
                            </form>
                        </>
                    )}
                </div>
            </FormContainer>
        </Container>
    );
}
