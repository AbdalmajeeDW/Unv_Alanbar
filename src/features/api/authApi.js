import { logout, setCredentials } from '../slices/authSlice';
import { baseApi } from './baseApi';

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: 'auth/login',
                method: 'POST',
                body: credentials,
            }),
            transformResponse: (response) => {
                console.log('Response:', response);
                return response.data;
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setCredentials({ expires: data.token.expires_in, type: data.token.user_type, token: data.token.token }));
                } catch (err) { }
            },
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'auth/logout',
                method: 'GET',
            }),
            transformResponse: (response) => {
                // console.log('Response:', response);
                return response.data;
            },
            async onQueryStarted(args, { dispatch }) {
                try {
                    dispatch(logout());
                } catch (err) { }
            },
        }),
    }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;
