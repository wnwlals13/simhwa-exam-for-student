import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/**
 * 2초 지연을 시키는 함수입니다 (비동기 작업).
 */
import { waitTwoSeconds } from "../../utils";

export const __addToDo = createAsyncThunk(
  "__addToDo",
  async (payload, thunkAPI) => {
    const res = await waitTwoSeconds();
    return res;
  }
);

export const __deleteTodo = createAsyncThunk(
  "__deleteToDo",
  async (payload, thunkAPI) => {
    const res = await waitTwoSeconds();
    return res;
  }
);

const initialState = {
  list: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((list) => list.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(__addToDo.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(__addToDo.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = "Complete";
    });
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
