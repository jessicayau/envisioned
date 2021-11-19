import styled from "styled-components";

export const ColorCombinationsContainer = styled.div`
    /* display: flex;
    flex-wrap: wrap; */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
`;

export const ColorBox = styled.div`
    width: 100%;
    height: 200px;
    padding: 1rem;
    background-color: #${(props) => props.paletteColor};
    display: flex;
    flex: 1 1 200px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
`;

export const ColorBoxText = styled.div`
    color: #${(props) => props.textColor};
    line-height: 1.5rem;
`;
