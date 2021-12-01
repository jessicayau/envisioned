import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./Spinner.styles";

const Spinner = () => {
    return (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    );
};

export default Spinner;
