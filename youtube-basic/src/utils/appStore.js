import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchReducer from "./searchSlice";
import videoSlice from "./videoSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
    video: videoSlice,
  },
});

export default store;
