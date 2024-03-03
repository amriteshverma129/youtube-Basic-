import openai from "../../lib/openAI";
import { addChatMessage } from "../slices/liveChatSlice";
import { YOUTUBE_VIDEO_API } from "../variables/constants";

export const callSuggestionAPI = async (searchQuery) => {
  try {
    const autoSuggestion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content:
            "Act as autocomplete suggestion for the query :" +
            searchQuery +
            ". Give me atmost 10 suggestions, comma seperated like the example result given ahead for iphone. Example Result: iphone 11, iphone 12, iphone 12 pro, iphone 15, iphone 15 pro max",
        },
      ],
      model: "gpt-3.5-turbo",
    });

    return autoSuggestion?.choices[0]?.message?.content?.split(",");
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};

export const callSearchAPI = async (query) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${query}&key=` +
        process.env.REACT_APP_YOUTUBE_API_KEY
    );
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};

export const getPopularYouTubeVideos = async () => {
  try {
    const response = await fetch(
      YOUTUBE_VIDEO_API + process.env.REACT_APP_YOUTUBE_API_KEY
    );
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};

export const addMessage = (name, message, dispatch) => {
  dispatch(
    addChatMessage({
      name,
      message,
    })
  );
};
