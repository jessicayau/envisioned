import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentPalette } from "../../redux/palette/paletteSlice";
import { Form, Slide, Template3Container } from "./Template3.styles";
import { ReactComponent as WaterBottle } from "../../assets/images/bottle.svg";
import Slider from "../../components/Slider/Slider";
import CustomButton from "../../components/CustomButton/CustomButton";
import FormInput from "../../FormInput/FormInput";

const Template3 = () => {
    const palette = useSelector(selectCurrentPalette);
    const [, c2, c3, c4, c5] = palette.colors;

    return (
        <Template3Container>
            <Slider slideLinks={["slideOne", "slideTwo", "slideThree"]}>
                <Slide
                    className="slide"
                    id="slideOne"
                    bgColor={`linear-gradient(#${c2.color}, #${c4.color})`}
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

                        <CustomButton btnBg={c5.color} btnFg={c5.contrastColor}>
                            Login
                        </CustomButton>
                    </Form>
                </Slide>
                <Slide
                    className="slide"
                    id="slideTwo"
                    bgColor={`linear-gradient(#${c2.color}, #${c3.color})`}
                >
                    <WaterBottle />
                </Slide>
                <Slide
                    className="slide"
                    id="slideThree"
                    bgColor={`linear-gradient(#${c2.color}, #${c3.color}, #${c4.color})`}
                >
                    <div className="bgImage"></div>
                </Slide>
            </Slider>
        </Template3Container>
    );
};

export default Template3;
