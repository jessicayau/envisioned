import styled from "styled-components";

export const SectionContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${(props) => (props.color ? props.color : "transparent")};

    h3 {
        margin-bottom: 2rem;
    }
`;

export const Signature = styled.p`
    display: flex;
    justify-content: flex-end;
    column-gap: 0.5rem;
    font-size: 1.2rem;
`;
