import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    getPalette,
    selectCurrentPalette,
} from "../../redux/palette/paletteSlice";
import { Span, ColorPaletteContainer } from "./ColorPalette.styles";

const ColorPalette = ({ palette, paletteID, ...otherProps }) => {
    const currentPalette = useSelector(selectCurrentPalette);
    const isCurrentPalette = paletteID === currentPalette.id;
    const { infoBar, handleCopyColor } = otherProps;
    const dispatch = useDispatch();

    const handleGetPalette = () => {
        if (!infoBar && !isCurrentPalette) {
            dispatch(getPalette({ paletteID: paletteID, palette: palette }));
        } else return;
    };

    return (
        <ColorPaletteContainer
            isCurrentPalette={isCurrentPalette}
            {...otherProps}
            onClick={handleGetPalette}
        >
            {palette.map((color, index) => (
                <Span
                    {...otherProps}
                    key={`${paletteID}-${index}`}
                    onClick={infoBar && (() => handleCopyColor(color))}
                    style={{ backgroundColor: `#${color}` }}
                ></Span>
            ))}
        </ColorPaletteContainer>
    );
};

export default ColorPalette;
