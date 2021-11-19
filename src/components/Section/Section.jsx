import React from "react";
import {
    SectionContainer,
    SectionTitle,
    SectionWrapper,
    Content,
} from "./Section.styles";

const Section = ({ children, title, ...otherProps }) => {
    return (
        <SectionContainer {...otherProps}>
            <SectionWrapper>
                {title && <SectionTitle {...otherProps}>{title}</SectionTitle>}
                <Content {...otherProps}>{children}</Content>
            </SectionWrapper>
        </SectionContainer>
    );
};

export default Section;
