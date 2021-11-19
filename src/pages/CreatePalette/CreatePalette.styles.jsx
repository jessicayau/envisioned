import styled from "styled-components";

export const CreatePaletteContainer = styled.div`
    padding: 5% 5vw 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TextContent = styled.div`
    width: 50%;
    padding: 1rem 0 2rem;

    p {
        padding-top: 1rem;
        line-height: 1.5rem;
    }

    @media screen and (max-width: 650px) {
        width: 80%;
    }
`;

export const PaletteSwatches = styled.div`
    border: 1px solid grey;
    width: 50%;
    border-radius: 10px;
    margin-bottom: 1rem;
    position: relative;

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

    @media screen and (max-width: 650px) {
        width: 80%;
    }
`;

export const Buttons = styled.div`
    display: flex;
    gap: 1rem;

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
    margin-top: 3rem;
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
// export const ColorSwatch = styled.div

//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     background-color: ${(props) => props.bgColor};

//     input {
//         width: 100%;
//         height: 7rem;
//         border: none;
//         background: none;
//     }

//     label {
//         text-transform: uppercase;
//         @media screen and (max-width: 425px) {
//             display: none;
//         }
//     }
// `;
