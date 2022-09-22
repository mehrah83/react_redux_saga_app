import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, PRODUCT_SEARCH, SET_PRODUCT_LIST } from "./constant";

function* getProducts() {
  let data = yield fetch(`http://localhost:3000/product`);
  data = yield data.json();
  //console.log("action called", data);
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* searchProducts(data) {
  let result = yield fetch(`http://localhost:3000/product?q=${data.query}`);
  result = yield result.json();
  yield put({ type: SET_PRODUCT_LIST, data:result});
}

function* productSaga() {
  // generator function
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(PRODUCT_SEARCH, searchProducts);
}

export default productSaga;
