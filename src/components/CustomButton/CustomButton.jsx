import React from "react";
import { CustomButtonContainer } from "./CustomButton.styles";

const CustomButton = ({ children, btnBg, btnFg, ...otherProps }) => {
    return (
        <CustomButtonContainer btnFg={btnFg} btnBg={btnBg} {...otherProps}>
            {children}
        </CustomButtonContainer>
    );
};

export default CustomButton;
