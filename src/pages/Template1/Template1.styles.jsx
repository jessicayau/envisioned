import styled from "styled-components";

export const TemplateContainer = styled.div`
    position: relative;
    background-color: #${(props) => props.bgColor};
    margin: 0 5vw;
    border: 1px solid lightgrey;

    @media screen and (max-width: 425px) {
        margin: 0;
    }
`;
