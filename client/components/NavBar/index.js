import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
    background-color: ${(props) => props.theme.colors.secondary};
    padding: 1rem;
    position: relative;

    .container-logo {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .logo {
        text-transform: uppercase;
        font-weight: bold;
        color: ${(props) => props.theme.colors.white};
        font-size: 1.25rem;

        span {
            color: ${(props) => props.theme.colors.primary};
        }
    }
`;

export default function NavBar() {
    return (
        <Container>
            <div className="container-logo">
                <Link href="/">
                    <a className="logo">
                        PI<span>Gardenning</span>
                    </a>
                </Link>
            </div>
        </Container>
    );
}
