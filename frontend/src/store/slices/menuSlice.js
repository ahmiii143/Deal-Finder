import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axiosInstance"; // Assumes a centralized axios instance setup

// Async Thunks
export const fetchMenus = createAsyncThunk("menu/fetchMenus", async () => {
  const response = await axios.get("/api/menus");
  return response.data;
});

export const addMenu = createAsyncThunk(
  "menu/addMenu",
  async (menuData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/menus/add", menuData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Slice
const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menus: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenus.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMenus.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.menus = action.payload;
      })
      .addCase(fetchMenus.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addMenu.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addMenu.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.menus.push(action.payload); // Add new menu to state
      })
      .addCase(addMenu.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

// Export the reducer
export default menuSlice.reducer;
