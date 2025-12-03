import { configureStore } from "@reduxjs/toolkit";

import noteReducer from "./reducers/noteReducer";
import filterReducer from "./reducers/filterReducer";

// Configure the Redux store
const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer,
  },
});

// Log the initial state
console.log(store.getState());

export default store;
