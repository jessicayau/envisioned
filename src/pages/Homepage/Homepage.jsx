import React from "react";
import { useSelector } from "react-redux";
import { IoColorPalette, IoStar } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { ReactComponent as HeroImg } from "../../assets/images/rabbit-working.svg";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import ListItem from "../../components/ListItem/ListItem";
import { cardData, colorData } from "../../assets/data";
import { SectionContent, List, ContrastSectionText } from "./Homepage.styles";
import Section from "../../components/Section/Section";
import { selectCurrentPalette } from "../../redux/palette/paletteSlice";

const Homepage = () => {
    const palette = useSelector(selectCurrentPalette);
    const [c1, c2, c3, c4, c5] = palette.colors;

    return (
        <div className="home">
            <main>
                <Hero
                    btnBg={c2.bgColor}
                    btnFg={c2.textColor}
                    btnText="Random Palette"
                    title="Inspirational Color Palettes Visualized"
                    titleFg={c3.bgColor}
                    textFg={c5.bgColor}
                    text="Choosing a color scheme is hard. Figuring out how to apply
                    it to your design is even harder. Browse through the color
                    palettes to find one that sparks joy and see how it could
                    look when applied."
                >
                    <HeroImg />
                </Hero>
                <Section
                    cards
                    title="ABC's to Keep in Mind"
                    bgColor={c1.bgColor}
                    fgColor={c1.textColor}
                >
                    {cardData.map((data, index) => (
                        <Card
                            key={index}
                            title={data.title}
                            // content={data.content}
                            btn="Learn More"
                            btnBg={c4.bgColor}
                            btnFg={c4.textColor}
                            // fgColor={c5.bgColor}
                        >
                            {data.content}
                        </Card>
                    ))}
                </Section>
                <Section id="contrast" title="Contrasting Color Combinations">
                    <SectionContent>
                        <ContrastSectionText style={{ textAlign: "center" }}>
                            Below are all of the font and background color
                            combinations using the colors in this palette. Some
                            combinations provide more contrast than others.
                            Those are the combinations you should keep in mind
                            for better visibility...and to make certain elements
                            stand out more. Make elements pop with higher
                            contrast. Also keep in mind that you don't always
                            have to stick with the exact colors in your palette.
                            Try to incorporate different shades and tints.
                        </ContrastSectionText>
                    </SectionContent>
                    <SectionContent>
                        {/* {menuData.map((set) =>
                            set.palettes.map((palette, index) => (
                                <div key={index}>
                                    <h3>{palette.id}</h3>
                                    <ColorCombinations
                                        key={index}
                                        palette={palette.colors}
                                    />
                                </div>
                            ))
                        )} */}
                    </SectionContent>
                </Section>
                <Section
                    id="accessibility"
                    bgColor={c2.bgColor}
                    title="Use Accessibility Tools"
                    half
                >
                    <SectionContent>
                        <h3>
                            It's your job to make sure that the content you
                            create is accessible to everyone.
                        </h3>
                        <p>
                            There are many tools available to check if color
                            combinations are color blind safe or if they have
                            enough contrast. For more information about
                            accessibility, look into the Web Content
                            Accessibility Guidelines.
                        </p>
                    </SectionContent>
                    <SectionContent>
                        <ListItem small>
                            <IoStar />
                            <a href="https://color.adobe.com/create/color-contrast-analyzer">
                                Color Contrast Checker
                            </a>
                        </ListItem>
                        <ListItem small>
                            <IoStar />
                            <a href="https://color.adobe.com/create/color-accessibility">
                                Color Blind Safe Checker
                            </a>
                        </ListItem>
                        <ListItem small>
                            <IoStar />
                            <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">
                                Web Content Accessibility Guidelines (WCAG)
                            </a>
                        </ListItem>
                    </SectionContent>
                </Section>
                <Section id="branding" title="Color Psychology">
                    <List>
                        {colorData.map((data, index) => {
                            return (
                                <ListItem
                                    key={index}
                                    bgColor={c2.bgColor}
                                    fgColor={c2.textColor}
                                >
                                    <IoColorPalette
                                        style={{
                                            fontSize: "2rem",
                                        }}
                                    />
                                    <div>
                                        <h3>{data.color}</h3>
                                        <p>{data.associations}</p>
                                    </div>
                                </ListItem>
                            );
                        })}
                    </List>
                </Section>
                <Section bgColor={c3.bgColor} fgColor={c3.textColor} rightLarge>
                    <SectionContent>
                        <h2
                            style={{ fontSize: "2rem", marginBottom: "1.5rem" }}
                        >
                            A Message From The Creator
                        </h2>
                    </SectionContent>
                    <SectionContent>
                        <p>
                            The color palettes are curated based on my own
                            personal preference of using five colors - at least
                            one of which is light and at least one of which is
                            dark. It is hard to create a template that works
                            with all color palette types without making small
                            tweaks here and there, so please keep in mind that
                            some text/background combinations may not be ideal.
                            Aesthetics and accessibility are both important
                            concepts of design. I hope you find some inspiration
                            here!
                        </p>
                        <p
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                columnGap: ".5rem",
                                fontSize: "1.1rem",
                            }}
                        >
                            <FaHeart />
                            Jess
                        </p>
                    </SectionContent>
                </Section>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;
