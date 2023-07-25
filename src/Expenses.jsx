import React from "react";
import { AddTransaction } from "./components/AddTransaction";
import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";
import Layout from "./layout/Layout";

function Expenses() {
  return (
    <Layout>
      <GlobalProvider>
        <div className="main-container">
          <Header />
          <div className="container">
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
          </div>
        </div>
      </GlobalProvider>
    </Layout>
  );
}

export default Expenses;
