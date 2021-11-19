import React from "react";
import { useSelector } from "react-redux";
import Slider from "../../components/Slider/Slider";
import { selectCurrentPalette } from "../../redux/palette/paletteSlice";
import {
    BackgroundImage,
    Slide,
    SlideTitle,
    Template2Container,
    TemplateContent,
} from "./Template2.styles";

const Template2 = () => {
    const palette = useSelector(selectCurrentPalette);
    const [c1, c2, c3, c4, c5] = palette.colors;

    console.log("temp2");
    return (
        <Template2Container>
            {/* <TemplateContent
                bgColor1={c1.bgColor}
                bgColor2={c3.bgColor}
                fgColor={c1.textColor}
            > */}
            <Slider slideLinks={["one", "two", "three"]}>
                <Slide>
                    <BackgroundImage
                        bgColor={c5.bgColor}
                        img="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    />
                    <SlideTitle fgColor={c2.bgColor}>Hello</SlideTitle>
                </Slide>
                <Slide>
                    <BackgroundImage
                        bgColor={c5.bgColor}
                        img="https://images.unsplash.com/photo-1525874684015-58379d421a52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                    />
                    <SlideTitle fgColor={c2.bgColor}>Hello</SlideTitle>
                </Slide>
                <Slide>
                    <BackgroundImage
                        bgColor={c5.bgColor}
                        img="https://images.unsplash.com/photo-1556115908-233c785befbe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                    />
                    <SlideTitle fgColor={c2.bgColor}>Hello</SlideTitle>
                </Slide>
            </Slider>
            {/* </TemplateContent> */}
        </Template2Container>
    );
};

export default Template2;
