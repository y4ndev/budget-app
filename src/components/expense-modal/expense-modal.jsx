import React from "react";
import "./expense-modal.css";

const ExpenseModal = ({ onExpenseSum, onExpenseName, onItemAdd, id }) => {
  return (
    <div className="expense-modal" data-id={id}>
      <div className="expense-modal__content">
        <h3 className="expense-modal__title">Add new expense</h3>
        <label className="expense-modal__label">Name of expense:</label>
        <input
          {...onExpenseName}
          className="expense-modal__input form-control"
          type="text"
          placeholder="Enter name"
        />
        <label className="expense-modal__label">Amout of expense:</label>
        <input
          className="expense-modal__input form-control"
          {...onExpenseSum}
          type="number"
          placeholder="Enter value"
        />
        <button className="btn expense-modal__btn btn-primary" onClick={() => onItemAdd(id)}>
          Add
        </button>
      </div>
    </div>
  );
};

export default ExpenseModal;
