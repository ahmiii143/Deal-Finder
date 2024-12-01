import { configureStore } from "@reduxjs/toolkit";
import dealReducer from "./slices/dealSlice";
import userReducer from "./slices/userSlice";
import commentReducer from "./slices/commentSlice";
import menuReducer from "./slices/menuSlice";
import restaurantReducer from "./slices/restaurantSlice";

const store = configureStore({
  reducer: {
    deals: dealReducer,
    users: userReducer,
    comments: commentReducer,
    menus: menuReducer,
    restaurants: restaurantReducer,
  },
});

export default store;
