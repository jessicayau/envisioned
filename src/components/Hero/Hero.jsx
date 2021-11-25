import React from "react";
import { HeroContainer, Text, Title } from "./Hero.styles";
import CustomButton from "../CustomButton/CustomButton";

const Hero = ({
    btnBg,
    btnFg,
    btnText,
    title,
    titleFg,
    text,
    textFg,
    children,
    handleButtonClick,
}) => {
    return (
        <HeroContainer>
            <div>
                <Title fgColor={titleFg}>{title}</Title>
                <Text fgColor={textFg}>{text}</Text>
                <CustomButton
                    btnBg={btnBg}
                    btnFg={btnFg}
                    onClick={handleButtonClick}
                >
                    {btnText}
                </CustomButton>
            </div>
            {children}
        </HeroContainer>
    );
};

export default Hero;
