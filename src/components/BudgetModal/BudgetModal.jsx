import React from "react";
import { Modal } from "../Modal";
import useInput from "../../hooks/useInput";
import { v4 as uuidv4 } from "uuid";
import "./BudgetModal.css";

const BudgetModal = ({ active, setActive, data, setData }) => {
  const [budgetName, bindBudgetName, resetBudgetName] = useInput("");
  const [budgetSum, bindBudgetSum, resetBudgetSum] = useInput("");

  const addBudget = () => {
    const newItem = {
      name: budgetName,
      value: 0,
      maxSum: +budgetSum,
      currentSum: 0,
      expense: [],
      id: uuidv4(),
    };

    if (budgetName && budgetSum !== "") {
      setData([...data, newItem]);
      setActive(false);
      resetBudgetName();
      resetBudgetSum();
    } else {
      alert("please, fill in the fields to add");
    }
  };

  return (
    <Modal active={active} setActive={setActive}>
      <div className="budget-modal">
        <div className="budget-modal__content">
          <h3 className="budget-modal__title">Add new Budget</h3>
          <label className="budget-modal__label"> Name of budget: </label>
          <input className="budget-modal__input form-control" type="text" {...bindBudgetName} />

          <label className="budget-modal__label">Max amount: </label>
          <input className="budget-modal__input form-control" type="number" {...bindBudgetSum} />

          <button className="btn budget-modal__btn btn-primary" onClick={addBudget}>
            Add
          </button>
        </div>
      </div>
    </Modal>
  );
};

export { BudgetModal };
