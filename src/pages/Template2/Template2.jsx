import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
} from "./Template2.styles";
import {
    getRandomPalette,
    selectCurrentPalette,
    selectVersion,
} from "../../redux/palette/paletteSlice";

const Template2 = () => {
    const palette = useSelector(selectCurrentPalette);
    const version = useSelector(selectVersion);
    const dispatch = useDispatch();

    const [c1, setC1] = useState(palette.colors[0]);
    const [c2, setC2] = useState(palette.colors[1]);
    const [c3, setC3] = useState(palette.colors[2]);
    const [c4, setC4] = useState(palette.colors[3]);
    const [c5, setC5] = useState(palette.colors[4]);

    useEffect(() => {
        if (version === "light") {
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
    }, [version, palette]);

    const handleRandomPalette = () => {
        dispatch(getRandomPalette());
    };

    return (
        <TemplateContainer fgColor={version === "light" ? c5.color : c1.color}>
            <TemplateHeader
                brand="Renovate"
                links={["Projects", "Services"]}
                button
                btnBg={c2.color}
                btnFg={c2.contrastColor}
                textColor={version === "light" ? c5.color : c1.color}
                activeBg={version === "light" ? c4.color : c2.color}
                square
            >
                <BsHouseFill />
            </TemplateHeader>
            <HeroSection bgColor={version === "dark" && "rgba(0,0,0,.2)"}>
                <Title titleColor={c3.color}>Headline</Title>
                <p>
                    This is just an example of how the color palette could look
                    when applied. I hope you find inspiration from it! Also,
                    check out the light/dark versions by clicking on the
                    sun/moon at the bottom. Have fun!
                </p>
                <CustomButton
                    square
                    btnBg={c2.color}
                    btnFg={c2.contrastColor}
                    onClick={handleRandomPalette}
                >
                    Random Palette
                </CustomButton>
            </HeroSection>
            <Stats bgColor={c3.color} fgColor={c3.contrastColor}>
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
            <ImageSection
                bgColor={c1.color}
                fgColor={c1.contrastColor}
                titleColor={c4.color}
            >
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

export default Template2;
