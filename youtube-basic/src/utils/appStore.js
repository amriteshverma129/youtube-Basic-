import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import searchSlice from "./slices/searchSlice";
import videoSlice from "./slices/videoSlice";
import liveChatSlice from "./slices/liveChatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    video: videoSlice,
    liveChat: liveChatSlice,
  },
});

export default store;
