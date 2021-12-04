import React from "react";
import { ToggleButtonContainer } from "./ToggleButton.styles";

const ToggleButton = ({ handleToggle, children }) => {
    return (
        <ToggleButtonContainer onClick={handleToggle}>
            {children}
        </ToggleButtonContainer>
    );
};

export default ToggleButton;
