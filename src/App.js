import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Checkout from "./Pages/Checkout/Checkout";

// lazyloading
const LazyHome = React.lazy(() => import("./Pages/Home/Home"));
const LazyCart = React.lazy(() => import("./Pages/Cart/Cart"));
const LazySingleDetail = React.lazy(() =>
  import("./Pages/SingleProduct/SingleProductDetail")
);
const LazyCheckout = React.lazy(() => import("./Pages/Checkout/Checkout"));
function App() {
  return (
    <div>
      <Header></Header>
      <Suspense fallback={"loading"}>
        <Routes>
          <Route path="/" element={<LazyHome></LazyHome>}></Route>
          <Route path="cart" element={<LazyCart></LazyCart>}></Route>
          <Route
            path="detail/:id"
            element={<LazySingleDetail></LazySingleDetail>}></Route>
          <Route path="checkout" element={<Checkout></Checkout>}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
