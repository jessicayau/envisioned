import styled from "styled-components";

export const SectionContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${(props) =>
        props.bgColor ? props.bgColor : "transparent"};
`;

export const ContrastSectionText = styled.p`
    padding: 0 5%;
`;

export const List = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    column-gap: 2.5rem;
    row-gap: 1rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;
