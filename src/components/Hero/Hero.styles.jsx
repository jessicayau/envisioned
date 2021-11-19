import styled from "styled-components";

export const HeroContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
    padding: 4rem 5vw 5rem;
    background-color: white;

    svg {
        width: 100%;
        height: auto;
    }

    @media screen and (max-width: 740px) {
        grid-template-columns: 1fr;
        padding: 2rem 5vw 5rem;
    }
`;

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 740px) {
        order: 1;
    }
`;

export const Title = styled.h1`
    font-size: 5vw;
    margin-bottom: 1rem;
    /* -webkit-text-stroke: 1px black; */

    @media screen and (max-width: 740px) {
        font-size: 38px;
    }
`;

export const Text = styled.p`
    line-height: 2rem;
    font-size: 1.1rem;
`;
