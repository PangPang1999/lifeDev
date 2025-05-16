import React from "react";
interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface Props {
  onDelete: (id: number) => void;
  expenses: Expense[];
}
const ExpenseList = ({ onDelete, expenses }: Props) => {
  if (expenses.length === 0) return null;
  return (
    <div>
      <table className="table table-bordered ">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.description}</td>
                <td>{item.amount}</td>
                <td>{item.category}</td>
                <td>
                  <button
                    className="btn-outline-danger btn"
                    onClick={() => onDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              $
              {expenses
                .reduce((acc, expense) => acc + expense.amount, 0)
                .toFixed(2)}
            </td>
            <td colSpan={2}></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
