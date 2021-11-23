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
        left: 0;
        height: 4rem;
        width: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        color: white;
        font-size: 1.5rem;
        z-index: 20;
    }
`;
