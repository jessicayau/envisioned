import React from "react";
import { useSelector } from "react-redux";
import { MdVolunteerActivism } from "react-icons/md";
import { IoMdPaw } from "react-icons/io";
import { IoHeart, IoMenu } from "react-icons/io5";
import { selectCurrentPalette } from "../../redux/palette/paletteSlice";
import { ReactComponent as PetSvg } from "../../assets/images/dog-and-cat.svg";
import {
    TemplateContainer,
    TemplateHeader,
    TemplateHero,
    TemplateLink,
    TemplateLinks,
    TemplateLogo,
} from "./Template1.styles";
import CustomButton from "../../components/CustomButton/CustomButton";
import Card from "../../components/Card/Card";
import Section from "../../components/Section/Section";

const Template1 = () => {
    const palette = useSelector(selectCurrentPalette);
    const [c1, c2, c3, c4, c5] = palette.colors;

    return (
        <TemplateContainer bgColor={c5.bgColor}>
            <TemplateHeader>
                <TemplateLogo fgColor={c5.textColor}>Pet Friends</TemplateLogo>
                <TemplateLinks fgColor={c2.bgColor}>
                    <TemplateLink bgColor={c3.bgColor}>Home</TemplateLink>
                    <TemplateLink>About</TemplateLink>
                    <TemplateLink>Services</TemplateLink>
                    <TemplateLink>Login</TemplateLink>
                    <div className="menuIcon">
                        <IoMenu />
                    </div>
                </TemplateLinks>
            </TemplateHeader>
            <TemplateHero>
                <div className="hero-content">
                    <h1 style={{ color: `#${c3.bgColor}` }}>
                        Save a Life,
                        <br />
                        Adopt Today
                    </h1>
                    <p style={{ color: `#${c5.textColor}` }}>
                        Butternut mix fresh mangos double dark chocolate
                        Sicilian pistachio pesto strawberries mocha chocolate
                        pinch of yum lentils winter peach strawberry mango
                    </p>
                    <CustomButton fgColor={c3.textColor} bgColor={c3.bgColor}>
                        Find a Pet
                    </CustomButton>
                </div>
                <PetSvg />
            </TemplateHero>
            <Section cards title="How You Can Help" fgColor={c5.textColor}>
                <Card
                    title="Adopt"
                    icon={<IoHeart size={50} />}
                    bgColor={c2.bgColor}
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
                    iconColor={c3.textColor}
                    center
                >
                    Strawberry mango smoothie dark chocolate simmer orange
                    blueberry chia seed jam
                </Card>
                <Card
                    title="Volunteer"
                    icon={<MdVolunteerActivism size={50} />}
                    bgColor={c2.bgColor}
                    iconColor={c2.textColor}
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
