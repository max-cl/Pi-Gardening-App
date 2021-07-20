// import styled from "styled-components";
// import Link from "next/link";
// import { useRouter } from "next/router";

// const Container = styled.div`
//     position: absolute;
//     background: ${(props) => props.theme.colors.secondary};
//     width: 45vw;
//     height: calc(100vh - 63px);
//     padding: 0.5em 1em;
//     left: -10px;
//     right: 0;
//     top: 62px;
//     border-right: 3px solid ${(props) => props.theme.colors.primary};
//     border-bottom: 3px solid ${(props) => props.theme.colors.primary};
//     border-top: 3px solid ${(props) => props.theme.colors.primary};
//     border-radius: 6px;
//     z-index: 3;

//     .active {
//         font-weight: bold;
//         color: ${(props) => props.theme.colors.primary};
//     }

//     .sign-out {
//         width: 140px;
//         padding: 0.5em 0.5em;
//         display: block;
//         border: 3px solid ${(props) => props.theme.colors.primary};
//         border-radius: 0.8em;
//         margin-top: 4em;
//     }

//     ul {
//         margin-top: 4em;
//         padding: 2em;

//         li {
//             margin: 1em 0;
//             list-style: none;
//             color: white;
//             font-size: 1.4em;
//             text-transform: uppercase;

//             &:hover {
//                 font-weight: bold;
//                 color: ${(props) => props.theme.colors.primary};
//             }
//         }
//     }

//     @media only screen and (min-width: 600px) {
//         width: 40vw;
//     }

//     @media only screen and (min-width: 700px) {
//         width: 35vw;
//     }

//     @media only screen and (min-width: 800px) {
//         width: 30vw;
//     }

//     @media only screen and (min-width: 1000px) {
//         width: 25vw;
//     }

//     @media only screen and (min-width: 1300px) {
//         width: 20vw;
//     }
// `;

// export default function Drawer() {
//     const router = useRouter();
//     return (
//         <Container>
//             <ul>
//                 <li className={router.asPath === "/live" ? "active" : ""}>
//                     <Link href="/live">
//                         <a>Live data</a>
//                     </Link>
//                 </li>
//                 <li className={router.asPath === "/dashboard" ? "active" : ""}>
//                     <Link href="/dashboard">
//                         <a>Dashboard</a>
//                     </Link>
//                 </li>
//                 <li className={router.asPath === "/devices" ? "active" : ""}>
//                     <Link href="/devices">
//                         <a>Devices</a>
//                     </Link>
//                 </li>
//                 <li className={router.asPath === "/profile" ? "active" : ""}>
//                     <Link href="/profile">
//                         <a>Profile</a>
//                     </Link>
//                 </li>
//                 <li className="sign-out">
//                     <Link href="/">
//                         <a>Sign Out</a>
//                     </Link>
//                 </li>
//             </ul>
//         </Container>
//     );
// }
