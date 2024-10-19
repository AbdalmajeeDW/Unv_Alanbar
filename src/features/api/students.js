import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../config";

const requestUrl = BASE_URL + "student/getAll";
export const fetchStudent = createAsyncThunk(
  "student/fetchStudent",
  async () => {
    const response = await axios.get(requestUrl);
    return response.data.data.data;
  }
);
