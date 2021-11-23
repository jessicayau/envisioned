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
                    <NavLink to="/templates/1">Template1</NavLink>
                </NavItem>
                <NavItem onClick={handleMenu}>
                    <NavLink to="/templates/4">Template4</NavLink>
                </NavItem>
                <NavItem onClick={handleMenu}>
                    <NavLink to="/templates/3">Template3</NavLink>
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
                onClick={() => setMenuIsOpen((prev) => !prev)}
            >
                <Line menuIsOpen={menuIsOpen}></Line>
            </NavToggleBtn>
        </HeaderContainer>
    );
};

export default Header;
