import styled from "styled-components";

export const TemplateContainer = styled.div`
    width: 90%;
    background-color: #${(props) => (props.bgColor ? props.bgColor : "ffffff")};
    margin: 0 5vw;
    border: 1px solid lightgrey;
    transition: background-color 1s;
`;

export const TemplateHeader = styled.header`
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
`;

export const TemplateLogo = styled.span`
    font-size: 1.2rem;
    font-weight: bold;
    color: #${(props) => (props.fgColor ? props.fgColor : "000000")};
`;

export const TemplateLinks = styled.div`
    color: #${(props) => (props.fgColor ? props.fgColor : "000000")};
    display: flex;

    .menuIcon {
        display: none;

        @media screen and (max-width: 550px) {
            display: block;
        }
    }
`;

export const TemplateLink = styled.span`
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
            background-color: #${(props) => props.bgColor};
        }
    }

    @media screen and (max-width: 550px) {
        display: none;
    }
`;

export const TemplateHero = styled.div`
    width: 100%;
    padding: 5%;
    display: grid;
    grid-template-columns: 1fr 1fr;

    h1 {
        font-size: 5vw;
    }

    p {
        line-height: 1.5rem;
        padding: 1rem 0;
    }

    svg {
        width: 100%;
        height: auto;
    }

    @media screen and (max-width: 767px) {
        grid-template-columns: 1fr;

        h1 {
            font-size: 8vw;
        }

        svg {
            width: 80%;
            margin: 2rem auto 0;
        }
    }
`;
