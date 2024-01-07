import React, { useEffect, useState } from "react";
import "./singledetail.css";

import { Link, useParams } from "react-router-dom";
import { addToCartAsync, getSingleData } from "../../Redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";

const SingleProductDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getSingleData(id));
  }, []);

  return (
    <div className="single__page__wrapper">
      {/* single card section */}
      <div className="header__section">
        <h1 className="w-100 mx-auto">Product Detail</h1>
      </div>

      <div className="single__card__content">
        <div className="single__container__left-section">
          <img
            className="single__image__style"
            src={allProducts?.image}
            alt="food"
          />
        </div>
        <div className="single__container__right-section">
          <h2 className="single__heading-style">{allProducts?.name}</h2>
          <p className="single__para-style">{allProducts?.discription}</p>

          <div style={{ display: "flex" }}>
            <h6
              class="line-through"
              style={{ marginTop: "6px", marginRight: "17px" }}>
              {allProducts?.price}
            </h6>
            <h4 style={{ marginTop: "6px", color: "orangered" }}>
              {allProducts?.price}
            </h4>
          </div>

          <p className="single__para-style">Warenty :{allProducts?.warenty}</p>

          <Link to={"/cart"} style={{ textDecoration: "none" }}>
            <button
              onClick={() => {
                dispatch(addToCartAsync(allProducts));
              }}
              className="single-page__button__style__wrapper">
              Add To Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetail;
