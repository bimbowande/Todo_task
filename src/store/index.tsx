import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../domains";

const initialState: ITodo = {
  todoId: "1",
  todoName: "Wear shoes",
  todoDescription: "Send Shoes to the cobbler",
};

export const todoSlice = createSlice({
  name: "Todo List",
  initialState,
  reducers: {
    updateTodo: (state, action: PayloadAction<ITodo>) => {
      state = action.payload;
    },
    // Use this to set the isAuthenticated state to true after verifying the tokens

    removeTodo: (state) => {
      const newState = { ...state };
      return newState;
    },
  },
});
// Action creators are generated for each case reducer function
export const { updateTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
