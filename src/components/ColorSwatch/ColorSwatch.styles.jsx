import styled from "styled-components";

export const ColorSwatchContainer = styled.div`
    width: 100%;
`;

export const Swatch = styled.span`
    display: block;
    width: 100%;
    min-height: 80px;
    height: 100%;
    background-color: ${(props) => props.color};
    transform: ${(props) => (props.isOpen ? "scale(1)" : "scale(1)")};
    z-index: ${(props) => (props.isOpen ? 5 : 1)};
    cursor: pointer;
`;

export const ColorPicker = styled.div`
    position: absolute;
    z-index: 10;

    .react-colorful__saturation {
        border-bottom: 12px solid white;
    }
    .react-colorful__pointer {
        width: 1rem;
        height: 1rem;
    }

    .react-colorful__hue {
        border-radius: 0;
    }
    .react-colorful__hue-pointer {
        width: 22px;
        height: 22px;
        border: 2px solid white;
    }

    input {
        width: 100%;
        border-radius: 0 0 8px 8px;
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
