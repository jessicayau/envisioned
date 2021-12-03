import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { retrieveAllCollections } from "../../firebase/firebase";
import { getPaletteInfo } from "../../utils/utils";
import { initialPalette } from "../../assets/data";

const initialState = {
    isLoading: false,
    errorMessage: undefined,
    allPalettes: [],
    currentPalette: getPaletteInfo(initialPalette.id, initialPalette.palette),
    customPalettes: {
        categoryId: 7,
        category: "Custom",
        palettes: [],
    },
    version: "light",
};

// fetch data from firestore
export const fetchPalettesData = createAsyncThunk(
    "palette/fetchData",
    async (thunkAPI) => {
        const response = await retrieveAllCollections();
        return response;
    }
);

export const paletteSlice = createSlice({
    name: "palette",
    initialState,
    reducers: {
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
            state.currentPalette = getPaletteInfo(
                initialPalette.id,
                initialPalette.palette
            );
        },
        clearAllCustomPalettes: (state) => {
            state.customPalettes.palettes = [];
        },
        changeVersion: (state, action) => {
            state.version = action.payload;
        },
    },
    extraReducers: {
        [fetchPalettesData.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchPalettesData.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.allPalettes = action.payload;
            state.errorMessage = undefined;
        },
        [fetchPalettesData.rejected]: (state, action) => {
            state.isLoading = false;
            state.allPalettes.push(action.payload);
            state.errorMessage = action.payload;
        },
    },
});

// selectors
export const selectAllPalettesData = (state) => state.palette.allPalettes;
export const selectCurrentPalette = (state) => state.palette.currentPalette;
export const selectCustomPalettes = (state) => state.palette.customPalettes;
export const selectVersion = (state) => state.palette.version;
export const selectIsLoading = (state) => state.palette.isLoading;
export const selectErrorMessage = (state) => state.palette.errorMessage;

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
