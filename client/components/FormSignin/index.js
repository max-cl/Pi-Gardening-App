import styled from "styled-components";
// Components
import { Button, ErrorMessage, ButtonContainer } from "../Common";

const Form = styled.form`
    width: 100%;
`;

const ForgotLink = styled.a`
    color: ${(props) => props.theme.colors.text.primary};
    font-weight: ${(props) => props.theme.fontWeights.light};
    font-size: 0.75rem;
    padding: 1rem 0 0;

    &:hover {
        font-weight: ${(props) => props.theme.fontWeights.bold};
    }
`;

export default function FormSignin({ handleOnSubmitLogin, formMessage, handleOnChangeLogin, loginValues }) {
    return (
        <>
            <Form onSubmit={handleOnSubmitLogin} autocomplete="off">
                {formMessage.status === "error" && <ErrorMessage>{formMessage.error}</ErrorMessage>}
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
                <ButtonContainer>
                    <Button type="submit">Signin</Button>
                </ButtonContainer>
            </Form>
            <ForgotLink href="#">Forgot password?</ForgotLink>
        </>
    );
}
