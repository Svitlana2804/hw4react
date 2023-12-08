import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions.js";

const shopDataFromLocalStorage = localStorage.getItem("shopData");

const inizializationShop = JSON.parse(shopDataFromLocalStorage) || [];

const initialState = {
  flowersShopArr: {},
  favorites: [],
  shop: inizializationShop,
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
      if (!state.favorites.some((item) => item && item.artc === payload.artc)) {
        state.favorites = [...state.favorites, payload];
      } else {
        state.favorites = state.favorites.filter(
          (item) => item && item.artc !== payload.artc
        );
      }
      localStorage.setItem("favoriteData", JSON.stringify(state.favorites));
    }
  },

  [actions.actionAddToShop]: (state, { payload }) => {
    state.shop = [...state.shop, payload];
    localStorage.setItem("shopData", JSON.stringify(state.shop, payload));
  },
  [actions.actionRemoveCartProduct]: (state, { payload }) => {
    if (payload !== undefined && payload >= 0 && payload < state.shop.length) {
      // Створіть новий масив без елемента за вказаним індексом
      state.shop = state.shop.filter((item, i) => i !== payload);

      localStorage.setItem("shopData", JSON.stringify(state.shop));
    }
  },
  [actions.actionModal]: (state, { payload }) => {
    state.isModal = payload;
  },
});
