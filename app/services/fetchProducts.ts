"use client";

import axios from "axios";

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

// get products from fake api
export async function fetchProducts(): Promise<product[] | null> {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (err) {
    console.log("Error fetching Products: ", err);
    return null;
  }
}
