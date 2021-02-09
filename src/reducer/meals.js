import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  week: {
    statusMessage: '',
    errorMessage: null
  }
};

export const meals = createSlice({
  name: 'meals',
  initialState: initialState,
  reducers: {
    setErrorMessage: (state, action) => {
      const { errorMessage } = action.payload;
      state.week.errorMessage = errorMessage;
    },
    setWeeklyPlan: (state, action) => {

    }
  }
});
