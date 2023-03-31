import React from "react";
import "./BudgetAdd.css";

const BudgetAdd = ({ setActive }) => {
  return (
    <>
      <button className="btn budget-add__btn btn-light" onClick={() => setActive(true)}>
        Add Budget
      </button>
    </>
  );
};

export { BudgetAdd };
