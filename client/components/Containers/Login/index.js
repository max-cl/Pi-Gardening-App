import { useState } from "react";
import { useRouter } from "next/router";

// Components
import FormLogin from "../../FormLogin";
import { Circle1, Circle2 } from "../../Common";

export default function Login() {
    // Router
    const router = useRouter();

    const [loginValues, setLoginValues] = useState({ username: "", password: "" });
    const [signupValues, setSignupValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
        repeated_password: "",
    });

    const handleOnSubmitLogin = (event) => {
        event.preventDefault();
        console.log("Submit: ", loginValues);
        router.push("/dashboard");
    };

    const handleOnChangeLogin = (event) => {
        setLoginValues({ ...loginValues, [event.target.name]: event.target.value });
        console.log("onchange: ", loginValues);
    };

    const handleOnSubmitSignup = (event) => {
        event.preventDefault();
        console.log("Submit: ", signupValues);
    };

    const handleOnChangeSignup = (event) => {
        setSignupValues({ ...signupValues, [event.target.name]: event.target.value });
        console.log("onchange: ", signupValues);
    };

    return (
        <>
            <FormLogin
                handleOnSubmitLogin={handleOnSubmitLogin}
                handleOnChangeLogin={handleOnChangeLogin}
                handleOnSubmitSignup={handleOnSubmitSignup}
                handleOnChangeSignup={handleOnChangeSignup}
                loginValues={loginValues}
                signupValues={signupValues}
            />
            <Circle1 />
            <Circle2 />
        </>
    );
}
