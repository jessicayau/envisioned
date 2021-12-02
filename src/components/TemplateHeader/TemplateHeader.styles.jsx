import styled from "styled-components";

export const TemplateHeaderContainer = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5vw;
    color: #${(props) => props.textColor};
    z-index: 1;

    svg {
        width: 1.5rem;
        height: 1.5rem;
    }
`;

export const TemplateLogo = styled.span`
    display: flex;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
`;

export const TemplateLinks = styled.div`
    display: flex;
    align-items: center;

    button {
        margin: 0 0 0 1rem;
        padding: 0 1.2rem;

        @media screen and (max-width: 767px) {
            display: none;
        }
    }

    .menuIcon {
        display: none;

        @media screen and (max-width: 767px) {
            display: block;
            margin-left: 1.5rem;
        }
    }
`;

export const TemplateLink = styled.span`
    font-size: 1.1rem;
    padding: 0 0.5rem;

    &:first-child {
        position: relative;

        &::after {
            content: "";
            width: 95%;
            height: 2px;
            position: absolute;
            bottom: -5px;
            left: 0;
            background-color: #${(props) => props.activeBg};
        }
    }

    @media screen and (max-width: 767px) {
        display: none;
    }
`;
