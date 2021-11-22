import styled from "styled-components";

export const Template3Container = styled.div`
    height: 100%;
    width: 100%;
    padding: 0 5vw;
`;

export const Content = styled.div`
    height: 90%;
    width: 100%;
    position: relative;
    /* background: ${(props) =>
        `linear-gradient(#${props.bgColor1}, #${props.bgColor2}, #${props.bgColor3})`}; */
    color: #${(props) => props.fgColor};

    /* svg {
        height: 80%;
        width: auto;
    } */
`;

export const Slide = styled.div`
    width: 100%;
    flex-shrink: 0;
    /* height: 100%; */
    font-size: 1.5rem;
    background: ${(props) => props.bgColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    svg {
        height: 80%;
    }

    .bgImage {
        width: 100%;
        height: 100%;
        background-image: url("/images/vinyl.png");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;

        @media screen and (max-width: 768px) {
            width: 70%;
        }

        @media screen and (max-width: 425px) {
            width: 100%;
        }
    }

    .left {
        width: 75%;
        height: 100%;
        background-color: black;
        color: white;
    }

    .right {
        width: 25%;
        height: 100%;
        background-color: pink;
    }

    h1 {
        margin-bottom: 1rem;

        @media screen and (max-width: 425px) {
            font-size: 2.5rem;
        }
    }
`;

export const Form = styled.div`
    width: 30%;
    min-width: 230px;
    display: flex;
    flex-direction: column;

    input {
        height: 2.5rem;
        border-radius: 10px;
        border: none;
        padding: 0 0.5rem;
        font-size: 1.1rem;
    }
`;
