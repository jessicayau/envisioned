import styled from "styled-components";

export const ColorSwatchContainer = styled.div`
    width: 100%;
`;

export const Swatch = styled.span`
    display: block;
    width: 100%;
    height: 80px;
    background-color: ${(props) => props.color};
    transform: ${(props) => (props.isOpen ? "scale(1)" : "scale(1)")};
    z-index: ${(props) => (props.isOpen ? 5 : 1)};
    cursor: pointer;
    /* box-shadow: -10px 0px 2px
        ${(props) => (props.isOpen ? "blue" : "transparent")}; */
    /* position: relative; */

    /* &:hover {
        transform: scale(1.1);
        z-index: 5;
    } */
`;

export const ColorPicker = styled.div`
    position: absolute;
    top: 50%;
    right: -50%;
    transform: translateY(-50%);
    z-index: 10;

    .react-colorful__saturation {
        border-bottom: 12px solid white;
    }
    .react-colorful__pointer {
        width: 1rem;
        height: 1rem;
        /* border: 1px solid white; */
    }

    .react-colorful__hue {
        border-radius: 0;
    }
    .react-colorful__hue-pointer {
        width: 22px;
        height: 22px;
        border: 2px solid white;
        /* border-radius: 0; */
    }

    input {
        width: 100%;
        border-radius: 0 0 8px 8px;
        /* border: 1px solid grey; */
        border: none;
        text-align: center;
        font-size: 0.9rem;
        line-height: 1.5rem;
        text-transform: uppercase;
    }

    @media screen and (max-width: 650px) {
        right: -15%;
    }
`;
