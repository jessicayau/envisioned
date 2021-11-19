import styled from "styled-components";
// import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5vw;
    padding-right: calc(5vw + 15px);
    border-bottom: 1px solid white;
`;

export const Logo = styled.a`
    font-size: 1.5rem;
    font-weight: 700;
`;

export const NavbarContainer = styled.nav`
    @media screen and (max-width: 375px) {
        display: none;
    }
`;

export const Navbar = styled.ul`
    display: flex;
`;

export const NavItem = styled.li`
    position: relative;
    margin-left: 1rem;
    color: black;

    &::after {
        content: "";
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: -0.3rem;
        left: 0;
        right: 0;
        background-color: black;
        transform: scaleX(0);
        transform-origin: center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }

    &:hover {
        &::after {
            transform: scaleX(1);
        }
    }
`;
