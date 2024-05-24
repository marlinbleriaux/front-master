import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import infosService from "../services/infos.service";
import infos from "./initState/infos";
//import store from "../store.js"

export const addInfo = createAsyncThunk("info", async (data, thunkAPI) => {
  try {
    const response = await infosService.addInfo(data);
    return response;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue();
  }
});

export const getInfos = createAsyncThunk(
  "info",
  async ({ params = {} } = {}, thunkAPI) => {
    try {
      const response = await infosService.getInfos({ params });
      console.log(response);
      thunkAPI.dispatch(replaceInfos(response.data));
      thunkAPI.dispatch(replacePagination(response._pagination));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getInfoById = createAsyncThunk(
  "info?_id",
  async (id, thunkAPI) => {
    try {
      const response = await infosService.getInfoById(id);
      thunkAPI.dispatch(replaceInfo(response));
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const updateInfo = createAsyncThunk(
  "info/_id",
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await infosService.updateInfo({ id, data });
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);
export const deleteInfo = createAsyncThunk(
  "info/_id",
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await infosService.deleteInfo({ id, data });
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const importInfos = createAsyncThunk(
  "info/import",
  async (data, thunkAPI) => {
    try {
      const response = await infosService.importInfos(data);
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = infos;

const infosSlice = createSlice({
  name: "infos",
  initialState,

  reducers: {
    replacePagination(state, action) {
      return {
        ...state,
        pagination: action.payload,
      };
    },

    replaceInfos(state, action) {
      return {
        ...state,
        infos: action.payload,
      };
    },
    replaceInfo(state, action) {
      return {
        ...state,
        info: action.payload,
      };
    },
    replaceInputInfo(state, action) {
      return {
        ...state,
        inputInfo: action.payload,
      };
    },
  },
});
const { reducer, actions } = infosSlice;
export const {
  replaceInfos,
  replacePagination,
  replaceInfo,
  replaceInputInfo,
} = actions;
export default reducer;
