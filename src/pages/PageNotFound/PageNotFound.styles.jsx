import styled from "styled-components";

export const PageNotFoundContainer = styled.div`
    width: 90%;
    /* height: 80%; */
    margin: 0 5vw;
    padding: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) =>
        `linear-gradient(#${props.bgColor1} 70%, #${props.bgColor2})`};
    color: #${(props) => props.fgColor};
    border: 1px solid lightgrey;

    svg {
        height: 100%;
        width: 50%;
        filter: drop-shadow(0.4rem 0.3rem 0.5rem rgba(0, 0, 0, 0.3));
    }

    @media screen and (max-width: 550px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const Title = styled.h1`
    font-size: 18vw;
    margin: 0;
    color: #${(props) => props.fgColor};
    -webkit-text-stroke: 1px #${(props) => props.outline};

    &::before {
        content: "OOPS...";
        font-size: 2.5rem;

        @media screen and (max-width: 767px) {
            font-size: 2.5rem;
        }

        @media screen and (max-width: 424px) {
            font-size: 2rem;
        }
    }

    @media screen and (max-width: 767px) {
        font-size: 5rem;
    }

    @media screen and (max-width: 424px) {
        font-size: 4rem;
    }
`;

export const Message = styled.p`
    font-size: 1.2rem;
`;
