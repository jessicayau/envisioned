import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { ReactComponent as HeroImg } from "../../assets/images/rabbit-working.svg";
import { cardData } from "../../assets/data";
import { SectionContent, Signature } from "./Homepage.styles";
import Section from "../../components/Section/Section";
import Card from "../../components/Card/Card";
import Hero from "../../components/Hero/Hero";
import {
    getRandomPalette,
    selectCurrentPalette,
} from "../../redux/palette/paletteSlice";

const Homepage = () => {
    const currentPalette = useSelector(selectCurrentPalette);
    const [c1, c2, c3, , c5] = currentPalette.colors;
    const dispatch = useDispatch();

    const handleRandomPalette = () => {
        dispatch(getRandomPalette());
    };

    console.log("homepage");

    return (
        <div className="home">
            <Hero
                btnBg={c2.color}
                btnFg={c2.contrastColor}
                btnText="Random Palette"
                handleButtonClick={handleRandomPalette}
                title={
                    <>
                        Inspirational Color Palettes{" "}
                        <span style={{ color: `#${c3.color}` }}>
                            Visualized
                        </span>
                    </>
                }
                titleFg={c5.color}
                textFg={c5.color}
                text="Choosing a color scheme is hard. Figuring out how to apply
                    it to your design is even harder. Browse through the preset color
                    palettes to find one that sparks joy and see how it could
                    look when applied. If you have a color palette in mind, create a custom palette!"
            >
                <HeroImg />
            </Hero>
            <Section
                cards
                title="ABC's to Keep in Mind"
                fgColor={c1.contrastColor}
            >
                {cardData.map((data, index) => (
                    <Card
                        key={index}
                        title={data.title}
                        bgColor={c5.color}
                        fgColor={c5.contrastColor}
                    >
                        {data.content}
                    </Card>
                ))}
            </Section>
            <Section bgColor={c3.color} fgColor={c3.contrastColor} rightLarge>
                <SectionContent>
                    <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
                        A Message From The Creator
                    </h2>
                </SectionContent>
                <SectionContent>
                    <p>
                        The color palettes are curated based on my own personal
                        preference of using five colors - at least one of which
                        is light and at least one of which is dark. It is hard
                        to create a template that works with all color palette
                        types without making small tweaks here and there, so
                        please keep in mind that some text/background
                        combinations may not be ideal (ie. pastel text on light
                        backgrounds). Remember, aesthetics and accessibility are
                        both important concepts of design. I hope you find some
                        inspiration here!
                    </p>
                    <Signature>
                        <FaHeart />
                        Jess
                    </Signature>
                </SectionContent>
            </Section>
        </div>
    );
};

export default Homepage;
