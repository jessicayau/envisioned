import styled from "styled-components";

export const ToolbarContainer = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4rem;
    width: 100%;
    border-top: 1px solid rgba(200, 200, 241, 0.5);
    background-color: black;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    padding: 0 5vw;
    z-index: 100;
`;

export const Wrapper = styled.div`
    margin-left: auto;
`;

export const Icons = styled.div`
    display: flex;
    gap: 1rem;
`;

export const IconContainer = styled.button`
    position: relative;
    background-color: transparent;

    svg {
        height: 1.8rem;
        width: 1.8rem;
        color: white;
        cursor: pointer;

        @media screen and (max-width: 425px) {
            height: 1.5rem;
            width: 1.5rem;
        }
    }

    @media screen and (min-width: 769px) {
        &:hover {
            .tooltip {
                display: block;
            }
        }
    }
`;

export const CopiedMessage = styled.div`
    position: absolute;
    width: 200px;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 0.5rem 0;
    text-align: center;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    color: black;
    background-color: white;
    border: 1px solid rgba(200, 200, 241, 1);
    animation: shiftUp 250ms linear forwards;

    @keyframes shiftUp {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
            transform: translate(-50%, -5rem);
        }
    }
`;
