import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//apicall -createAsyncThunk

export const fetchData = createAsyncThunk("cart/fetchData", async () => {
  //api
  const result = await axios.get("http://localhost:4000/products");
  console.log(result.data);
  return result.data;
});

//single data
export const getSingleData = createAsyncThunk("cart/fetchData", async (id) => {
  //api
  const result = await axios.get(`http://localhost:4000/products/${id}`);
  console.log(result.data);
  return result.data;
});

export const addToCartAsync = createAsyncThunk(
  "cart/addToCartAsync",
  async (item, thunkAPI) => {
    try {
      // Simulating adding item to the cart from the fetched data
      // This will be the item from the 'allProducts' array
      return item;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to add item to the cart");
    }
  }
);

//remove from cart

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (item, thunkAPI) => {
    try {
      // Simulating adding item to the cart from the fetched data
      // This will be the item from the 'allProducts' array
      return item;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to add item to the cart");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    allProducts: [],
    cartData: [],
    error: "",
  },
  extraReducers: (builder) => {
    //pending case
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });

    //fullfil
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.allProducts = action.payload;
      state.loading = false;
      state.error = "";
    });

    //rejected

    builder.addCase(fetchData.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.allProducts = [];
    });

    //to add to cart
    //namukk oru arguemnt verum.that is eath card aano click cheythe aaa data edukaan vendi
    //ath eppolum action akth aayirikum indaka
    //evide state nammale initial state aanu

    builder.addCase(addToCartAsync.fulfilled, (state, action) => {
      state.cartData.push(action.payload); // Add the item to the cart
    });

    //remove from cart
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      const itemIdToRemove = action.payload;
      state.cartData = state.cartData.filter(
        (item) => item.id !== itemIdToRemove
      );
    });
  },
});

export default cartSlice.reducer;
