import { createSlice } from '@reduxjs/toolkit';
import { fetchdepartment } from '../api/department';

const collegesSlice = createSlice({
  name: 'department',
  initialState: {
    data: [],
    departmentsSelected:[],
    status: 'idle', 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchdepartment.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchdepartment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
         state.departmentsSelected = state.data.map(
          (department) =>
            `${department.name}`
        );
      })
      .addCase(fetchdepartment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default collegesSlice.reducer;