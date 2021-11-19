import React from "react";
import { getCombinations } from "../../utils/utils";
import {
    ColorBox,
    ColorBoxText,
    ColorCombinationsContainer,
} from "./ColorCombinations.styles";

const ColorCombinations = ({ palette }) => {
    const combinations = getCombinations(palette);

    return (
        <ColorCombinationsContainer>
            {/* {palette.map((paletteColor, index) => (
                <ColorBox key={index} paletteColor={paletteColor}>
                    {palette.map((color, index) => (
                        <ColorBoxText key={index} textColor={color}>
                            {color}
                        </ColorBoxText>
                    ))}
                </ColorBox>
            ))} */}
            {combinations.map((pair, index) => {
                return (
                    <ColorBox key={index} paletteColor={pair[0]}>
                        <ColorBoxText textColor={pair[1]}>
                            <h3>
                                #{pair[0]} on #{pair[1]}
                            </h3>
                            <p>
                                The quick brown fox jumps over the lazy dog.
                                <br />
                                Contrast Ratio: {pair[2].toFixed(2)}
                            </p>
                            {pair[2] < 4.5 && <p>*Only good for large text</p>}
                        </ColorBoxText>
                    </ColorBox>
                );
            })}
        </ColorCombinationsContainer>
    );
};

export default ColorCombinations;
