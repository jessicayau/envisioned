import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { MdVolunteerActivism } from "react-icons/md";
import { IoMdPaw } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import {
    selectCurrentPalette,
    selectVersion,
} from "../../redux/palette/paletteSlice";
import { ReactComponent as PetSvg } from "../../assets/images/dog-and-cat.svg";
import TemplateHeader from "../../components/TemplateHeader/TemplateHeader";
import { TemplateContainer } from "./Template1.styles";
import Card from "../../components/Card/Card";
import Section from "../../components/Section/Section";
import Hero from "../../components/Hero/Hero";

const Template1 = () => {
    const palette = useSelector(selectCurrentPalette);
    const currentVersion = useSelector(selectVersion);

    const [c1, setC1] = useState(palette.colors[0]);
    const [c2, setC2] = useState(palette.colors[1]);
    const [c3, setC3] = useState(palette.colors[2]);
    const [c4, setC4] = useState(palette.colors[3]);
    const [c5, setC5] = useState(palette.colors[4]);

    // const [c1, c2, c3, c4, c5] = palette.colors;
    useEffect(() => {
        if (currentVersion === "light") {
            setC1(palette.colors[0]);
            setC2(palette.colors[1]);
            setC3(palette.colors[2]);
            setC4(palette.colors[3]);
            setC5(palette.colors[4]);
        } else {
            setC1(palette.colors[4]);
            setC2(palette.colors[3]);
            setC3(palette.colors[2]);
            setC4(palette.colors[1]);
            setC5(palette.colors[0]);
        }
    }, [currentVersion, palette]);

    return (
        <TemplateContainer bgColor={c1.bgColor}>
            <TemplateHeader
                brand="Pet Friends"
                links={["About", "Services", "Login"]}
                textColor={c4.bgColor}
                activeBg={c3.bgColor}
            ></TemplateHeader>
            <Hero
                btnBg={c4.bgColor}
                btnFg={c4.textColor}
                btnText="Find a Pet"
                titleFg={c3.bgColor}
                title="Clever Headline"
                textFg={c1.textColor}
                text="This is just an example of how the color palette could look when applied. There are dark and light versions! Click on the sun/moon at the bottom."
            >
                <PetSvg />
            </Hero>
            <Section cards title="How You Can Help" fgColor={c1.textColor}>
                <Card
                    title="Adopt"
                    icon={<IoHeart size={50} />}
                    bgColor={c2.bgColor}
                    fgColor={c2.textColor}
                    iconColor={c2.textColor}
                    center
                >
                    Strawberry mango smoothie dark chocolate simmer orange
                    blueberry chia seed jam
                </Card>
                <Card
                    title="Foster"
                    icon={<IoMdPaw size={50} />}
                    bgColor={c3.bgColor}
                    fgColor={c3.textColor}
                    iconColor={c3.textColor}
                    center
                >
                    Strawberry mango smoothie dark chocolate simmer orange
                    blueberry chia seed jam
                </Card>
                <Card
                    title="Volunteer"
                    icon={<MdVolunteerActivism size={50} />}
                    bgColor={c4.bgColor}
                    fgColor={c4.textColor}
                    iconColor={c4.textColor}
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
