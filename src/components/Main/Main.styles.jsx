import styled from "styled-components";

export const MainContainer = styled.div`
    position: relative;
    margin-left: ${(props) => (props.sidebarIsOpen ? "230px" : 0)};
    margin-bottom: 4rem;
    transition: all 250ms ease-in-out;

    @media screen and (max-width: 1023px) {
        margin-left: 0;
    }

    @media screen and (min-width: 1440px) {
        margin-left: 230px;
    }
`;

export const ContentContainer = styled.main`
    height: calc(100vh - 8rem);
    width: 100%;
    overflow-y: scroll;
    scroll-behavior: smooth;
`;
