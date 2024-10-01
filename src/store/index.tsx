import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../domains";

const initialState: ITodo[] = [];

export const todoSlice = createSlice({
  name: "TodoList",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Omit<ITodo, "todoId">>) => {
      const recentId = state[state.length - 1]?.todoId || 0;
      console.log(recentId);
      const newTodo = {
        ...action.payload,
        todoId: (+recentId + 1).toString(),
      };
      const updateState = [...state, newTodo];
      return updateState;
    },
    // Use this to set the isAuthenticated state to true after verifying the tokens

    removeTodo: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const updateState = state.filter((todo: ITodo) => todo.todoId !== id);
      return updateState;
    },
  },
});
// Action creators are generated for each case reducer function
export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
