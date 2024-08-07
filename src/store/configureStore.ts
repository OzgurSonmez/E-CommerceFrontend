import { deliveryAddressReducer } from "./deliveryAddress/deliveryAddressSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { productReducer } from "./product/productSlice";
import { categoryReducer } from "./category/categorySlice";
import { brandReducer } from "./brand/brandSlice";
import { filterReducer } from "./product/filterSlice";
import { emailReducer } from "./email/emailSlice";
import { customerReducer } from "./customer/customerSlice";
import { basketProductReducer } from "./basketProduct/basketProductSlice";
import { basketReducer } from "./basket/basketSlice";
import { customerOrderReducer } from "./customerOrder/customerOrderSlice";
import { customerOrderDetailReducer } from "./customerOrderDetail/customerOrderDetailSlice";
import { customerProductFavoriteReducer } from "./customerProductFavorite/customerProductFavoriteSlice";

const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  brand: brandReducer,
  filter: filterReducer,
  email: emailReducer,
  customer: customerReducer,
  basketProduct: basketProductReducer,
  basket: basketReducer,
  deliveryAddress: deliveryAddressReducer,
  customerOrder: customerOrderReducer,
  customerOrderDetail: customerOrderDetailReducer,
  customerProductFavorite: customerProductFavoriteReducer,
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
