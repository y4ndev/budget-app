import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BudgetAdd } from "../BudgetAdd";
import { BudgetList } from "../BudgetList";
import { BudgetModal } from "../BudgetModal";
import { ExpenseList } from "../ExpenseList/ExpenseList";
import { ExpenseModal } from "../ExpenseModal";
import { Header } from "../Header";
import "./App.css";

function App() {
  const [modalBudget, setModalBudget] = useState(false);
  const [modalExpense, setModalExpense] = useState(false);
  const [modalViewExpense, setModalViewExpense] = useState(false);
  const [modalId, setModalId] = useState("");
  const [data, setData] = useState([
    { name: "Food", value: 0, maxSum: 100, currentSum: 50, id: uuidv4() },
    { name: "Study", value: 0, maxSum: 500, currentSum: 100, id: uuidv4() },
    { name: "Home", value: 0, maxSum: 300, currentSum: 220, id: uuidv4() },
    { name: "Travel", value: 0, maxSum: 150, currentSum: 70, id: uuidv4() },
  ]);

  const [expense, setExpense] = useState([]);

  const addModalId = (item) => {
    setModalId(item);
    setModalExpense(true);
  };

  const addView = (item) => {
    setModalId(item);
    setModalViewExpense(true);
  };

  const onBudgetDelete = (id) => {
    setData((prevData) => {
      prevData.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="App">
      <Header />
      <BudgetAdd setActive={setModalBudget} />
      <BudgetList data={data} setActive={addModalId} setView={addView} onDelete={onBudgetDelete} />
      <BudgetModal data={data} setData={setData} active={modalBudget} setActive={setModalBudget} />
      <ExpenseModal
        active={modalExpense}
        setActive={setModalExpense}
        setExpense={setExpense}
        setData={setData}
        data={data}
        expense={expense}
        id={modalId}
      />
      <ExpenseList
        active={modalViewExpense}
        setActive={setModalViewExpense}
        data={expense}
        id={modalId}
      />
    </div>
  );
}

export default App;
