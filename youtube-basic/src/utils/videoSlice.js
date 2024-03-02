import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videoList: null,
  },
  reducers: {
    setVideoList: (state, action) => {
      state.videoList = action.payload;
    },
  },
});

export const { setVideoList } = videoSlice.actions;
export default videoSlice.reducer;
