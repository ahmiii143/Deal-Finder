import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axiosInstance"; // Assumes a centralized axios instance setup

// Async Thunks
export const fetchRestaurants = createAsyncThunk(
  "restaurant/fetchRestaurants",
  async () => {
    const response = await axios.get("/api/restaurants");
    return response.data;
  }
);

export const addRestaurant = createAsyncThunk(
  "restaurant/addRestaurant",
  async (restaurantData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/restaurants/add", restaurantData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchRestaurantWithMenu = createAsyncThunk(
  "restaurant/fetchRestaurantWithMenu",
  async (restaurantId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/restaurants/${restaurantId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Slice
const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    restaurants: [],
    selectedRestaurant: null, // For restaurant with menu
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.restaurants = action.payload;
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addRestaurant.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addRestaurant.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.restaurants.push(action.payload); // Add new restaurant to state
      })
      .addCase(addRestaurant.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchRestaurantWithMenu.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRestaurantWithMenu.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedRestaurant = action.payload;
      })
      .addCase(fetchRestaurantWithMenu.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

// Export the reducer
export default restaurantSlice.reducer;
