import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
    background: #2e3346;
    padding: 1em;
    position: relative;

    .logo {
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        color: white;
        font-size: 1.2em;

        span {
            color: ${(props) => props.theme.colors.primary};
        }
    }

    .container {
        display: flex;
        place-content: flex-end;
    }

    .mobile-menu {
        cursor: pointer;
        z-index: 1;
    }
`;

export default function NavBar() {
    return (
        <Container>
            <div className="container">
                <Link href="/">
                    <a className="logo">
                        PI<span> Gardenning</span>
                    </a>
                </Link>
            </div>
        </Container>
    );
}
