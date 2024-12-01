import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

// Async actions
export const fetchDeals = createAsyncThunk("deals/fetchAll", async () => {
  const response = await api.get("/deals/getAllDeals");
  return response.data;
});

export const createDeal = createAsyncThunk("deals/create", async (dealData) => {
  const response = await api.post("/deals/create", dealData, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  return response.data;
});

export const upvoteDeal = createAsyncThunk("deals/upvote", async (dealId) => {
  const response = await api.post(`/users/upvote/${dealId}`, null, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  return response.data;
});

export const downvoteDeal = createAsyncThunk(
  "deals/downvote",
  async (dealId) => {
    const response = await api.post(`/users/downvote/${dealId}`, null, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return response.data;
  }
);

// Slice
const dealSlice = createSlice({
  name: "deals",
  initialState: {
    deals: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeals.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDeals.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.deals = action.payload;
      })
      .addCase(fetchDeals.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(upvoteDeal.fulfilled, (state, action) => {
        const updatedDeal = action.payload;
        const index = state.deals.findIndex(
          (deal) => deal._id === updatedDeal._id
        );
        if (index !== -1) state.deals[index] = updatedDeal;
      })
      .addCase(downvoteDeal.fulfilled, (state, action) => {
        const updatedDeal = action.payload;
        const index = state.deals.findIndex(
          (deal) => deal._id === updatedDeal._id
        );
        if (index !== -1) state.deals[index] = updatedDeal;
      });
  },
});

export default dealSlice.reducer;
