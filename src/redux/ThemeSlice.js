import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "theme",
  initialState: {
    theme: [],
  },
  reducers: {
    theme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { theme } = userSlice.actions;

export const selectTheme = (state) => state.theme;

export default userSlice.reducer;
