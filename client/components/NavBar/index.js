import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
    height: 72px;
    background-color: ${(props) => props.theme.colors.ui.primary};
    padding: 1rem;
    position: fixed;
    display: inline-block;
    width: 100%;
    z-index: 1002;

    .container-logo {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .logo {
        text-transform: uppercase;
        font-weight: ${(props) => props.theme.fontWeights.bold};
        color: ${(props) => props.theme.colors.ui.secondary};
        font-size: 1.25rem;

        span {
            color: ${(props) => props.theme.colors.utility.white};
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
