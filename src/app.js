import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "./actions/filters";
import getVisableExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill", amount: 34 }));
store.dispatch(addExpense({ description: "Gas bill", createdAt: 1000 }));
store.dispatch(addExpense({ description: "Rent", amount: 109500 }));

const state = store.getState();
const visableExpenses = getVisableExpenses(state.expenses, state.filters);
console.log(visableExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
