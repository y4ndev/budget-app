import React from "react";
import { Modal } from "../Modal";
import "./BudgetModal.css";

const BudgetModal = ({ onItemAdd, onBudgetName, onBudgetSum, active, setActive }) => {
  return (
    <Modal active={active} setActive={setActive}>
      <div className="budget-modal">
        <div className="budget-modal__content">
          <h3 className="budget-modal__title">Add new Budget</h3>
          <label className="budget-modal__label"> Name of budget: </label>
          <input className="budget-modal__input form-control" type="text" {...onBudgetName} />

          <label className="budget-modal__label">Max amount: </label>
          <input className="budget-modal__input form-control" type="number" {...onBudgetSum} />

          <button className="btn budget-modal__btn btn-primary" onClick={() => onItemAdd()}>
            Add
          </button>
        </div>
      </div>
    </Modal>
  );
};

export { BudgetModal };
