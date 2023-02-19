import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
  name: "questions",
  initialState: {
    question1: false,
    question2: false,
    question3: false,
    question4: false,
    question5: false,
  },
  reducers: {
    setQuestion1: (state, action) => {
      state.question1 = action.payload.value;
    },
    setQuestion2: (state, action) => {
      state.question2 = action.payload.value;
    },
    setQuestion3: (state, action) => {
      state.question3 = action.payload.value;
    },
    setQuestion4: (state, action) => {
      state.question4 = action.payload.value;
    },
    setQuestion5: (state, action) => {
      state.question5 = action.payload.value;
    },
  },
});

export const {
  setQuestion1,
  setQuestion2,
  setQuestion3,
  setQuestion4,
  setQuestion5,
} = questionSlice.actions;
export default questionSlice.reducer;
