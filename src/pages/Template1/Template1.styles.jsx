import styled from "styled-components";

export const TemplateContainer = styled.div`
    position: relative;
    background-color: #${(props) => (props.bgColor ? props.bgColor : "ffffff")};
    margin: 0 5vw;
    border: 1px solid lightgrey;
    transition: background-color 1s;
`;
