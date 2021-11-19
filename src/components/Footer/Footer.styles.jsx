import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
    background-color: black;
    padding: 5% 5vw;
`;

export const FooterContent = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 2fr 1fr;

    div:last-child,
    div:first-child {
        justify-self: center;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;

        div:last-child,
        div:first-child {
            justify-self: left;
        }

        .subscribe {
            order: 2;
            grid-column: 1/3;
        }
    }

    /* .subscribe {
        grid-column: 1/3;
    } */
    /* @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1.5fr 1.5fr;
        .subscribe {
            grid-column: initial;
        }
    } */
`;

export const FooterTitle = styled.h3`
    padding-bottom: 0.5rem;
    color: #ebe3e1;
`;

export const Links = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FooterLink = styled(Link)`
    padding: 0.5rem 0;
    margin-right: auto;
    color: #96a3e8;

    &:hover {
        transform: scale(1.1);
    }
`;

export const FormContainer = styled.div`
    /* width: 100%;
    height: 100%; */

    .subscribe-form {
        width: 100%;
        margin: 1rem 0 0.5rem;
        display: flex;
        position: relative;

        button {
            position: absolute;
            margin: 0;
            top: 0;
            right: 0;
            height: 100%;
            display: flex;
            align-items: center;
        }
    }
`;

export const FormInput = styled.input`
    width: 100%;
    height: 2.5rem;
    padding: 0.8rem 1rem;
    padding-right: 8rem;
    border: none;
    border-radius: 10px;
    font-size: 1rem;

    &:active,
    &:focus {
        outline: none;
    }
`;

export const Message = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.3rem;
    padding-left: 1rem;
    color: #fa7a87;
`;

export const SocialsContainer = styled.div`
    max-width: 350px;
    margin: 1rem auto 0.5rem;
    display: flex;
    justify-content: space-around;
`;

export const SocialLink = styled.a`
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #96a3e8;

    &:hover {
        transform: scale(1.3);
        transition: transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        filter: brightness(130%);
    }
`;
