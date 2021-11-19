import styled from "styled-components";

export const MenuItemContainer = styled.div`
    border-bottom: 1px solid rgba(200, 200, 241, 0.5);

    &:first-child {
        border-top: 1px solid rgba(200, 200, 241, 0.5);
    }
`;

export const CategoryTitle = styled.h3`
    padding: 10px 5px;
    cursor: pointer;

    &:hover {
        background-color: rgba(200, 200, 241, 0.2);
    }
`;

export const Submenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 0;
    overflow: hidden;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    transition: max-height 250ms ease-in-out;

    &::-webkit-scrollbar {
        display: none;
    }

    &.open {
        max-height: 300px;
        overflow: auto;
        transition: max-height 250ms ease-in-out;
    }

    .paletteWrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        /* border: 2px solid transparent; */

        &:last-child {
            margin-bottom: 10px;
        }

        /* &:first-child {
            margin-top: 10px;
        } */
    }
`;
