import React, { useState } from "react";
import {
    SliderButton,
    SliderButtons,
    SliderContainer,
    SlidesWrapper,
} from "./Slider.styles";

const Slider = ({ slideLinks, children }) => {
    const [isActive, setIsActive] = useState(0);

    const handleActiveSlide = (index) => {
        setIsActive(index);
    };

    return (
        <SliderContainer>
            <SlidesWrapper slideNum={isActive}>{children}</SlidesWrapper>
            <SliderButtons>
                {slideLinks.map((slideID, index) => (
                    <SliderButton
                        key={slideID}
                        htmlFor={slideID}
                        index={index}
                        isActive={isActive}
                        aria-label={`slide ${index}`}
                        onClick={() => handleActiveSlide(index)}
                    >
                        <input type="radio" id={slideID} name="slide-btn" />
                    </SliderButton>
                ))}
            </SliderButtons>
        </SliderContainer>
    );
};

export default Slider;
