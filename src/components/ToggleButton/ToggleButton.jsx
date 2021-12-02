import React from "react";
import { ToggleButtonContainer } from "./ToggleButton.styles";

const ToggleButton = ({ toggleSidebar, children }) => {
    return (
        <ToggleButtonContainer
            aria-label="toggle sidebar"
            onClick={toggleSidebar}
        >
            {children}
        </ToggleButtonContainer>
    );
};

export default ToggleButton;
