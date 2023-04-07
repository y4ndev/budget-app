import React from "react";
import useInput from "../../hooks/useInput";
import { Modal } from "../Modal";
import "./ExpenseModal.css";

const ExpenseModal = ({ id, active, setActive, setExpense, expense, data, setData }) => {
  const [expenseSum, bindExpenseSum, resetExpenseSum] = useInput("");
  const [expenseName, bindExpenseName, resetExpenseName] = useInput("");

  const addExpense = () => {
    if (expenseSum && expenseName !== "") {
      setExpense((prevExpense) => {
        return [...prevExpense, { name: expenseName, price: expenseSum, id: id }];
      });
      setData(
        data.map((item) => {
          if (item.id === id) {
            return { ...item, currentSum: item.currentSum + +expenseSum };
          } else {
            return item;
          }
        })
      );
    }

    setActive(false);
    resetExpenseName();
    resetExpenseSum();
  };

  return (
    <Modal active={active} setActive={setActive}>
      <div className="expense-modal" data-id={id}>
        <div className="expense-modal__content">
          <h3 className="expense-modal__title">Add new expense</h3>
          <label className="expense-modal__label">Name of expense:</label>
          <input
            {...bindExpenseName}
            className="expense-modal__input form-control"
            type="text"
            placeholder="Enter name"
          />
          <label className="expense-modal__label">Amout of expense:</label>
          <input
            className="expense-modal__input form-control"
            {...bindExpenseSum}
            type="number"
            placeholder="Enter value"
          />
          <button className="btn expense-modal__btn btn-primary" onClick={addExpense}>
            Add
          </button>
        </div>
      </div>
    </Modal>
  );
};

export { ExpenseModal };
