import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import schoolsService from "../services/schools.service";
import schools from "./initState/schools";

export const getSchools = createAsyncThunk(
  "school/get",
  async ({ params = {} } = {}, thunkAPI) => {
    try {
      const response = await schoolsService.getSchools({ params });
      thunkAPI.dispatch(replaceSchools(response.data));
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

export const getSchoolById = createAsyncThunk(
  "school?_id",
  async (id, thunkAPI) => {
    try {
      const response = await schoolsService.getSchoolById(id);
      thunkAPI.dispatch(replaceSchool(response));
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

export const addSchool = createAsyncThunk("school", async (data, thunkAPI) => {
  try {
    const response = await schoolsService.addSchool(data);
    return response;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue();
  }
});
export const updateSchool = createAsyncThunk(
  "school/_id",
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await schoolsService.updateSchool({ id, data });
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);
export const deleteSchool = createAsyncThunk(
  "school/_id",
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await schoolsService.deleteSchool({ id, data });
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const importSchools = createAsyncThunk(
  "school/import",
  async (data, thunkAPI) => {
    try {
      const response = await schoolsService.importSchools(data);
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getCountSchools = createAsyncThunk(
  "school/count",
  async (
    { params = {}, field = "all", countField = "filiere" } = {},
    thunkAPI
  ) => {
    try {
      const response = await schoolsService.getCountSchools({ params });
      const resp = response?.data[0];
      const count = thunkAPI.getState()?.schools?.count;
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

const initialState = schools;

const usersSlice = createSlice({
  name: "Schools",
  initialState,
  extraReducers: {
    [addSchool.fulfilled]: (state, action) => {
      state.schools = [action.payload.data, ...state.schools];
    },
    [addSchool.rejected]: (state, action) => {
      state.schools = [...state.schools];
    },
  },

  reducers: {
    replacePagination(state, action) {
      return {
        ...state,
        pagination: action.payload,
      };
    },

    replaceSchools(state, action) {
      return {
        ...state,
        schools: action.payload,
      };
    },
    replaceSchool(state, action) {
      return {
        ...state,
        school: action.payload,
      };
    },
    replaceDepartment(state, action) {
      return {
        ...state,
        departments: action.payload,
      };
    },
    replaceInputSchool(state, action) {
      return {
        ...state,
        inputSchool: action.payload,
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
  replaceSchools,
  replacePagination,
  replaceInputSchool,
  replaceSchool,
  replaceCount,
  replaceDepartment,
} = actions;
export default reducer;
