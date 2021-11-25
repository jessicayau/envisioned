import React from "react";
import { useSelector } from "react-redux";
import ColorCard from "../../components/ColorCard/ColorCard";
import ColorCardsLayout from "../../components/ColorCardsLayout/ColorCardsLayout";
import { selectCurrentPalette } from "../../redux/palette/paletteSlice";
import { getAllCombinations } from "../../utils/utils";
import { GradientsPageContainer } from "./GradientsPage.styles";

const GradientsPage = () => {
    const currentPalette = useSelector(selectCurrentPalette);
    const allCombinations = getAllCombinations(currentPalette.colors);

    return (
        <GradientsPageContainer>
            <h1>Gradients</h1>
            <ColorCardsLayout>
                {allCombinations.map((set, index) => (
                    <ColorCard
                        key={index}
                        gradient={`linear-gradient(#${set[0]}, #${set[1]})`}
                        textColor={set[2]}
                    />
                ))}
            </ColorCardsLayout>
        </GradientsPageContainer>
    );
};

export default GradientsPage;
