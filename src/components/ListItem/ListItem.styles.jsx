import styled from "styled-components";

export const ListItemContainer = styled.div`
    width: 100%;
    background-color: #${(props) => (props.bgColor ? props.bgColor : "ffffff")};
    color: #${(props) => (props.fgColor ? props.fgColor : "000000")};
    padding: 1rem;
    margin-bottom: 0.5rem;
    border-radius: 10px;
    min-height: ${(props) => (props.small ? "80px" : "100px")};
    display: grid;
    grid-template-columns: 1fr 8fr;
    align-items: center;
    gap: 1rem;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    h3 {
        font-size: 1.2rem;
        line-height: 1.5rem;
    }

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
`;
