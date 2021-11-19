import styled from "styled-components";

export const CustomButtonContainer = styled.button`
    /* width: 50%; */
    /* min-width: 200px; */
    /* max-width: 250px; */
    height: 2.5rem;
    margin-top: 1rem;
    padding: 0 2rem;
    /* padding: 0.8rem 1rem; */
    border-radius: ${(props) => (props.square ? 0 : "10px")};
    border: 1px solid #${(props) => (props.bgColor ? props.bgColor : "000000")};
    background-color: #${(props) => (props.bgColor ? props.bgColor : "ffffff")};
    color: #${(props) => (props.fgColor ? props.fgColor : "000000")};
    font-size: 1rem;
    font-weight: 700;
    line-height: 2rem;
    letter-spacing: 1px;

    &:hover {
        border: 1px solid #${(props) => (props.fgColor ? props.fgColor : "000000")};
        background-color: #${(props) => (props.fgColor ? props.fgColor : "000000")};
        color: #ffffff;
        transition: all 250ms ease-in-out;
    }
`;
