import styled, { css } from "styled-components";

const shrinkLabelStyles = css`
    top: -1.2rem;
    font-size: 0.9rem;
    color: black;
`;

export const GroupContainer = styled.div`
    position: relative;
    margin: 0.8rem 0;
    input[type="password"] {
        letter-spacing: 0.3rem;
    }
`;

export const FormInputContainer = styled.input`
    background: none;
    background-color: rgba(255, 255, 255, 0.6);
    color: black;
    font-size: 1.125rem;
    font-family: "Quicksand", sans-serif;
    padding: 0.5rem;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid grey;

    &:-internal-autofill-selected {
        transition: background-color 100000000s;
        animation: 1ms void-animation-out;
    }

    &:-webkit-autofill {
        -webkit-text-fill-color: black;
        /* Hack to hide the default webkit autofill */
        transition: background-color 100000000s;
        animation: 1ms void-animation-out;
    }

    &::placeholder {
        color: grey;
    }

    &:focus {
        outline: none;
    }

    &:focus ~ label {
        ${shrinkLabelStyles}
    }

    @keyframes void-animation-out {
        0%,
        to {
            opacity: 1;
        }
    }
`;

export const FormInputLabel = styled.label`
    color: var(--label-color);
    font-size: 1rem;
    font-weight: 700;
    position: absolute;
    pointer-events: none;
    left: 1rem;
    top: 0.625rem;
    transition: 300ms ease all;
    &.shrink {
        ${shrinkLabelStyles}
    }
`;
