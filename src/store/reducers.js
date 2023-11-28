import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions.js";

const initialState = {
  flowersShopArr: {},
  favorites: [],
  shop: [],
  removeProduct: {},
  isModal: null,
};
// action==={}=>{type,payload}
export default createReducer(initialState, {
  [actions.actionGetProducts]: (state, { payload }) => {
    state.flowersShopArr = payload;
  },
  [actions.actionFavorite]: (state, { payload }) => {
    state.favorites = payload;
  },

  [actions.actionHandleFavorite]: (state, { payload }) => {
    if (payload && payload.artc) {
      if (!state.favorites.some((item) => item.artc === payload.artc)) {
        console.log("YES");
        state.favorites = [...state.favorites, payload];
      } else {
        state.favorites = state.favorites.filter(
          (item) => item.artc !== payload.artc
        );
      }
    }
  },

  [actions.actionAddToShop]: (state, { payload }) => {
    state.shop = payload;
  },
  [actions.actionRemoveProduct]: (state, { payload }) => {
    if ((state.shop = state.shop.filter((item) => item.artc !== payload.artc)))
      state.removeProduct = payload;
  },
  [actions.actionModal]: (state, { payload }) => {
    state.isModal = payload;
  },
});
