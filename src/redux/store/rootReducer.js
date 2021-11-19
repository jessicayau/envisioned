import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import paletteReducer from "../palette/paletteSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["palette"],
};

const rootReducer = combineReducers({
    palette: paletteReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
