//import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice";
import authReducer from "./auth";

const store = configureStore({
  //reducer: counterSlice.reducer,
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

// const initialCounterState = { counter: 0, showCounter: true };

// //관련된 상태끼리 모아놓는 것이 좋다. counter 부분
// const counterSlice = createSlice({
//   name: "counter",
//   initialState: initialCounterState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       //   state.counter = state.counter + action.amount;
//       state.counter = state.counter + action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// const initialAuthState = {
//   isAuthenticated: false,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//       state.isAuthenticated = true;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     },
//   },
// });

//리덕스
// export const INCREMENT = "increment";

// const counterReducer = (state = initialState, action) => {
//   if (action.type === INCREMENT) {
//     // state.counter++;
//     //return state;
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

//const store = createStore(counterReducer);

//const store = createStore(counterSlice.reducer);
