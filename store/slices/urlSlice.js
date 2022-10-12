import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  url: {
    urlId: '',
    clicks: 0,
    origUrl: '',
    shortUrl: '',
  },
};

export const urlSlice = createSlice({
  name: 'url',
  initialState,
  reducers: {
    updateUrl: (state, action) => {
      state.url = { ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementByAmount } = urlSlice.actions;

export default urlSlice.reducer;
