import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";

const reducer = combineReducers({
  allProducts: productsReducer,
  products: selectedProductsReducer,
});
export default reducer;
