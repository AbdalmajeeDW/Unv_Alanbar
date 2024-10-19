import { createSlice } from '@reduxjs/toolkit';
import { fetchColleges } from '../api/colleges';

const collegesSlice = createSlice({
  name: 'colleges',
  initialState: {
    data: [],
    collegesSelected:[],
    status: 'idle', 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchColleges.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchColleges.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
         state.collegesSelected = state.data.map(
          (college) =>
            `${college.name}`
        );
      })
      .addCase(fetchColleges.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default collegesSlice.reducer;