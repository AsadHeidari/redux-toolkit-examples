"use client";

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/fetchProducts";

type product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export const fetchAllProduct = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    const products = await fetchProducts();

    return products || [];
  }
);

const initialState: { value: product[] } = {
  value: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllProduct.fulfilled,
      (state, action: PayloadAction<product[]>) => {
        state.value = action.payload;
      }
    );
  },
});
