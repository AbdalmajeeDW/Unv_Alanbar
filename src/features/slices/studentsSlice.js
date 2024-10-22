import { createSlice } from "@reduxjs/toolkit";
import { deleteStudentFromAPI, fetchStudent } from "../api/students";

const studentsSlice = createSlice({
  name: "students",
  initialState: {
    data: [],
    studentsSelected: [],
    acceptedDateSelected: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStudent.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.studentsSelected = state.data.map(
          (student) =>
            `${student.first_name} ${student.second_name} ${student.third_name} ${student.fourth_name}`
        );
        state.acceptedDateSelected = Array.from(
          new Set(state.data.map((student) => student.accepted_date))
        );
      })
      .addCase(fetchStudent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteStudentFromAPI.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteStudentFromAPI.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.filter(
          (student) => student.id !== action.payload
        );
      })
      .addCase(deleteStudentFromAPI.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to delete student";
      });
  },
});

export default studentsSlice.reducer;
