"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProduct } from "./features/productSlice";
import { RootState } from "../store";

function Page() {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.value);

  useEffect(() => {
    dispatch(fetchAllProduct() as any);
  }, []);

  return (
    <div className="flex space-x-8 w-screen justify-center flex-wrap bg-amber-400 p-12">
      {products.map((user, index) => (
        <div
          key={index}
          className="flex flex-col cursor-pointer text-white transition-all 
        duration-500 hover:brightness-75 mb-8 hover:scale-105"
        >
          <img
            src={user.image}
            className="rounded-xl max-w-[80px]"
            alt="image"
          />
          <div className="text-white text-base mt-3 w-20">{user.title}</div>
        </div>
      ))}
    </div>
  );
}

export default Page;
