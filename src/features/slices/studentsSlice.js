import { createSlice } from '@reduxjs/toolkit';
import { fetchStudent } from '../api/students';

const studentsSlice = createSlice({
  name: 'students',
  initialState: {
    data: [],
    studentsSelected:[],
    status: 'idle', 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudent.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStudent.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.studentsSelected = state.data.map(
          (student) =>
            `${student.first_name} ${student.second_name} ${student.third_name} ${student.fourth_name}`
        );
      })
      .addCase(fetchStudent.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default studentsSlice.reducer;