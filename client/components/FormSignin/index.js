// Components
import { Button, ErrorMessage } from "../Common";

export default function FormSignin({ handleOnSubmitLogin, formMessage, handleOnChangeLogin, loginValues }) {
    return (
        <>
            <form onSubmit={handleOnSubmitLogin}>
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
            </form>
            <a href="#" className="forgot-password">
                Forgot password?
            </a>
        </>
    );
}
