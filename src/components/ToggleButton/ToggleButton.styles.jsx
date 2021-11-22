import styled from "styled-components";

export const ToggleButtonContainer = styled.button`
    display: none;

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    @media screen and (max-width: 1440px) {
        position: absolute;
        bottom: 0;
        left: 1rem;
        height: 4rem;
        width: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        /* border-top-right-radius: 20%;
        border-bottom-right-radius: 20%; */
        /* border-left: none; */
        background-color: transparent;
        color: mistyrose;
        font-size: 1.5rem;
        z-index: 20;
    }
`;
