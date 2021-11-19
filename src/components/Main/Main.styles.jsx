import styled from "styled-components";

export const MainContainer = styled.div`
    position: relative;
    height: 100vh;
    margin-left: ${(props) => (props.sidebarIsOpen ? "230px" : 0)};
    transition: all 250ms ease-in-out;

    @media screen and (max-width: 1023px) {
        margin-left: 0;
    }
`;

export const ContentContainer = styled.div`
    height: calc(100vh - 8rem);
    width: 100%;
    overflow-y: scroll;
    scroll-behavior: smooth;
`;
