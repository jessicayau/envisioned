import styled from "styled-components";

export const SidebarContainer = styled.div`
    position: fixed;
    left: ${(props) => (props.sidebarIsOpen ? 0 : "-230px")};
    width: 230px;
    height: 100vh;
    padding: 3rem 1rem 1rem;
    border-right: 1px solid rgba(200, 200, 241, 0.5);
    background-color: white;
    transition: all 250ms ease-in-out;
    z-index: 15;
`;

export const Categories = styled.div`
    margin-top: 1rem;
`;
