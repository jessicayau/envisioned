import styled from "styled-components";

export const CustomButtonContainer = styled.button`
    height: 2.5rem;
    margin-top: 1rem;
    padding: 0 2rem;
    border-radius: ${(props) => (props.square ? 0 : "10px")};
    background-color: #${(props) => (props.btnBg ? props.btnBg : "ffffff")};
    color: #${(props) => (props.btnFg ? props.btnFg : "000000")};
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 2rem;
    letter-spacing: 1px;

    svg {
        color: #${(props) => props.btnFg && props.btnFg};
    }

    &:hover {
        transition: all 250ms ease-in-out;
        transform: scale(1.1);
    }
`;
