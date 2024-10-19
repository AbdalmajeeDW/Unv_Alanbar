import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './features/api/baseApi';
import authReducer from './features/slices/authSlice';
import collegesSlice from './features/slices/collegesSlice';
import studentsSlice from './features/slices/studentsSlice';
import departmentSlice from './features/slices/departmentSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [baseApi.reducerPath]: baseApi.reducer,
        colleges:collegesSlice,
        students:studentsSlice,
        department:departmentSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});
