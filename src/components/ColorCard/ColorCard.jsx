import React, { useState } from "react";
import { BiCopy } from "react-icons/bi";
import {
    ColorCardContainer,
    CopiedMessage,
    CopyIconWrapper,
} from "./ColorCard.styles";

const ColorCard = ({ children, ...otherProps }) => {
    const { gradient } = otherProps;
    const [copied, setCopied] = useState(false);

    const handleCopyColors = (colors) => {
        navigator.clipboard.writeText(colors);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1000);
    };

    return (
        <ColorCardContainer {...otherProps}>
            {children}
            {gradient && (
                <>
                    <CopyIconWrapper
                        type="button"
                        name="copy gradient"
                        {...otherProps}
                    >
                        <BiCopy onClick={() => handleCopyColors(gradient)} />
                    </CopyIconWrapper>
                    {copied && <CopiedMessage>Copied!</CopiedMessage>}
                </>
            )}
        </ColorCardContainer>
    );
};

export default ColorCard;

// linear-gradient(#FFF88F, #FF9B67)
