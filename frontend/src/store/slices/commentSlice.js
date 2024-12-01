import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

// Fetch comments for a deal
export const fetchComments = createAsyncThunk(
  "comments/fetch",
  async (dealId) => {
    const response = await api.get(`/comments/${dealId}`);
    return response.data;
  }
);

// Add a comment to a deal
export const addComment = createAsyncThunk(
  "comments/add",
  async ({ dealId, content }) => {
    const response = await api.post(`/comments/add/${dealId}`, { content });
    return response.data;
  }
);

const commentSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
      });
  },
});

export default commentSlice.reducer;
