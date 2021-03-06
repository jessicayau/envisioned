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

    p {
        margin-top: 2rem;
        line-height: 1.3rem;
    }

    @media screen and (max-height: 700px) {
        padding: 1rem;
    }
    @media screen and (min-width: 1440px) {
        left: 0;
    }
`;

export const Categories = styled.div`
    margin-top: 1rem;
`;
