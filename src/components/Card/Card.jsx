import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { CardContainer, CardContent, CardIcon, CardTitle } from "./Card.styles";

const Card = ({
    icon,
    image,
    title,
    btn,
    children,
    btnBg,
    btnFg,
    ...otherProps
}) => {
    return (
        <CardContainer {...otherProps}>
            {icon && <CardIcon {...otherProps}>{icon}</CardIcon>}
            {image && <img src={image} alt="random" />}
            {title && <CardTitle>{title}</CardTitle>}
            {children && <CardContent {...otherProps}>{children}</CardContent>}
            {btn && (
                <a href={`#${title}`}>
                    <CustomButton
                        bgColor={btnBg}
                        fgColor={btnFg}
                        {...otherProps}
                    >
                        {btn}
                    </CustomButton>
                </a>
            )}
        </CardContainer>
    );
};

export default Card;
