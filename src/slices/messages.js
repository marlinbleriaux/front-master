import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import messages from "./initState/messages";
import messageService from "../services/messages.service";
import pagination from "../utils/pagination";

const transform = (item) => ({
  _id: item.id || 0,
  text: item.body || " ",
  // image: 'https://placeimg.com/140/140/any',
  createdAt: item?.createdAt,
  user: {
    _id: item.user_id,
    // avatar: item.user?.person?.picture,
  },
});

export const getChat = createAsyncThunk(
  "messages/chats",
  async ({ id, params = {} } = {}, thunkAPI) => {
    try {
      const response = await messageService.getChat({ id, params });
      thunkAPI.dispatch(replaceChats(response?.data));
      thunkAPI.dispatch(replacePagination(response?._pagination));
      return response.data;
    } catch (error) {
      console.log(error);
      //   return thunkAPI.rejectWithValue();
    }
  }
);
export const getMessages = createAsyncThunk(
  "messages/messages",
  async ({ page = 1, id } = {}, thunkAPI) => {
    try {
      const response = await messageService.getMessages({ page, id });
      // console.log(response);
      // console.log("data data data data data");
      const rep = response?.data;
      // if (rep.data.length < 1) {
      //   return true;
      // }
      // let p = [];
      // p = rep.data.map((item) => transform(item));

      thunkAPI.dispatch(
        replace({
          data: response,
          page,
          id,
        })
      );
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);
export const sendMessage = createAsyncThunk(
  "messages/messages",
  async (donnees = {}, thunkAPI) => {
    try {
      const response = await messageService.sendMessage(donnees);
      thunkAPI.dispatch(replace({ data: response.data, id: donnees?.id }));
      thunkAPI.dispatch(
        replaceLastMessage({ message: response.data, chat_id: donnees?.id })
      );
      return response.data;
    } catch (error) {
      console.log(error);
      //   return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = messages;
const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    replace(state, action) {
      const newData = {};
      const { data, page, id } = action.payload;
      newData[id] = [...data?.messages];
      return data
        ? {
            ...state,
            messages: {
              ...state.messages,
              ...newData,
            },
          }
        : initialState;
    },
    setMessage: (state, action) => {
      return { message: action.payload };
    },
    clearMessage: () => {
      return { message: "" };
    },
    replaceChats(state, action) {
      return {
        ...state,
        chats: action.payload,
      };
    },
    replacePagination(state, action) {
      return {
        ...state,
        pagination: action.payload,
      };
    },
    replaceCurrentChat(state, action) {
      return {
        ...state,
        curentChat: action.payload,
      };
    },
    replaceLastMessage(state, action) {
      return {
        ...state,
        chats: [
          action.payload?.message,
          ...[...state?.chats].filter(
            (chat) => chat?._id !== action.payload?.chat_id
          ),
        ],
        curentChat: action.payload?.message,
      };
    },
  },
});
const { reducer, actions } = messagesSlice;
export const {
  replace,
  setMessage,
  clearMessage,
  replaceChats,
  replacePagination,
  replaceCurrentChat,
  replaceLastMessage,
} = actions;
export default reducer;
