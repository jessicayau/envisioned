import styled, { css } from "styled-components";

const primaryStyles = css`
    grid-template-columns: 1fr;
`;

const halfStyles = css`
    grid-template-columns: 1fr 1fr;
`;

const leftLargeStyles = css`
    grid-template-columns: 1.5fr 1fr;
`;

const rightLargeStyles = css`
    grid-template-columns: 1fr 1.5fr;
`;

const cardsStyles = css`
    /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`;

const getStyles = (props) => {
    if (props.half) {
        return halfStyles;
    } else if (props.leftLarge) {
        return leftLargeStyles;
    } else if (props.rightLarge) {
        return rightLargeStyles;
    } else if (props.cards) {
        return cardsStyles;
    } else {
        return primaryStyles;
    }
};

export const SectionContainer = styled.section`
    /* min-height: 300px; */
    /* padding-top: 7%; */
    background-color: #${(props) => props.bgColor};
    color: #${(props) => props.fgColor};
`;

export const SectionWrapper = styled.div`
    padding: 5rem 5vw;
`;

export const SectionTitle = styled.h2`
    font-size: 2rem;
    /* line-height: 3rem; */
    text-align: center;
    padding-bottom: 3rem;
    color: #${(props) => props.fgColor};
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    gap: 3vw;

    ${getStyles}

    p {
        line-height: 1.5rem;
    }

    img {
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        ${primaryStyles}
    }
`;
