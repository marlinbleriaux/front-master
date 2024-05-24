import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import UsersService from "../services/users.service";
import usersService from "../services/users.service";

export const getUsers = createAsyncThunk(
  "admin/user",
  async ({ params = {} } = {}, thunkAPI) => {
    try {
      const response = await UsersService.getUsers({ params });
      thunkAPI.dispatch(replaceUsers(response.data));
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

export const getRoles = createAsyncThunk(
  "roles",
  async ({ params = {} } = {}, thunkAPI) => {
    try {
      const response = await UsersService.getRoles({ params });
      thunkAPI.dispatch(replaceRoles(response.data));
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

export const getTeachers = createAsyncThunk(
  "public/user?type",
  async (type, thunkAPI) => {
    try {
      const response = await UsersService.getTeachers(type);
      thunkAPI.dispatch(replaceTeachers(response.data));
      thunkAPI.dispatch(replacePagination(response._pagination));
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

export const getUserById = createAsyncThunk(
  "public/user?_id",
  async (id, thunkAPI) => {
    try {
      const response = await UsersService.getUserById(id);
      thunkAPI.dispatch(replaceUser(response));
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

export const addUsers = createAsyncThunk(
  "public/user/sign-up",
  async (data, thunkAPI) => {
    try {
      console.log(data);
      const response = await UsersService.addUsers(data);
      thunkAPI.dispatch(replaceUsers(response));
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

export const updateUser = createAsyncThunk(
  "user/_id",
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await UsersService.updateUser({ id, data });
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const deleteUser = createAsyncThunk(
  "public/user?_id",
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await usersService.deleteUser({ id, data });
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = {
  pagination: {
    total: 0,
    totalPage: 0,
    page: 1,
  },
  users: [],
  roles: [],
  user: {},
  teachers: [],
  inputUser: {},
};

const usersSlice = createSlice({
  name: "users",
  initialState,

  extraReducers: {
    [addUsers.fulfilled]: (state, action) => {
      state.users = [action.payload.data, ...state.users];
    },
    [addUsers.rejected]: (state, action) => {
      state.users = [...state.users];
    },
  },

  reducers: {
    replacePagination(state, action) {
      return {
        ...state,
        pagination: action.payload,
      };
    },

    replaceUsers(state, action) {
      return {
        ...state,
        users: action.payload,
      };
    },
    
    replaceRoles(state, action) {
      return {
        ...state,
        roles: action.payload,
      };
    },

    replaceUser(state, action) {
      return {
        ...state,
        user: action.payload,
      };
    },
    
    replaceInputUser(state, action) {
      return {
        ...state,
        inputUser: action.payload,
      };
    },

    replaceTeachers(state, action) {
      return {
        ...state,
        teachers: action.payload,
      };
    },
  },
});
const { reducer, actions } = usersSlice;
export const { replaceUsers, replaceRoles, replaceUser, replaceInputUser, replacePagination, replaceTeachers } = actions;
export default reducer;
