import React from "react";

const Layout = (props) => {
  return (
    <div>
      <nav>
        <div className="logo">
          <p>IncomeExpensesTracker</p>
        </div>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/expensesTracker">Expenses Traker</a>
          </li>
        </ul>
      </nav>
      {props.children}
    </div>
  );
};

export default Layout;
