import React from "react";
import { useSelector } from "react-redux";
import ColorCard from "../../components/ColorCard/ColorCard";
import ColorCardsLayout from "../../components/ColorCardsLayout/ColorCardsLayout";
import { selectCurrentPalette } from "../../redux/palette/paletteSlice";
import { getCombinations } from "../../utils/utils";
import { TextPageContainer } from "./TextPage.styles";

const TextPage = () => {
    const currentPalette = useSelector(selectCurrentPalette);
    const combinations = getCombinations(currentPalette.colors);

    return (
        <TextPageContainer>
            <h1>Text & Background</h1>
            <p>
                <strong>AA:</strong> Minimum contrast requirement - a contrast
                ratio of at least 4.5:1 for normal text and 3:1 for large text.
                <br />
                <strong>AAA:</strong> a contrast ratio of at least 7:1 for
                normal text and 4.5:1 for large text.
                <br />
                *normal text: 18pt/24px, large text: 14pt/18.6px bold, 18pt/24px
                regular
            </p>
            <ColorCardsLayout>
                {combinations.map((item, index) => {
                    const [bg, fg, contrast] = item;
                    return (
                        <ColorCard key={index} bgColor={bg} fgColor={fg}>
                            <div>
                                <h2>
                                    #{fg} <br /> on #{bg}
                                </h2>
                                <p>
                                    The quick brown fox jumps over the lazy dog.
                                </p>
                            </div>
                            <div>
                                {contrast < 4.5 && (
                                    <p>*Only good for large text</p>
                                )}
                                <p>Contrast Ratio: {contrast.toFixed(2)}</p>
                            </div>
                        </ColorCard>
                    );
                })}
            </ColorCardsLayout>
        </TextPageContainer>
    );
};

export default TextPage;
