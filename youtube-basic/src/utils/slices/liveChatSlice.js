import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
  name: "liveChat",
  initialState: {
    liveChatsArray: [],
  },
  reducers: {
    addChatMessage: (state, action) => {
      if (state.liveChatsArray?.length > 12) {
        state.liveChatsArray?.splice(12, 1);
      }
      state.liveChatsArray?.unshift(action.payload);
    },
    clearChat: (state) => {
      state.liveChatsArray = [];
    },
  },
});

export const { addChatMessage, clearChat } = liveChatSlice.actions;
export default liveChatSlice.reducer;
