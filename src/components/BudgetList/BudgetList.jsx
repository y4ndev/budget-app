import React from "react";
import { BudgetListItem } from "../BudgetListItem";
import "./BudgetList.css";

const BudgetList = ({ data, setActive, setView }) => {
  return (
    <div className="budget">
      <div className="budget__inner">
        <BudgetListItem data={data} setActive={setActive} setView={setView} />
      </div>
    </div>
  );
};

export { BudgetList };
