import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectCurrentPalette } from "../../redux/palette/paletteSlice";
import CustomButton from "../../components/CustomButton/CustomButton";
import { Message, PageNotFoundContainer, Title } from "./PageNotFound.styles";

const PageNotFound = () => {
    const currentPalette = useSelector(selectCurrentPalette);
    const [c1, , c3, , c5] = currentPalette.colors;
    const history = useHistory();

    return (
        <PageNotFoundContainer
            bgColor1={c1.color}
            bgColor2={c3.color}
            fgColor={c1.contrastColor}
        >
            <img src="/images/astronaut.png" alt="astronaut" />
            <div>
                <Title fgColor={c3.color} outline={c3.contrastColor}>
                    404
                </Title>
                <Message>The page you're looking for doesn't exist...</Message>
                <CustomButton
                    btnBg={c5.color}
                    btnFg={c5.contrastColor}
                    onClick={() => history.push("/")}
                >
                    Go Home
                </CustomButton>
            </div>
        </PageNotFoundContainer>
    );
};

export default PageNotFound;
