import React from "react";
import { useSelector } from "react-redux";
import { BsHouseFill } from "react-icons/bs";
import CustomButton from "../../components/CustomButton/CustomButton";
import TemplateHeader from "../../components/TemplateHeader/TemplateHeader";
import {
    HeroSection,
    Images,
    ImageSection,
    Stats,
    TemplateContainer,
    Title,
} from "./Template4.styles";
import { selectCurrentPalette } from "../../redux/palette/paletteSlice";

const Template4 = () => {
    const palette = useSelector(selectCurrentPalette);
    const [c1, c2, c3, c4, c5] = palette.colors;

    return (
        <TemplateContainer fgColor={c5.bgColor}>
            <TemplateHeader
                brand="Renovate"
                links={["Projects", "Services"]}
                button
                buttonBg={c2.bgColor}
                buttonFg={c2.textColor}
                textColor={c5.bgColor}
                activeBg={c4.bgColor}
                square
            >
                <BsHouseFill style={{ color: `#${c2.bgColor}` }} />
            </TemplateHeader>
            <HeroSection>
                <Title titleColor={c3.bgColor}>Headline</Title>
                <p>
                    Cherry bomb morning smoothie bowl red lentil curry soup
                    mushroom risotto red curry tofu noodles cherry bomb pepper
                    kale scotch bonnet pepper avocado basil pesto sweet potato
                    black bean burrito banana bread hummus falafel bowl
                    summertime salted.
                </p>
                <CustomButton
                    square
                    bgColor={c2.bgColor}
                    fgColor={c2.textColor}
                >
                    View Projects
                </CustomButton>
            </HeroSection>
            <Stats bgColor={c3.bgColor} fgColor={c3.textColor}>
                <div className="stats-group">
                    <span className="num">20</span>
                    <span>years</span>
                </div>
                <div className="stats-group">
                    <span className="num">1000+</span>
                    <span>projects</span>
                </div>
                <div className="stats-group">
                    <span className="num">30</span>
                    <span>awards</span>
                </div>
            </Stats>
            <ImageSection bgColor={c1.bgColor} titleColor={c4.bgColor}>
                <h2>Projects</h2>
                <Images>
                    <div>
                        <img src="/images/dining-room.jpg" alt="dining room" />
                        <h3>Project Title</h3>
                    </div>
                    <div>
                        <img src="/images/room.jpg" alt="room" />
                        <h3>Project Title</h3>
                    </div>
                    <div>
                        <img src="/images/kitchen.jpg" alt="kitchen" />
                        <h3>Project Title</h3>
                    </div>
                </Images>
            </ImageSection>
        </TemplateContainer>
    );
};

export default Template4;
