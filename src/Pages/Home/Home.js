import React, { useState, useEffect } from "react";
import "./home.css";
import { fetchData } from "../../Redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { allProducts, loading } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  console.log("product", allProducts);

  const singleData = (id) => {
    navigate(`detail/${id}`);
  };
  return (
    <div>
      <div className="md:container md:mx-auto home__container__Wrapper">
        <div className="card__Wrapper  mx-2">
          {allProducts.length > 0 ? (
            allProducts.map((data) => (
              <div
                key={data.id}
                onClick={() => {
                  singleData(data.id);
                }}
                id="t1"
                class="max-w-sm rounded overflow-hidden shadow-lg single__card__style">
                <img
                  class="w-full"
                  style={{ height: "250px" }}
                  src={data?.image}
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 text-red-700">
                    {data?.name}
                  </div>
                  <p class="text-red-700 text-base">
                    {data?.discription?.length >= 40
                      ? data.discription.slice(0, 40) + "..."
                      : data.discription}
                  </p>
                  <div className="text-red-700">${data?.price}</div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-5 my-5 text-center">
              <i className="fa-solid fa-spinner fa-spin fa-4x p-5 my-5 "></i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
