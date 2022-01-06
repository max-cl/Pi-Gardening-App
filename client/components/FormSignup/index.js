import styled from "styled-components";
// Components
import { Button, ErrorMessage } from "../Common";

const Form = styled.form`
    width: 100%;
`;

export default function FormSignup({ handleOnSubmitSignup, formMessage, handleOnChangeSignup, signupValues }) {
    return (
        <Form onSubmit={handleOnSubmitSignup}>
            {formMessage.status === "error" && <ErrorMessage>{formMessage.error}</ErrorMessage>}
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
            <Button type="submit" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} width={100}>
                Signup
            </Button>
        </Form>
    );
}
