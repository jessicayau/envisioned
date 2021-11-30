import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdVolunteerActivism } from "react-icons/md";
import { IoMdPaw } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import {
    getRandomPalette,
    selectCurrentPalette,
    selectVersion,
} from "../../redux/palette/paletteSlice";
import { ReactComponent as PetSvg } from "../../assets/images/dog-and-cat.svg";
import { TemplateContainer } from "./Template1.styles";
import TemplateHeader from "../../components/TemplateHeader/TemplateHeader";
import Card from "../../components/Card/Card";
import Section from "../../components/Section/Section";
import Hero from "../../components/Hero/Hero";

const Template1 = () => {
    const palette = useSelector(selectCurrentPalette);
    const currentVersion = useSelector(selectVersion);
    const dispatch = useDispatch();

    const [c1, setC1] = useState(palette.colors[0]);
    const [c2, setC2] = useState(palette.colors[1]);
    const [c3, setC3] = useState(palette.colors[2]);
    const [c4, setC4] = useState(palette.colors[3]);

    useEffect(() => {
        if (currentVersion === "light") {
            setC1(palette.colors[0]);
            setC2(palette.colors[1]);
            setC3(palette.colors[2]);
            setC4(palette.colors[3]);
        } else {
            setC1(palette.colors[4]);
            setC2(palette.colors[3]);
            setC3(palette.colors[2]);
            setC4(palette.colors[1]);
        }
    }, [currentVersion, palette]);

    const handleRandomPalette = () => {
        dispatch(getRandomPalette());
    };

    return (
        <TemplateContainer bgColor={c1.color}>
            <TemplateHeader
                brand="Pet Friends"
                links={["About", "Services", "Login"]}
                textColor={c4.color}
                activeBg={c3.color}
            ></TemplateHeader>
            <Hero
                btnBg={c4.color}
                btnFg={c4.contrastColor}
                btnText="Random Palette"
                handleButtonClick={handleRandomPalette}
                titleFg={c3.color}
                title="Clever Headline"
                textFg={c1.contrastColor}
                text="This is just an example of how the color palette could look when applied. There are dark and light versions! Click on the sun/moon at the bottom."
            >
                <PetSvg />
            </Hero>
            <Section cards title="How You Can Help" fgColor={c1.contrastColor}>
                <Card
                    title="Adopt"
                    icon={<IoHeart size={50} />}
                    bgColor={c2.color}
                    fgColor={c2.contrastColor}
                    iconColor={c2.contrastColor}
                    center
                >
                    Strawberry mango smoothie dark chocolate simmer orange
                    blueberry chia seed jam
                </Card>
                <Card
                    title="Foster"
                    icon={<IoMdPaw size={50} />}
                    bgColor={c3.color}
                    fgColor={c3.contrastColor}
                    iconColor={c3.contrastColor}
                    center
                >
                    Strawberry mango smoothie dark chocolate simmer orange
                    blueberry chia seed jam
                </Card>
                <Card
                    title="Volunteer"
                    icon={<MdVolunteerActivism size={50} />}
                    bgColor={c4.color}
                    fgColor={c4.contrastColor}
                    iconColor={c4.contrastColor}
                    center
                >
                    Strawberry mango smoothie dark chocolate simmer orange
                    blueberry chia seed jam
                </Card>
            </Section>
        </TemplateContainer>
    );
};

export default Template1;
