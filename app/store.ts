"use client";

import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./example1/features/usersSlice";
import { productsSlice } from "./example2/features/productSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    products: productsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
