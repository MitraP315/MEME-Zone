import { configureStore, combineReducers } from "@reduxjs/toolkit";
import User from "./User.js";

const reducer = combineReducers({
  user: User,
});

export const store = configureStore({
  reducer: reducer,
});
