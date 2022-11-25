import React from "react";
import { v4 as uuidv4 } from 'uuid';
import "./budget-list-item.css";

const BudgetListItem = ({ data, setActive, setViev }) => {
  const budgetElements = data.map((item, index) => {
    return (
      <div className="budget__item" key={item.id}>
        <div className="budget__item-top">
          <h3 className="budget__item-title">{item.name}</h3>
          <span className="budget__item-value">{item.currentSum}/{item.maxSum}$</span>
        </div>
        <div className="budget__item-middle">
          <input
            className="budget__item-rage form-range"
            type="range"
            min={item.minSum}
            max={item.maxSum}
          />
        </div>
        <div className="budget__item-bottom">
          <button className="btn budget__item-btn btn-primary" onClick={() => setActive(item.id)}>Add Expense</button>
          <button className="btn budget__item-btn btn-primary" onClick={() => setViev(item.id)}>View Expenses</button>
        </div>
      </div>
    );
  });

  return <>{budgetElements}</>;
};

export default BudgetListItem;
