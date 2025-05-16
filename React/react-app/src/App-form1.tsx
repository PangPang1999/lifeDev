import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
function App() {
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, description: "aaa", amount: 111, category: "Groceries" },
    { id: 2, description: "bbb", amount: 111, category: "Groceries" },
    { id: 3, description: "ccc", amount: 111, category: "Groceries" },
    { id: 4, description: "ddd", amount: 111, category: "Groceries" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  const handleAddExpense = (data: Expense) => {
    setExpenses([...expenses, { ...data, id: expenses.length + 1 }]);
  };
  return (
    <div>
      <ExpenseForm
        onSubmit={(expense) =>
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      />
      <ExpenseFilter
        onSelectCategory={(category) => {
          setSelectedCategory(category);
          console.log(category);
        }}
      />
      <ExpenseList onDelete={handleDelete} expenses={visibleExpenses} />
    </div>
  );
}
export default App;
