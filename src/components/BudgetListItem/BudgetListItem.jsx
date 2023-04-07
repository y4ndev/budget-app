import React from "react";
import deleteImg from "../../assets/delete.png";
import "./BudgetListItem.css";

const BudgetListItem = ({ id, currentSum, maxSum, name, setActive, setView, onDelete }) => {
  return (
    <>
      <div className="budget__item" key={id}>
        <div className="budget__item-img" onClick={() => onDelete(id)}>
          <img src={deleteImg} alt="" />
        </div>
        <div className="budget__item-top">
          <h3 className="budget__item-title">{name}</h3>
          <span className="budget__item-value">
            {currentSum}/{maxSum}$
          </span>
        </div>
        <div className="budget__item-middle">
          <input
            className="budget__item-rage form-range"
            type="range"
            min="0"
            defaultValue={currentSum}
            max={maxSum}
          />
        </div>
        <div className="budget__item-bottom">
          <button className="btn budget__item-btn btn-primary" onClick={() => setActive(id)}>
            Add Expense
          </button>
          <button className="btn budget__item-btn btn-primary" onClick={() => setView(id)}>
            View Expenses
          </button>
        </div>
      </div>
    </>
  );
};

export { BudgetListItem };
