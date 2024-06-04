import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { productReducer } from "./product/productSlice";
import { categoryReducer } from "./category/categorySlice";
import { brandReducer } from "./brand/brandSlice";
import { filterReducer } from "./product/filterSlice";

const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  brand: brandReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({ reducer: persistedReducer });

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
