import React from "react";

import "./budget-add.css";

const BudgetAdd = ({ setActive }) => {
  return (
    <>
      <button className="btn budget-add__btn btn-light" onClick={() => setActive(true)}>
        Add Budget
      </button>
    </>
  );
};

export default BudgetAdd;
