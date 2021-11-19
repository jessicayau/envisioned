import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentPalette } from "../../redux/palette/paletteSlice";
import { ReactComponent as AstronautSVG } from "../../assets/images/astronaut.svg";
import CustomButton from "../../components/CustomButton/CustomButton";
import { Message, PageNotFoundContainer, Title } from "./PageNotFound.styles";

const PageNotFound = () => {
    const palette = useSelector(selectCurrentPalette);
    const [c1, c2, c3, c4, c5] = palette.colors;

    return (
        <PageNotFoundContainer
            bgColor1={c1.bgColor}
            bgColor2={c3.bgColor}
            fgColor={c1.textColor}
        >
            <AstronautSVG />
            <div>
                <Title fgColor={c3.bgColor} outline={c3.textColor}>
                    404
                </Title>
                <Message>The page you're looking for doesn't exist...</Message>
                <CustomButton bgColor={c5.bgColor} fgColor={c5.textColor}>
                    Go Back
                </CustomButton>
            </div>
        </PageNotFoundContainer>
    );
};

export default PageNotFound;
