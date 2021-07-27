import { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

// Components
import FormLogin from "../../FormLogin";
import { Circle1, Circle2 } from "../../Common";

// Utils
import { ApiRequestUtil } from "../../../util/ApiRequestUtil";

export default function Login() {
    // Router
    const router = useRouter();
    // States
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
            let data = { ...loginValues };
            /* email */
            data = { ...data, email: loginValues.email || "" };
            /* password */
            data = { ...data, password: loginValues.password || "" };
            // Call an external API endpoint to get posts.
            // You can use any data fetching library
            setLoading(!loading);
            const result = await ApiRequestUtil(`/auth`, "POST", data);

            if (result.success && result.token) {
                Cookies.set("token", result.token);
                // window.location.href = referer ? referer : "/";
                // const pathUrl = referer ? referer.lastIndexOf("/") : "/";
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

    const handleOnSubmitSignup = (event) => {
        event.preventDefault();
        console.log("Submit: ", signupValues);
    };

    const handleOnChangeSignup = (event) => {
        setSignupValues({
            ...signupValues,
            [event.target.name]: event.target.value,
        });
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
                formMessage={formMessage}
            />
            <Circle1 />
            <Circle2 />
        </>
    );
}
