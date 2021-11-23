import React, { useCallback, useState, useRef } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";
import useClickOutside from "../../useClickOutside";
import {
    ColorPicker,
    ColorSwatchContainer,
    Swatch,
} from "./ColorSwatch.styles";

const ColorSwatch = ({ color, handleColorChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const pickerModal = useRef();

    const close = useCallback(() => setIsOpen(false), []);
    useClickOutside(pickerModal, close);

    return (
        <ColorSwatchContainer className="swatch">
            <Swatch
                isOpen={isOpen}
                color={color}
                onClick={() => setIsOpen(true)}
            />
            {isOpen && (
                <ColorPicker
                    className="picker"
                    ref={pickerModal}
                    isOpen={isOpen}
                >
                    <HexColorPicker
                        color={color}
                        onChange={handleColorChange}
                    />
                    <HexColorInput color={color} onChange={handleColorChange} />
                </ColorPicker>
            )}
        </ColorSwatchContainer>
    );
};

export default ColorSwatch;
