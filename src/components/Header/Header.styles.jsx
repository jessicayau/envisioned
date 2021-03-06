import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: relative;
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5vw;
    padding-right: calc(5vw + 15px);
    background-color: white;
    z-index: 10;

    @media screen and (max-height: 768px) {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
    }
`;

export const Logo = styled.a`
    font-size: 1.5rem;
    font-weight: 700;
`;

export const Navbar = styled.nav`
    display: flex;
    gap: 1rem;

    @media screen and (max-width: 768px) {
        position: absolute;
        width: 100%;
        height: 60vh;
        min-height: 400px;
        max-height: 450px;
        top: 0;
        left: 0;
        right: 0;
        transform: ${(props) =>
            props.menuIsOpen ? "translateY(0)" : "translateY(-210%)"};
        padding: 5rem 0 4rem;
        flex-direction: column;
        align-items: center;
        background-color: white;
        font-size: 1.2rem;
        transition: transform 500ms ease;

        &::before {
            content: "";
            width: 100vw;
            height: 100vh;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            background-color: transparent;
            overflow: hidden;
        }
    }
`;

export const NavItem = styled.span`
    position: relative;
    color: black;

    .active {
        font-weight: 700;
    }

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

export const NavToggleBtn = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1.6rem;
        height: 1.6rem;
        cursor: pointer;
        z-index: 6;
    }
`;

export const Line = styled.p`
    position: relative;
    width: 24px;
    height: 2px;
    background-color: ${(props) =>
        props.menuIsOpen ? "transparent" : "black"};
    border-radius: 5px;
    transition: all 250ms ease-in-out;

    &::before,
    &::after {
        content: "";
        width: 24px;
        height: 2px;
        background-color: ${(props) =>
            props.menuIsOpen ? "#3F7C91" : "black"};
        border-radius: 5px;
        transition: all 250ms ease-in-out;
        position: absolute;
    }

    &::before {
        transform: ${(props) =>
            props.menuIsOpen ? "rotate(-135deg)" : "translateY(-.5rem)"};
    }

    &::after {
        transform: ${(props) =>
            props.menuIsOpen ? "rotate(135deg)" : "translateY(.5rem)"};
    }
`;
