import styled from "styled-components";

export const ToolbarContainer = styled.div`
    position: relative;
    height: 4rem;
    width: 100%;
    border-top: 1px solid rgba(200, 200, 241, 0.5);
    background-color: rgba(0, 0, 0, 1);
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    gap: 1rem;
    padding: 0 5vw;
    z-index: 10;

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
`;

export const Icons = styled.div`
    display: flex;
    gap: 1rem;
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
    border: 1px solid grey;
    animation: shiftUp 250ms linear forwards;
    z-index: 5;

    @keyframes shiftUp {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
            transform: translate(-50%, -3.5rem);
        }
    }
`;
