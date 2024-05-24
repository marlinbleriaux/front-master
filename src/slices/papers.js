import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import papersService from "../services/papers.service";
import papers from "./initState/papers";

export const getPapers = createAsyncThunk(
  "paper/get",
  async ({ params = {} } = {}, thunkAPI) => {
    try {
      const response = await papersService.getPapers({ params });
      thunkAPI.dispatch(replacePapers(response.data));
      thunkAPI.dispatch(replacePagination(response._pagination));
      return response.data;
    } catch (error) {
      console.log(error);
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

export const getPaperById = createAsyncThunk(
  "paper?_id",
  async (id, thunkAPI) => {
    try {
      const response = await papersService.getPaperById(id);
      thunkAPI.dispatch(replacePaper(response));
      return response;
    } catch (error) {
      console.log(error);
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

export const addPaper = createAsyncThunk("paper", async (data, thunkAPI) => {
  try {
    const response = await papersService.addPaper(data);
    return response;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue();
  }
});
export const updatePaper = createAsyncThunk(
  "paper/_id",
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await papersService.updatePaper({ id, data });
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);
export const deletePaper = createAsyncThunk(
  "paper/_id",
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await papersService.deletePaper({ id, data });
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const importPapers = createAsyncThunk(
  "paper/import",
  async (data, thunkAPI) => {
    try {
      const response = await papersService.importPapers(data);
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getCountPapers = createAsyncThunk(
  "paper/count",
  async (
    { params = {}, field = "all", countField = "filiere" } = {},
    thunkAPI
  ) => {
    try {
      const response = await papersService.getCountPapers({ params });
      const resp = response?.data[0];
      const count = thunkAPI.getState()?.papers?.count;
      thunkAPI.dispatch(
        replaceCount({
          ...count,
          [countField]: { ...count[countField], [field]: resp[field] || 0 },
        })
      );
      return response?.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = papers;

const usersSlice = createSlice({
  name: "Papers",
  initialState,
  extraReducers: {
    [addPaper.fulfilled]: (state, action) => {
      state.papers = [action.payload.data, ...state.papers];
    },
    [addPaper.rejected]: (state, action) => {
      state.papers = [...state.papers];
    },
  },

  reducers: {
    replacePagination(state, action) {
      return {
        ...state,
        pagination: action.payload,
      };
    },

    replacePapers(state, action) {
      return {
        ...state,
        papers: action.payload,
      };
    },
    replacePaper(state, action) {
      return {
        ...state,
        paper: action.payload,
      };
    },
    replaceInputPaper(state, action) {
      return {
        ...state,
        inputPaper: action.payload,
      };
    },
    replaceCount(state, action) {
      return {
        ...state,
        count: action.payload,
      };
    },
  },
});
const { reducer, actions } = usersSlice;
export const {
  replacePapers,
  replacePagination,
  replaceInputPaper,
  replacePaper,
  replaceCount,
} = actions;
export default reducer;
