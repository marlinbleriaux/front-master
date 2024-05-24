import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import AuthService from "../services/auth.service";
import auth from "./initState/auth";
import { showError } from "../components/Toasts";

export const register = createAsyncThunk(
  "auth/register",
  async ({ username, email, password }, thunkAPI) => {
    try {
      const response = await AuthService.register(username, email, password);
      thunkAPI.dispatch(setMessage(response.data.message));
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

export const login = createAsyncThunk(
  "/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const data = await AuthService.login(username, password);
      console.log("data");
      console.log(data);
      thunkAPI.dispatch(replaceCurrentUser(data.user));
      if (data?.user?.role?.id ==1) {
        thunkAPI.dispatch(replaceIsLogged(true));
      } else {
        showError("Verifier votre compte et recommencer.");
      }
      // if (data?.user?.role?.name == "ADMIN") {
      //   showError("Verifier votre compte et recommencer.");
      // }
      return { user: data.user };
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);
export const logout = createAsyncThunk(
  "auth/logout",
  async ({} = {}, thunkAPI) => {
    try {
      await localStorage.removeItem("@Auth:token");
      await localStorage.setItem("User", "");
      await localStorage.removeItem("User");
      await thunkAPI.dispatch(replaceCurrentUser({}));
      await thunkAPI.dispatch(replaceIsLogged(false));

      return { user: {} };
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);
const initialState = auth;
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
    },
    [register.rejected]: (state, action) => {
      state.isLoggedIn = false;
    },
  },
  reducers: {
    replaceCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload,
      };
    },
    replaceIsLogged(state, action) {
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    },
  },
});
const { reducer, actions } = authSlice;
export const { replaceCurrentUser, replaceIsLogged } = actions;

export default reducer;
