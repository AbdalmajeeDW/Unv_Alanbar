import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../config";

const fetchUrl = BASE_URL + "student/getAll";
const deleteUrl = (studentId)=> BASE_URL + `student/delete/${studentId}`;
export const fetchStudent = createAsyncThunk(
  "student/fetchStudent",
  async () => {
    const response = await axios.get(fetchUrl);
    return response.data.data.data;
  }
);
export const deleteStudentFromAPI = createAsyncThunk(
  'students/deleteStudentFromAPI',
  async (studentId, { rejectWithValue }) => {
    try {
      const response = await axios.post(deleteUrl(studentId));
      return studentId; 
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);