// Components
import HomeContainer from "../components/Containers/Home";

// Utils
import { getAppCookies, verifyToken } from "../util/authUtil";

export default function App() {
    return <HomeContainer />;
}

export async function getServerSideProps(context) {
    const { req } = context;
    const { token } = getAppCookies(req);
    const profile = token ? verifyToken(token.split(" ")[1]) : "";
    console.log("profile-Home: ", profile);

    if (!profile) {
        return {
            props: {},
        };
    } else {
        console.log("Redirect from Home to Dashboard ");
        return {
            redirect: {
                permanent: false,
                destination: "/dashboard",
            },
        };
    }
}
