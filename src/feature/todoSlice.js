import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import todoservice from "./todoservice";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    tododata: [],
    edit: { data: {}, isedit: false },
    isLoading: false,
    isSucsess: false,
    isError: false,
    message: "",
    delete_id: "",
  },
  reducers: {
    remove: (state, action) => {
      return {
        ...state,
        tododata: state.tododata.filter((item) => item._id !== action.payload),
      };
    },

    editTodo: (state, action) => {
      return {
        ...state,
        edit: { data: action.payload, isedit: true },
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllTodos.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllTodos.fulfilled, (state, action) => {
        state.tododata = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllTodos.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSucsess = false;
        state.tododata = null;
      })

      .addCase(PostTodos.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(PostTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSucsess = true;
        state.tododata = [action.payload, ...state.tododata];
      })
      .addCase(PostTodos.rejected, (state, action) => {
        state.isError = true;
        state.isSucsess = false;
        state.isLoading = false;
        state.tododata = null;
      })
      .addCase(DelTodo.pending, (state, action) => {
        state.isError = false;
        state.isSucsess = false;
        state.isLoading = true;
      })
      .addCase(DelTodo.fulfilled, (state, action) => {
        state.isError = false;
        state.isSucsess = true;
        state.isLoading = false;
        state.message = action.payload.msg;
        state.delete_id = action.meta.arg;
        // console.log(action.meta.arg);
      })
      .addCase(DelTodo.rejected, (state, action) => {
        state.isError = true;
        state.isSucsess = false;
        state.isLoading = false;

        // console.log(action.meta.arg);
      })
      .addCase(todoUpdate.fulfilled, (state, action) => {
        state.tododata = state.tododata.map((item) =>
          action.payload._id === item._id ? { ...action.payload } : item
        );
      });
  },
});

export default todoSlice.reducer;
export const { remove, editTodo } = todoSlice.actions;

export const getAllTodos = createAsyncThunk("GET/TODOS", async () => {
  try {
    return await todoservice.getTodos();
  } catch (error) {
    console.log(error);
  }
});

export const PostTodos = createAsyncThunk("POST/TODOS", async (todo) => {
  try {
    return await todoservice.postTodos(todo);
  } catch (error) {
    console.log(error);
  }
});

export const DelTodo = createAsyncThunk("DELETE/TODO", async (id) => {
  try {
    return await todoservice.delTodo(id);
  } catch (error) {
    console.log(error);
  }
});

export const todoUpdate = createAsyncThunk("UPDATE/TODO", async (id) => {
  try {
    return await todoservice.updateTodo(id);
  } catch (error) {
    console.log(error);
  }
});
