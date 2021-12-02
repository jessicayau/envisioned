import React from "react";
import { TooltipContainer } from "./Tooltip.styles";

const Tooltip = ({ children }) => {
    return <TooltipContainer className="tooltip">{children}</TooltipContainer>;
};

export default Tooltip;
