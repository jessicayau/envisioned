import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    flex: 1 1 250px;
    flex-direction: column;
    align-items: ${(props) => props.center && "center"};
    padding: 1.5rem;
    border-radius: 1rem;
    color: #${(props) => (props.fgColor ? props.fgColor : "000000")};
    background-color: ${(props) =>
        props.bgColor ? `#${props.bgColor}` : "rgba(255, 255, 255, 0.4)"};
    box-shadow: rgba(0, 0, 0, 0.15) 5px 5px 5px;

    img {
        margin-bottom: 2rem;
    }
`;

export const CardIcon = styled.div`
    margin-bottom: 1rem;
    color: #${(props) => props.iconColor};
`;

export const CardTitle = styled.h3`
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    text-transform: capitalize;
    margin-bottom: 1rem;
`;

export const CardContent = styled.p`
    line-height: 1.5rem;
    padding-bottom: 1rem;
    flex: 1 1 auto;
    text-align: ${(props) => props.center && "center"};
`;
