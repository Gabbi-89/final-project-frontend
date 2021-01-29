import { createSlice } from '@reduxjs/toolkit';

export const meals = createSlice({
  name: 'meals',
  initialState: {
    recipes: []
  }
});
