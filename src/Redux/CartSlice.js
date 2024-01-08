import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("cart/fetchData", async () => {
  const result = await axios.get("http://localhost:4000/products");
  console.log(result.data);
  return result.data;
});

export const getSingleData = createAsyncThunk("cart/fetchData", async (id) => {
  const result = await axios.get(`http://localhost:4000/products/${id}`);
  console.log(result.data);
  return result.data;
});

export const addToCartAsync = createAsyncThunk(
  "cart/addToCartAsync",
  async (item, thunkAPI) => {
    try {
      return item;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to add item to the cart");
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (item, thunkAPI) => {
    try {
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
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.allProducts = action.payload;
      state.loading = false;
      state.error = "";
    });

    builder.addCase(fetchData.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.allProducts = [];
    });

    //add to cart
    builder.addCase(addToCartAsync.fulfilled, (state, action) => {
      state.cartData.push(action.payload);
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
