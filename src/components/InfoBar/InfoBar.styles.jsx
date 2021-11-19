import styled from "styled-components";

export const InfoBarContainer = styled.div`
    position: relative;
    height: 4rem;
    width: 100%;
    border-top: 1px solid rgba(200, 200, 241, 0.5);
    background-color: rgba(0, 0, 0, 1);
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 0 5vw;
    z-index: 10;

    svg {
        height: 1.8rem;
        width: 1.8rem;
        color: white;
        cursor: pointer;
    }
`;

export const Icons = styled.div`
    width: 75%;
    display: flex;
    gap: 1rem;
`;

export const CopiedMessage = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 0.5rem 2rem;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    color: black;
    background-color: white;
    animation: shiftUp 250ms linear forwards;
    z-index: 5;

    @keyframes shiftUp {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
            transform: translate(-50%, -3rem);
        }
    }
`;
