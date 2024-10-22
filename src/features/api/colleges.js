import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../config";

const fetchtUrl = BASE_URL + "college/getAll";
const deletetUrl =(collegeId)=> BASE_URL + `college/delete/${collegeId}`;
export const fetchColleges = createAsyncThunk(
  "colleges/fetchColleges",
  async () => {
    const response = await axios.get(fetchtUrl);
    return response.data.data.data;
  }
);
export const deleteCollegeFromAPI = createAsyncThunk(
  'colleges/deleteCollgeFromAPI',
  async (collegeId, { rejectWithValue }) => {
    try {
      const response = await axios.post(deletetUrl(collegeId));
      return collegeId; 
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
