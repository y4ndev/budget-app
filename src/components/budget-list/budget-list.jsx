import React from "react";
import BudgetListItem from "../budget-list-item/budget-list-item";
import "./budget-list.css";


const BudgetList = ({ data, setActive, setView }) => {
  return (
    <div className="budget">
      <div className="budget__inner">
        <BudgetListItem data={data} setActive={setActive}  setViev={setView} />
      </div>
    </div>
  );
};

export default BudgetList;
