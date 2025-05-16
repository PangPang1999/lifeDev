import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "./categories";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters." }),
  amount: z.number({ invalid_type_error: "Amount is required." }),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required." }),
  }),
});
type FormData = z.infer<typeof schema>;
interface Props {
  onSubmit: (data: FormData) => void;
}
const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const onSubmitHandler = (data: FormData) => {
    onSubmit(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-danger">{errors.description?.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            className="form-control"
            {...register("amount", { valueAsNumber: true })}
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount?.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            id="category"
            className="form-select"
            {...register("category")}
          >
            <option value=""></option>
            {categories.map((categories) => (
              <option key={categories} value={categories}>
                {categories}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category?.message}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
