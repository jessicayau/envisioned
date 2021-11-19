import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentPalette } from "../../redux/palette/paletteSlice";
import {
    Background,
    Content,
    Form,
    ImageContainer,
    ImgSlide,
    Slide,
    Template,
    Template3Container,
} from "./Template3.styles";
import { ReactComponent as WaterBottle } from "../../assets/images/bottle.svg";
import Slider from "../../components/Slider/Slider";
import CustomButton from "../../components/CustomButton/CustomButton";
import FormInput from "../../FormInput/FormInput";

const Template3 = () => {
    const palette = useSelector(selectCurrentPalette);
    const [c1, c2, c3, c4, c5] = palette.colors;

    return (
        <Template3Container
        // bgColor1={c2.bgColor}
        // bgColor2={c3.bgColor}
        // bgColor3={c5.bgColor}
        >
            {/* <Content
                bgColor1={c2.bgColor}
                bgColor2={c3.bgColor}
                bgColor3={c5.bgColor}
                className="backgroundGradient"
            > */}
            <Slider
                slideLinks={["gradientOne", "gradientTwo", "gradientThree"]}
            >
                <Slide
                    className="slide"
                    id="gradientOne"
                    bgColor={`linear-gradient(#${c2.bgColor}, #${c3.bgColor})`}
                >
                    <WaterBottle />
                </Slide>
                <Slide
                    className="slide"
                    id="gradientTwo"
                    bgColor={`linear-gradient(#${c2.bgColor}, #${c3.bgColor}, #${c4.bgColor})`}
                >
                    <div className="bgImage"></div>
                </Slide>
                <Slide
                    className="slide"
                    id="gradientThree"
                    bgColor={`linear-gradient(#${c2.bgColor}, #${c3.bgColor})`}
                >
                    <h1>Login</h1>
                    <Form>
                        <FormInput
                            type="email"
                            id="userEmail"
                            name="email"
                            label="Email"
                            value=""
                            readOnly
                        />
                        <FormInput
                            type="password"
                            id="userPassword"
                            name="password"
                            label="Password"
                            value=""
                            readOnly
                        />

                        <CustomButton>Login</CustomButton>
                    </Form>
                </Slide>
            </Slider>
            {/* </Content> */}
        </Template3Container>
    );
};

export default Template3;
