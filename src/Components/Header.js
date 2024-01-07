import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  //store akath ulla reducer key aaanu cart
  const cartArrayLength = useSelector((state) => state.cart.cartData);
  return (
    <div>
      <nav class="bg-white-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="flex flex-1 items-center  sm:items-stretch sm:justify-start">
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <div class="flex flex-shrink-0 items-center logo__wrapper">
                  <img
                    className="w-auto logo__style"
                    src="https://i.postimg.cc/Z5jXW7F3/7ce8813b5f2f761b12676436e3618155-removebg-preview.png"
                    alt="Your Company"
                  />

                  <h1 className="mx-2 logo__heading__style">Shoppy</h1>
                </div>
              </Link>
              <div class=" sm:ml-6 sm:block">
                <div class="flex space-x-4 home__nav__Style ">
                  <Link
                    to={"/"}
                    className="link__home-style"
                    style={{ textDecoration: "none" }}>
                    <a
                      class=" rounded-md px-3 py-2 text-md font-medium "
                      aria-current="page">
                      Home
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 cart__icon__wrapper">
              <Link to={"/cart"} style={{ textDecoration: "none" }}>
                <div class=" flex justify-center items-center">
                  <div class="relative py-2">
                    <div class="t-0 absolute left-3">
                      <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                        {cartArrayLength?.length}
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="file: mt-4  w-6">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
