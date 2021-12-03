import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    HeaderContainer,
    Line,
    Logo,
    Navbar,
    NavItem,
    NavToggleBtn,
} from "./Header.styles";

const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const handleMenu = () => {
        if (menuIsOpen) {
            setMenuIsOpen(!menuIsOpen);
        } else return;
    };

    return (
        <HeaderContainer>
            <Logo href="/">Envisioned</Logo>
            <Navbar menuIsOpen={menuIsOpen}>
                <NavItem onClick={handleMenu}>
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                </NavItem>
                <NavItem onClick={handleMenu}>
                    <NavLink to="/create">Create</NavLink>
                </NavItem>
                <NavItem onClick={handleMenu}>
                    <NavLink to="/templates/1">Template 1</NavLink>
                </NavItem>
                <NavItem onClick={handleMenu}>
                    <NavLink to="/templates/2">Template 2</NavLink>
                </NavItem>
                <NavItem onClick={handleMenu}>
                    <NavLink to="/templates/3">Template 3</NavLink>
                </NavItem>
                <NavItem onClick={handleMenu}>
                    <NavLink to="/text">Text</NavLink>
                </NavItem>
                <NavItem onClick={handleMenu}>
                    <NavLink to="/gradients">Gradients</NavLink>
                </NavItem>
            </Navbar>
            <NavToggleBtn
                role="button"
                aria-label="toggle navigation"
                onClick={() => setMenuIsOpen((prev) => !prev)}
            >
                <Line menuIsOpen={menuIsOpen}></Line>
            </NavToggleBtn>
        </HeaderContainer>
    );
};

export default Header;
