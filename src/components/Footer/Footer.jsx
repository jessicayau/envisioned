import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import {
    FooterContainer,
    FooterContent,
    FooterLink,
    FooterTitle,
    Links,
    SocialLink,
    SocialsContainer,
} from "./Footer.styles";

const Footer = () => {
    return (
        <FooterContainer>
            {/* <FooterContent>
                <div>
                    <FooterTitle>Links</FooterTitle>
                    <Links>
                        <FooterLink to="/">Home</FooterLink>
                        <FooterLink to="/">About</FooterLink>
                        <FooterLink to="/">Contact Us</FooterLink>
                        <FooterLink to="/">FAQ</FooterLink>
                    </Links>
                </div>
                <div>
                    <FooterTitle>Links</FooterTitle>
                    <Links>
                        <FooterLink to="/">Home</FooterLink>
                        <FooterLink to="/">About</FooterLink>
                        <FooterLink to="/">Contact Us</FooterLink>
                        <FooterLink to="/">FAQ</FooterLink>
                    </Links>
                </div>
            </FooterContent> */}
            <SocialsContainer>
                <SocialLink href="https://www.facebook.com">
                    <FaFacebookF title="facebook" />
                </SocialLink>
                <SocialLink href="https://www.instagram.com">
                    <FaInstagram title="instagram" />
                </SocialLink>
                <SocialLink href="https://www.twitter.com">
                    <FaTwitter title="twitter" />
                </SocialLink>
                <SocialLink href="https://www.youtube.com">
                    <FaYoutube title="youtube" />
                </SocialLink>
            </SocialsContainer>
        </FooterContainer>
    );
};

export default Footer;
