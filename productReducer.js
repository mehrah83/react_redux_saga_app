import {SET_PRODUCT_LIST } from "./constant";

export const productData = (data = [], action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      // set product list logic
      console.log("SET_PRODUCT_LIST condition ", action);
      return [...action.data];
    default:
      return data;
  }
};