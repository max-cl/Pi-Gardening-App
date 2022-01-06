import styled from "styled-components";
// Components
import { Button, ErrorMessage } from "../Common";

const Form = styled.form`
    width: 100%;
`;

const ForgotLink = styled.a`
    color: ${(props) => props.theme.colors.white};
    font-weight: lighter;
    font-size: 0.75rem;

    &:hover {
        font-weight: bold;
    }
`;

export default function FormSignin({ handleOnSubmitLogin, formMessage, handleOnChangeLogin, loginValues }) {
    return (
        <>
            <Form onSubmit={handleOnSubmitLogin}>
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
                <Button type="submit" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} width={100}>
                    Signin
                </Button>
            </Form>
            <ForgotLink href="#">Forgot password?</ForgotLink>
        </>
    );
}
