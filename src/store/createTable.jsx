import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createTable = createSlice({
  name: "table",
  initialState: { status: "loading", bestSeller: [], bag: [] ,fastfood:[],drinks:[]},
  reducers: {
    updateBag: (state, action) => {
      state.bag = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBestSeller.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchBestSeller.fulfilled, (state, action) => {
        state.bestSeller = action.payload;
        state.status = "idle";
      })
      .addCase(fetchFastfood.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchFastfood.fulfilled, (state, action) => {
        state.fastfood = action.payload;
        state.status = "idle";
      })
      .addCase(fetchDrinks.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchDrinks.fulfilled, (state, action) => {
        state.drinks = action.payload;
        state.status = "idle";
      });
  },
});

export const fetchBestSeller = createAsyncThunk(
  "table/fetchBestSeller",
  async () => {
    const res = await fetch(`http://localhost:3000/bestseller`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    return data;
  }
);

export const fetchFastfood = createAsyncThunk(
  "table/fetchFastfood",
  async () => {
    const res = await fetch(`http://localhost:3000/fastfood`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    return data;
  }
);

export const fetchDrinks = createAsyncThunk(
  "table/fetchDrinks",
  async () => {
    const res = await fetch(`http://localhost:3000/drinks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    return data;
  }
);
