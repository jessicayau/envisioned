import styled from "styled-components";

export const Template2Container = styled.div`
    height: 100%;
    margin: 0 5vw;
`;

export const TemplateContent = styled.div`
    height: 90%;
    width: 100%;
    /* background: ${(props) =>
        `linear-gradient(#${props.bgColor1} 70%, #${props.bgColor2})`}; */
    color: #${(props) => props.fgColor};
    border: 1px solid lightgrey;
    position: relative;
`;

export const Slide = styled.div`
    height: 100%;
    width: 100%;
    flex-shrink: 0;
    position: relative;
    /* display: flex;
    justify-content: center;
    align-items: center; */
`;

export const BackgroundImage = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    &::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #${(props) => props.bgColor};
        opacity: 0.5;
        transition: opacity 1s ease;
    }

    &:hover {
        &::after {
            opacity: 0;
        }
    }
`;

export const SlideTitle = styled.h1`
    color: #${(props) => props.fgColor};
    font-size: 4rem;
    position: absolute;
    bottom: 2rem;
    left: 3rem;
`;
