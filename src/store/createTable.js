import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createTable = createSlice({
  name: "table",
  initialState: {
    status: "loading",
    bestSeller: [],
    bag: [],
    fastfood: [],
    drinks: [],
  },
  reducers: {
    updateBag: (state, action) => {
      state.bag = action.payload;
    },
    addProduct: (state, action) => {
      state.bag.push(action.payload);
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
    builder
      .addCase(deleteDrink.fulfilled, (state, action) => {
        state.drinks = state.drinks.filter(
          (drink) => drink.id !== action.payload
        );
      })
      .addCase(deleteDrink.rejected, (state, action) => {
        state.status = "idle";
      });
    builder
      .addCase(deleteFood.fulfilled, (state, action) => {
        state.fastfood = state.fastfood.filter(
          (food) => food.id !== action.payload
        );
      })
      .addCase(deleteFood.rejected, (state, action) => {
        state.status = "idle";
      });
    builder
      .addCase(deleteBest.fulfilled, (state, action) => {
        state.bestSeller = state.bestSeller.filter(
          (best) => best.id !== action.payload
        );
      })
      .addCase(deleteBest.rejected, (state, action) => {
        state.status = "idle";
      });
      builder
      .addCase(editBest.fulfilled, (state, action) => {
        state.bestSeller = state.bestSeller.find(
          (best) => best.id === action.payload
        );
      })
      .addCase(editBest.rejected, (state, action) => {
        state.status = "idle";
      });
      builder
      .addCase(editFood.fulfilled, (state, action) => {
        state.fastfood = state.fastfood.find(
          (food) => food.id === action.payload
        );
      })
      .addCase(editFood.rejected, (state, action) => {
        state.status = "idle";
      });
      builder
      .addCase(editDrink.fulfilled, (state, action) => {
        state.drinks = state.drinks.find(
          (drink) => drink.id === action.payload
        );
      })
      .addCase(editDrink.rejected, (state, action) => {
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

export const fetchDrinks = createAsyncThunk("table/fetchDrinks", async () => {
  const res = await fetch(`http://localhost:3000/drinks`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await res.json();
  return data;
});

export const deleteDrink = createAsyncThunk(
  "table/deleteDrink",
  async (drinkId, { dispatch }) => {
    const res = await fetch(`http://localhost:3000/drinks/${drinkId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const getResponse = await fetch("http://localhost:3000/drinks");
    const newData = await getResponse.json();

    // Cập nhật trạng thái Redux với dữ liệu mới
    dispatch(fetchDrinks(newData));

    return newData;
  }
);

export const editDrink = createAsyncThunk(
  "table/editDrink",
  async (updateDrink,{dispatch}) => {
    const res = await fetch(`http://localhost:3000/drinks${updateDrink.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateDrink),
    });
    const getResponse = await fetch("http://localhost:3000/drinks");
    const newData = await getResponse.json();

    // Cập nhật trạng thái Redux với dữ liệu mới
    dispatch(fetchDrinks(newData));

    return newData;
  }
);

export const deleteFood = createAsyncThunk(
  "table/deleteFood",
  async (foodId, { dispatch }) => {
    const res = await fetch(`http://localhost:3000/fastfood/${foodId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const getResponse = await fetch("http://localhost:3000/fastfood");
    const newData = await getResponse.json();

    // Cập nhật trạng thái Redux với dữ liệu mới
    dispatch(fetchFastfood(newData));

    return newData;
  }
);

export const editFood = createAsyncThunk(
  "table/editFood",
  async (updateFood) => {
    const res = await fetch(`http://localhost:3000/drinks${updateFood.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateFood),
    });
    let data = await res.json();
    return data;
  }
);

export const deleteBest = createAsyncThunk(
  "table/deleteBest",
  async (bestId, { dispatch }) => {
    const res = await fetch(`http://localhost:3000/bestseller/${bestId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const getResponse = await fetch("http://localhost:3000/bestseller");
    const newData = await getResponse.json();

    // Cập nhật trạng thái Redux với dữ liệu mới
    dispatch(fetchBestSeller(newData));

    return newData;
  }
);

export const editBest = createAsyncThunk(
  "table/editBest",
  async (updateBest) => {
    const res = await fetch(`http://localhost:3000/drinks${updateBest.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateBest),
    });
    let data = await res.json();
    return data;
  }
);
