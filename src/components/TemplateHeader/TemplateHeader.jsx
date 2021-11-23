import React from "react";
import { IoMenu } from "react-icons/io5";
import CustomButton from "../CustomButton/CustomButton";
import {
    TemplateHeaderContainer,
    TemplateLink,
    TemplateLinks,
    TemplateLogo,
} from "./TemplateHeader.styles";

const TemplateHeader = ({ brand, links, children, button, ...otherProps }) => {
    const { btnBg, btnFg, textColor, activeBg } = otherProps;

    return (
        <TemplateHeaderContainer textColor={textColor}>
            <TemplateLogo>
                {children}
                <span>{brand}</span>
            </TemplateLogo>
            <TemplateLinks>
                <TemplateLink activeBg={activeBg}>Home</TemplateLink>
                {links.map((link, index) => (
                    <TemplateLink key={index}>{link}</TemplateLink>
                ))}
                {button && (
                    <CustomButton square btnBg={btnBg} btnFg={btnFg}>
                        Contact Us
                    </CustomButton>
                )}
                <div className="menuIcon">
                    <IoMenu />
                </div>
            </TemplateLinks>
        </TemplateHeaderContainer>
    );
};

export default TemplateHeader;
