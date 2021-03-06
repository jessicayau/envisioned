import styled from "styled-components";

export const SliderContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
`;

export const SlidesWrapper = styled.div`
    height: 90%;
    display: flex;
    background: aliceblue;
    transform: translateX(${(props) => props.slideNum * -100}%);
    transition: transform 1s ease;
`;

export const SliderButtons = styled.div`
    height: 10%;
    display: flex;
    align-self: center;
    align-items: center;
    gap: 1.5rem;
`;

export const SliderButton = styled.label`
    width: 20px;
    height: 20px;
    background: ${(props) =>
        props.index === props.isActive ? "black" : "white"};
    border: 4px solid white;
    border-radius: 50%;
    box-shadow: 0px 0px 3px black;
    position: relative;

    input {
        width: 20px;
        height: 20px;
        position: absolute;
        top: -4px;
        left: -4px;
        z-index: -1;
    }
`;
