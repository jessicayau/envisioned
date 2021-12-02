import styled from "styled-components";

export const ColorPaletteContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0.3rem 0;
    cursor: pointer;
    transform: ${(props) =>
        props.isCurrentPalette && !props.isEditable && "scaleX(1.2)"};
    transition: all 100ms ease-out;
    border-top: ${(props) =>
        props.isCurrentPalette
            ? "2px solid rgba(151, 151, 201, 0.8)"
            : "2px solid transparent"};
    border-bottom: ${(props) =>
        props.isCurrentPalette
            ? "2px solid rgba(151, 151, 201, 0.8)"
            : "2px solid transparent"};

    ${(props) =>
        !props.isCurrentPalette &&
        !props.toolbar &&
        !props.isEditable &&
        `&:hover {
            transform: scaleX(1.2);
        }`}
`;

export const PaletteColor = styled.span`
    height: 35px;
    width: 35px;
    border-top: 1px solid rgba(200, 200, 241, 0.5);
    border-bottom: 1px solid rgba(200, 200, 241, 0.5);

    &:first-child {
        border-left: 1px solid rgba(200, 200, 241, 0.5);
        border-top-left-radius: 15%;
        border-bottom-left-radius: 15%;
    }

    &:nth-child(5) {
        border-right: 1px solid rgba(200, 200, 241, 0.5);
        border-top-right-radius: 15%;
        border-bottom-right-radius: 15%;
    }

    &:hover {
        transform: ${(props) => props.toolbar && "scale(1.5)"};
        border: ${(props) => props.toolbar && "1px solid white"};
    }
`;
