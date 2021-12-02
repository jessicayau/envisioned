import styled from "styled-components";

export const TooltipContainer = styled.div`
    position: absolute;
    top: -2.5rem;
    left: -50%;
    display: none;
    padding: 0.3rem 0.5rem;
    border-radius: 5px;
    border: 1px solid rgba(200, 200, 241, 0.5);
    color: black;
    background-color: white;

    &::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid white;
    }
`;
