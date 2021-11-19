import styled from "styled-components";

export const TemplateContainer = styled.div`
    width: 90%;
    color: #${(props) => (props.fgColor ? props.fgColor : "000000")};
    margin: 0 5vw;
    border: 1px solid lightgrey;
    position: relative;
`;

export const HeroSection = styled.div`
    position: relative;
    height: 85vh;
    padding: 8rem 5% 5rem;
    background-image: url("/images/interior.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        width: 65%;
        line-height: 1.5rem;
        text-align: center;
        font-size: 1.1rem;
    }

    button {
        margin-top: 2rem;
    }

    @media screen and (max-width: 768px) {
        background-position: 20%;
        /* padding: 6rem 5%; */
        background-position: 25%;

        p {
            width: 95%;
        }

        h1 {
            font-size: 3rem;
        }
    }
`;

export const Title = styled.h1`
    font-size: 6vw;
    margin-bottom: 1rem;
    color: #${(props) => (props.titleColor ? props.titleColor : "000000")};
`;

export const Stats = styled.div`
    height: 7rem;
    width: 90%;
    background-color: #${(props) => (props.bgColor ? props.bgColor : "ffffff")};
    color: #${(props) => (props.fgColor ? props.fgColor : "000000")};
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    position: absolute;
    left: 5%;
    transform: translateY(-3.5rem);
    padding: 0 5%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    align-items: center;

    .stats-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1.1rem;

        span {
            text-align: center;
            text-transform: uppercase;
        }
        .num {
            font-size: 1.5rem;
            font-weight: 700;
        }
    }

    @media screen and (max-width: 767px) {
        padding: 0 1rem;
    }

    @media screen and (max-width: 660px) {
        height: 18rem;
        padding: 1.5rem 0;
        grid-template-columns: 1fr;
        box-shadow: none;
    }
`;

export const ImageSection = styled.div`
    padding: 10rem 5% 5rem;
    background-color: #${(props) => (props.bgColor ? props.bgColor : "ffffff")};

    h2 {
        font-size: 2rem;
        margin-bottom: 1.5rem;
        color: #${(props) => props.titleColor};
        position: relative;

        &::after {
            content: "";
            width: 4rem;
            height: 2px;
            position: absolute;
            top: 55%;
            transform: translateX(1rem);
            background-color: #${(props) => props.titleColor};
        }
    }

    @media screen and (max-width: 767px) {
        padding: 10rem 5% 5rem;
    }

    @media screen and (max-width: 660px) {
        padding: 20rem 5% 5rem;
    }
`;

export const Images = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 3rem 2.5rem;

    img {
        width: 100%;
        box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.5);
    }

    h3 {
        margin-top: 1.5rem;
        font-size: 1.5rem;
        text-align: center;
    }

    @media screen and (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;
