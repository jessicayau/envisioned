import styled from "styled-components";

export const CreatePaletteContainer = styled.div`
    padding: 5% 5vw 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1,
    h2 {
        align-self: flex-start;
    }
`;

export const TextContent = styled.div`
    padding: 2rem 0 4rem;
    display: flex;
    gap: 2rem;

    p {
        width: 50%;
        padding-top: 1rem;
        line-height: 1.5rem;
    }

    @media screen and (max-width: 767px) {
        flex-direction: column;
        gap: 1rem;

        p {
            width: 100%;
        }
    }
`;

export const PaletteSwatches = styled.div`
    width: 80%;
    height: 8rem;
    position: relative;
    display: flex;
    border: 1px solid grey;
    margin-bottom: 1rem;

    @media screen and (max-width: 767px) {
        width: 80%;
        height: 100%;
        flex-direction: column;
        border-radius: 10px;

        .swatch:first-child {
            span {
                border-radius: 10px 10px 0 0;
            }
        }

        .swatch:last-child {
            span {
                border-radius: 0 0 9px 9px;
            }
        }
    }
`;

export const Buttons = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 5rem;

    button {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        &:hover {
            box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
        }
    }

    @media screen and (max-width: 400px) {
        display: block;
        width: 80%;
    }
`;

export const CustomPalettesContainer = styled.div`
    width: 100%;
    margin-top: 2em;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-items: center;
    column-gap: 2rem;
    row-gap: 1rem;
`;

export const PaletteWrapper = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`;

export const RemoveButton = styled.button`
    background-color: transparent;

    svg {
        width: 2rem;
        height: 2rem;

        &:hover {
            transform: scale(1.1);
        }
    }
`;

export const ClearAllButton = styled.button`
    font-size: 1.1rem;
    margin-top: 2rem;
    align-self: flex-start;
    background: none;

    &:hover {
        font-weight: 700;
    }
`;
