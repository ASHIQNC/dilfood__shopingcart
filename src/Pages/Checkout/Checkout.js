import React from "react";
import "./checkout.css";
import { useSelector } from "react-redux";

const Checkout = () => {
  const Shipping_Estimate = 6;
  const Tax_Estimate = 5;
  const cartData = useSelector((state) => state?.cart.cartData || []);
  let total = 0;

  if (cartData.length > 0) {
    // Calculate the total price by iterating through each item in the cart
    for (const item of cartData) {
      total += parseFloat(item.price);
    }
    console.log(total);
  } else {
    total = 0;
  }
  return (
    <div className="md:container md:mx-auto mt-3">
      <div class="relative mx-auto w-full bg-white">
        <div class="grid min-h-screen grid-cols-10">
          <div class="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
            <div class="mx-auto w-full max-w-lg">
              <h1 class="relative text-2xl font-medium text-red-700 sm:text-3xl">
                Checkout
                <span class="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span>
              </h1>

              <h1 class="relative text-2md font-sm text-red-500 sm:text-3xl">
                Billing Details
              </h1>
              <form action="" class="mt-10 flex flex-col space-y-4">
                <div>
                  <label
                    for="email"
                    class="text-xs font-semibold text-gray-500">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john.capler@fang.com"
                    class="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div class="relative">
                  <label
                    for="card-number"
                    class="text-xs font-semibold text-gray-500">
                    Card number
                  </label>
                  <input
                    type="text"
                    id="card-number"
                    name="card-number"
                    placeholder="1234-5678-XXXX-XXXX"
                    class="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                  <img
                    src="/images/uQUFIfCYVYcLK0qVJF5Yw.png"
                    alt=""
                    class="absolute bottom-3 right-3 max-h-4"
                  />
                </div>
                <div>
                  <p class="text-xs font-semibold text-gray-500">
                    Expiration date
                  </p>
                  <div class="mr-6 flex flex-wrap">
                    <div class="my-1">
                      <label for="month" class="sr-only">
                        Select expiration month
                      </label>
                      <select
                        name="month"
                        id="month"
                        class="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500">
                        <option value="">Month</option>
                        <option value="">Jan</option>
                        <option value="">Feb</option>
                        <option value="">March</option>
                      </select>
                    </div>
                    <div class="my-1 ml-3 mr-6">
                      <label for="year" class="sr-only">
                        Select expiration year
                      </label>
                      <select
                        name="year"
                        id="year"
                        class="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500">
                        <option value="">Year</option>
                        <option value="">2023</option>
                        <option value="">2024</option>
                      </select>
                    </div>
                    <div class="relative my-1">
                      <label for="security-code" class="sr-only">
                        Security code
                      </label>
                      <input
                        type="text"
                        id="security-code"
                        name="security-code"
                        placeholder="Security code"
                        class="block w-36 rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label for="card-name" class="sr-only">
                    Card name
                  </label>
                  <input
                    type="text"
                    id="card-name"
                    name="card-name"
                    placeholder="Name on the card"
                    class="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </form>
              <p class="mt-10 text-center text-sm font-semibold text-gray-500">
                By placing this order you agree to the{" "}
                <a
                  href="#"
                  class="whitespace-nowrap text-teal-400 underline hover:text-teal-600">
                  Terms and Conditions
                </a>
              </p>
              <button
                type="submit"
                class="mt-4 inline-flex w-full items-center justify-center rounded bg-red-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg">
                Place Order
              </button>
            </div>
          </div>

          <div class="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
            <h2 class="sr-only">Order summary</h2>

            <div class="relative">
              <ul class="space-y-5">
                {cartData.length > 0 ? (
                  cartData.map((data) => {
                    return (
                      <li class="flex justify-between">
                        <div class="inline-flex">
                          <img
                            style={{ height: "100px", width: "100px" }}
                            src={data?.image}
                            alt=""
                            class="max-h-16"
                          />
                          <div class="ml-3">
                            <p class="text-base font-semibold text-black">
                              {data?.name}
                            </p>
                            <p class="text-sm font-medium text-black text-opacity-80">
                              {data?.discription?.length >= 40
                                ? data.discription.slice(0, 40) + "..."
                                : data.discription}
                            </p>
                          </div>
                        </div>
                        <p class="text-sm font-semibold text-black mt-4">
                          ${data?.price}
                        </p>
                      </li>
                    );
                  })
                ) : (
                  <h1>No data available</h1>
                )}
              </ul>
              <div class="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
              <div class="space-y-2">
                <p class="flex justify-between text-lg font-bold text-black">
                  <span>Shipping Estimate:</span>
                  <span>
                    {cartData.length > 0
                      ? "$" + Shipping_Estimate
                      : "no data available"}
                  </span>
                </p>

                <p class="flex justify-between text-lg font-bold text-black">
                  <span>Tax Estimate:</span>
                  <span>
                    {cartData.length > 0
                      ? "$" + Tax_Estimate
                      : "no data available"}
                  </span>
                </p>

                <p class="flex justify-between text-lg font-bold text-black">
                  <span>Total price:</span>
                  <span>
                    $
                    {cartData.length > 0
                      ? total + Shipping_Estimate + Tax_Estimate
                      : "no data available"}
                  </span>
                </p>
              </div>
            </div>
            <div class="relative mt-10 text-white">
              <h3 class="mb-5 text-lg font-bold text-black">Support</h3>
              <p class="text-sm font-semibold text-black">
                +01 653 235 211{" "}
                <span class="font-light text-black">(International)</span>
              </p>
              <p class="mt-1 text-sm font-semibold text-black">
                support@nanohair.com{" "}
                <span class="font-light text-black">(Email)</span>
              </p>
              <p class="mt-2 text-xs font-medium text-black">
                Call us now for payment related issues
              </p>
            </div>
            <div class="relative mt-10 flex">
              <p class="flex flex-col">
                <span class="text-sm font-bold text-black">
                  Money Back Guarantee
                </span>
                <span class="text-xs font-medium text-black">
                  within 30 days of purchase
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
