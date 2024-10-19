import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../config";

const requestUrl = BASE_URL + "department/getAll";
export const fetchdepartment = createAsyncThunk(
  "department/fetchdepartment",
  async () => {
    const response = await axios.get(requestUrl);
    return response.data.data.data
     
  }
);
