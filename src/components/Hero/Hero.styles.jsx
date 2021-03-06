import styled from "styled-components";

export const HeroContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 6rem 5vw 5%;

    svg {
        width: 100%;
        height: auto;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 2rem 5vw 5rem;

        svg {
            order: -1;
            width: 80%;
            margin: 2rem auto 0;
        }
    }
`;

export const Title = styled.h1`
    font-size: 5vw;
    color: #${(props) => props.fgColor};

    @media screen and (max-width: 768px) {
        font-size: clamp(2.5rem, 8vw, 4rem);
    }
`;

export const Text = styled.p`
    color: #${(props) => props.fgColor};
    line-height: 1.6rem;
    font-size: 1.1rem;
    padding: 1rem 0;
`;
