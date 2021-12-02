import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    getPalette,
    selectCurrentPalette,
} from "../../redux/palette/paletteSlice";
import { PaletteColor, ColorPaletteContainer } from "./ColorPalette.styles";

const ColorPalette = ({ palette, paletteID, ...otherProps }) => {
    const currentPalette = useSelector(selectCurrentPalette);
    const isCurrentPalette = paletteID === currentPalette.id;
    const { toolbar, handleCopyColor } = otherProps;
    const dispatch = useDispatch();

    const handleGetPalette = () => {
        if (!toolbar && !isCurrentPalette) {
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
                <PaletteColor
                    {...otherProps}
                    key={`${paletteID}-${index}`}
                    onClick={toolbar && (() => handleCopyColor(color))}
                    style={{ backgroundColor: `#${color}` }}
                ></PaletteColor>
            ))}
        </ColorPaletteContainer>
    );
};

export default ColorPalette;
