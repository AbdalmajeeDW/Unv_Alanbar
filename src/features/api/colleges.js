import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../config";

const requestUrl = BASE_URL + "college/getAll";
export const fetchColleges = createAsyncThunk(
  "colleges/fetchColleges",
  async () => {
    const response = await axios.get(requestUrl);
    return response.data.data.data;
  }
);
