// src/config.js
const BASE_URL = 'http://10.58.52.159:8000';
export const API = {
  SIGNUP: `${BASE_URL}/users/signup`,
  CHECK_DUPLICATE: `${BASE_URL}/users/checkduplicate`,
  LOGIN: `${BASE_URL}/users/login`,
  LIST: `${BASE_URL}/list`,
  DETAIL: `${BASE_URL}/list/detail`,
  REVIEW: `${BASE_URL}/review`,
  CART: `${BASE_URL}/cart`,
  CHARGE: `${BASE_URL}/payment/topupcredit`,
  PAYMENT: `${BASE_URL}/payment`,
  ORDER: `${BASE_URL}/order/detail?id=1`,

  //   LOGIN: `${BASE_URL}/users/login`,
  //   LOGIN: `${BASE_URL}/users/login`,
  //   LOGIN: `${BASE_URL}/users/login`,
  //   PRODUCTS: `${BASE_URL}/products`,
  //   PRODUCT: `${BASE_URL}/product`,
  //   USER: `${BASE_URL}/user`,
  //   ORDERS: `${BASE_URL}/orders`,
  //   ORDER: `${BASE_URL}/order`,
  //   REVIEWS: `${BASE_URL}/reviews`,
  //   REVIEW_CREATE: `${BASE_URL}/review/create`,
};

// 사용하는 컴포넌트
// import { API } from "config";

// fetch(`${API.MYPAGE}/5`).then(...).then(...);
