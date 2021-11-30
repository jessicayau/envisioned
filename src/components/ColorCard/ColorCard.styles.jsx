import styled, { css } from "styled-components";

const primaryStyles = css`
    background-color: #${(props) => props.bgColor};
`;

const gradientStyles = css`
    background: ${(props) => props.gradient};
`;

const getCardStyles = (props) => {
    if (props.gradient) {
        return gradientStyles;
    } else {
        return primaryStyles;
    }
};

export const ColorCardContainer = styled.div`
    position: relative;
    width: 100%;
    height: 250px;
    padding: 1rem;
    display: flex;
    flex: 1 1 200px;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    color: #${(props) => props.fgColor};
    line-height: 1.5rem;

    ${getCardStyles}

    &:hover {
        transform: scale(1.1);
    }

    h3 {
        margin-bottom: 1rem;
    }
`;

export const CopyIconWrapper = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: #${(props) => props.fgColor};
    background-color: transparent;
    cursor: pointer;

    svg {
        height: 1.7rem;
        width: 1.7rem;
    }
`;

export const CopiedMessage = styled.span`
    font-size: 1rem;
`;
