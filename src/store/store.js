import { configureStore } from "@reduxjs/toolkit";
import { createTable } from "./createTable";
const store = configureStore({
  reducer: {
    listTable:createTable.reducer,
  },
});

export default store;