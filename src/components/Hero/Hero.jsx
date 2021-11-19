import React from "react";
import { HeroContainer, HeroContent, Text, Title } from "./Hero.styles";
import { ReactComponent as HeroImg } from "../../assets/images/rabbit-working.svg";
import CustomButton from "../CustomButton/CustomButton";

const Hero = ({ btnBg, btnFg }) => {
    const handleButtonClick = () => {};

    return (
        <HeroContainer>
            <HeroContent>
                <Title>Inspirational Color Palettes Visualized</Title>
                <Text>
                    Choosing a color scheme is hard. Figuring out how to apply
                    it to your design is even harder. Browse through the color
                    palettes to find one that sparks joy and see how it could
                    look when applied.
                </Text>
                <CustomButton
                    bgColor={btnBg}
                    fgColor={btnFg}
                    onClick={handleButtonClick}
                >
                    Generate Random Palette
                </CustomButton>
            </HeroContent>
            <HeroImg />
        </HeroContainer>
    );
};

export default Hero;
