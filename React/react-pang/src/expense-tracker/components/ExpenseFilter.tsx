import categories from "../categories";

interface ExpenseFilterProps {
  onSelectCategory: (category: string) => void;
}

function ExpenseFilter({ onSelectCategory }: ExpenseFilterProps) {
  return (
    <select
      className="form-select mb-3"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
export default ExpenseFilter;
