import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
axios.defaults.withCredentials = true;

export const signup = createAsyncThunk(
  "user/signup",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("/auth/signup", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("/auth/login", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const test = createAsyncThunk(
  "user/test",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get("/auth/test", {
        headers: { Authorization: `Bearer ${data.token}` },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
