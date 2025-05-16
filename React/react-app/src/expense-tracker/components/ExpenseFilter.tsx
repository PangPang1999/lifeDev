import React from "react";
import categories from "./categories";
interface Props {
  onSelectCategory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div>
      <select
        className="form-select"
        onChange={(e) => onSelectCategory(e.target.value)}
      >
        <option value="">All Category</option>
        {categories.map((categories) => (
          <option key={categories} value={categories}>
            {categories}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
