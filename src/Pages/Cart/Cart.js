import React from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../Redux/CartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartArray = useSelector((state) => state?.cart.cartData);
  console.log(cartArray);
  if (cartArray.length != 0) {
    var total = cartArray
      ?.map((i) => i.price)
      .reduce((m, n) => parseFloat(m + n));
    console.log(total);
  } else {
    var total = 0;
  }

  const handleRemoveData = (data) => {
    dispatch(removeFromCart(data));
  };
  return (
    <div className="md:container md:mx-auto cart__container__Wrapper">
      <h1 class="text-center cart__heading-style">List of Item</h1>
      <div className="list__item__wrapper">
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Product name
                </th>
                <th scope="col" class="px-6 py-3">
                  Price
                </th>
                <th scope="col" class="px-6 py-3">
                  Discription
                </th>
                <th scope="col" class="px-6 py-3">
                  Image
                </th>
                <th scope="col" class="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {cartArray.length > 0 ? (
                cartArray.map((data) => (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {data?.name}
                    </th>
                    <td class="px-6 py-4">{data?.price}</td>
                    <td class="px-6 py-4">
                      {" "}
                      {data?.discription?.length >= 40
                        ? data.discription.slice(0, 40) + "..."
                        : data.discription}
                    </td>
                    <td class="px-6 py-4">
                      <img
                        style={{ height: "100px", width: "100px" }}
                        src={data?.image}
                        alt=""
                      />
                    </td>
                    <td class="px-6 py-4">
                      <i
                        onClick={() => {
                          handleRemoveData(data?.id);
                        }}
                        className="fa-solid fa-trash fa-xl "
                        style={{ cursor: "pointer" }}></i>
                    </td>
                  </tr>
                ))
              ) : (
                <h1 style={{ marginLeft: "20px" }}>No data avalable</h1>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bottom__section__container">
        <div className="bottom-top__section">
          <h1>Subtotal</h1>
          <h1>${total}</h1>
        </div>
        <h1 className="subheading__style">
          Shipping and Taxes Will be calculated at checkout
        </h1>
        <div>
          <Link
            to={{
              pathname: "/checkout",
            }}
            style={{ textDecoration: "none" }}
            className="button__wrapper">
            <button class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded button__style ">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
