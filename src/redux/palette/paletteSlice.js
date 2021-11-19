import { createSlice } from "@reduxjs/toolkit";
import { menuData } from "../../assets/data";
import { getPaletteInfo } from "../../utils/utils";

const initialPalette = getPaletteInfo(
    menuData[5].palettes[2].id,
    menuData[5].palettes[2].colors
);

const initialState = {
    allPalettes: menuData,
    currentPalette: initialPalette,
    customPalettes: {
        categoryId: 7,
        category: "Custom",
        palettes: [],
    },
};

export const paletteSlice = createSlice({
    name: "palette",
    initialState,
    reducers: {
        // getAllPalettes: (state) => {
        //     state.allPalettes = menuData;
        // },
        getPalette: (state, action) => {
            state.currentPalette = getPaletteInfo(
                action.payload.paletteID,
                action.payload.palette
            );
            console.log(state.currentPalette);
        },
        addCustomPalette: (state, action) => {
            state.customPalettes.palettes.push(action.payload);
        },
        removeCustomPalette: (state, action) => {
            state.customPalettes.palettes =
                state.customPalettes.palettes.filter(
                    (palette) => palette.id !== action.payload
                );
            state.currentPalette = initialPalette;
        },
    },
});

// selectors
export const selectAllPalettes = (state) => state.palette.allPalettes;
export const selectCurrentPalette = (state) => state.palette.currentPalette;
export const selectCustomPalettes = (state) => state.palette.customPalettes;

// actions
export const { getPalette, addCustomPalette, removeCustomPalette } =
    paletteSlice.actions;

export default paletteSlice.reducer;
