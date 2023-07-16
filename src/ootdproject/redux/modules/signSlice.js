import { createSlice } from '@reduxjs/toolkit';

export const signSlice = createSlice({
	name: 'user',
	initialState: {
		id: '',
		pw: '',
		email: '',
	},
	reducers: {
		loginUser: (state, action) => {
			//
		},

		clearUser: state => {
			//
		},
	},
});

export const { loginUser, clearUser } = userSlice.actions;
export default signSlice.reducer;
