import { createSlice } from "@reduxjs/toolkit";
import { menuData } from "../../assets/data";
import { getPaletteInfo } from "../../utils/utils";

const initialPalette = getPaletteInfo(
    menuData[1].palettes[3].id,
    menuData[1].palettes[3].colors
);

const initialState = {
    allPalettes: menuData,
    currentPalette: initialPalette,
    customPalettes: {
        categoryId: 7,
        category: "Custom",
        palettes: [],
    },
    version: "light",
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
        },
        getRandomPalette: (state) => {
            const palettesArr = state.allPalettes.flatMap(
                (category) => category.palettes
            );
            const randomPalette =
                palettesArr[Math.floor(Math.random() * palettesArr.length)];
            state.currentPalette = getPaletteInfo(
                randomPalette.id,
                randomPalette.colors
            );
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
        clearAllCustomPalettes: (state, action) => {
            state.customPalettes.palettes = [];
        },
        changeVersion: (state, action) => {
            state.version = action.payload;
        },
    },
});

// selectors
export const selectAllPalettesData = (state) => state.palette.allPalettes;
export const selectCurrentPalette = (state) => state.palette.currentPalette;
export const selectCustomPalettes = (state) => state.palette.customPalettes;
export const selectVersion = (state) => state.palette.version;

// actions
export const {
    getPalette,
    getRandomPalette,
    addCustomPalette,
    removeCustomPalette,
    clearAllCustomPalettes,
    changeVersion,
} = paletteSlice.actions;

export default paletteSlice.reducer;
