import React from "react";
import { useSelector } from "react-redux";
import ColorCard from "../../components/ColorCard/ColorCard";
import ColorCardsLayout from "../../components/ColorCardsLayout/ColorCardsLayout";
import { selectCurrentPalette } from "../../redux/palette/paletteSlice";
import { GradientsPageContainer } from "./GradientsPage.styles";

const GradientsPage = () => {
    const currentPalette = useSelector(selectCurrentPalette);
    const [c1, c2, c3, c4, c5] = currentPalette.colors;

    return (
        <GradientsPageContainer>
            <h1>Gradients</h1>
            <ColorCardsLayout>
                <ColorCard
                    gradient={`linear-gradient(#${c2.bgColor}, #${c3.bgColor})`}
                />
                <ColorCard
                    gradient={`linear-gradient(#${c2.bgColor}, #${c4.bgColor})`}
                />
                <ColorCard
                    gradient={`linear-gradient(#${c2.bgColor}, #${c5.bgColor})`}
                />
                <ColorCard
                    gradient={`linear-gradient(#${c3.bgColor}, #${c4.bgColor})`}
                    textColor={"FFFFFF"}
                />
                <ColorCard
                    gradient={`linear-gradient(#${c3.bgColor}, #${c5.bgColor})`}
                    textColor={"FFFFFF"}
                />
                <ColorCard
                    gradient={`linear-gradient(#${c5.bgColor}, #${c3.bgColor})`}
                    textColor={"FFFFFF"}
                />
                <ColorCard
                    gradient={`linear-gradient(#${c1.bgColor}, #${c4.bgColor})`}
                />
                <ColorCard
                    gradient={`linear-gradient(#${c4.bgColor}, #${c2.bgColor})`}
                    textColor={"FFFFFF"}
                />
                <ColorCard
                    gradient={`linear-gradient(#${c5.bgColor}, #${c2.bgColor})`}
                    textColor={"FFFFFF"}
                />

                <ColorCard
                    gradient={`linear-gradient(#${c1.bgColor}, #${c3.bgColor}, #${c4.bgColor})`}
                />
                <ColorCard
                    gradient={`linear-gradient(#${c1.bgColor}, #${c3.bgColor}, #${c5.bgColor})`}
                />
                <ColorCard
                    gradient={`linear-gradient(#${c2.bgColor}, #${c3.bgColor}, #${c4.bgColor})`}
                />
                <ColorCard
                    gradient={`linear-gradient(#${c2.bgColor}, #${c3.bgColor}, #${c5.bgColor})`}
                />
                <ColorCard
                    gradient={`linear-gradient(#${c3.bgColor}, #${c4.bgColor}, #${c5.bgColor})`}
                    textColor={"FFFFFF"}
                />
                <ColorCard
                    gradient={`linear-gradient(#${c3.bgColor}, #${c2.bgColor}, #${c4.bgColor})`}
                />
                <ColorCard
                    gradient={`linear-gradient(#${c3.bgColor}, #${c5.bgColor}, #${c4.bgColor})`}
                    textColor={"FFFFFF"}
                />
                <ColorCard
                    gradient={`linear-gradient(#${c4.bgColor}, #${c3.bgColor}, #${c5.bgColor})`}
                    textColor={"FFFFFF"}
                />
                <ColorCard
                    gradient={`linear-gradient(#${c4.bgColor}, #${c5.bgColor}, #${c3.bgColor})`}
                    textColor={"FFFFFF"}
                />
                <ColorCard
                    gradient={`linear-gradient(217deg, #${c2.bgColor}, #${c3.bgColor} 70.71%),
            linear-gradient(127deg, #${c3.bgColor}, #${c4.bgColor} 70.71%),
            linear-gradient(336deg, #${c4.bgColor}, #${c5.bgColor} 70.71%);`}
                />
            </ColorCardsLayout>
        </GradientsPageContainer>
    );
};

export default GradientsPage;
