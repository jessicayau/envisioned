import React from "react";
import { NavLink } from "react-router-dom";
import {
    HeaderContainer,
    Logo,
    Navbar,
    NavbarContainer,
    NavItem,
} from "./Header.styles";

const Header = () => {
    return (
        <HeaderContainer>
            <Logo href="/">Envisioned</Logo>
            <NavbarContainer>
                <Navbar>
                    <NavItem>
                        <NavLink to="/">H</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/create">C</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/templates/1">T1</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/templates/4">T4</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/templates/3">T3</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/text">T</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/gradients">G</NavLink>
                    </NavItem>
                </Navbar>
            </NavbarContainer>
        </HeaderContainer>
    );
};

export default Header;
