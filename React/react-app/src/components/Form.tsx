// Form.tsx
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// 定义表单数据的类型
// interface FormData {
//   name: string;
//   age: number;
//   category: string;
// }
const schema = z.object({
  id: z.any(),
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters." }),
  amount: z.number({ invalid_type_error: "Amount is required." }),
  category: z.string(),
});
type FormData = z.infer<typeof schema>;
const Form = () => {
  const [formData, setFormData] = useState<FormData[]>([]);
  const [newData, setNewData] = useState<FormData[]>([]);
  const [showAllFilter, setShowAllFilter] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    data.id = data.description + parseInt(Math.random().toString().slice(2, 6));
    console.log(data);
    setFormData([...formData, data]);
    console.log(formData);
  };
  const onChangeItems = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    if (e.target.value !== "All Category") {
      setShowAllFilter(false);
      const newData = formData.filter((item) => {
        return item.category === e.target.value;
      });
      setNewData(newData);
    } else {
      setFormData(formData);
    }
  };
  const handleDelete = (item: FormData) => {
    const newData = formData.filter((i) => i.id !== item.id);
    setFormData(newData);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <option value="">Select Category</option>
            <option value="groceries">Groceries</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div className="mb-3">
          <select className="form-select" onChange={onChangeItems}>
            <option value="">All Category</option>
            <option value="groceries">Groceries</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
          </select>
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {(showAllFilter ? formData : newData).map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.description}</td>
                <td>{item.amount}</td>
                <td>{item.category}</td>
                <td>
                  <button
                    className="btn-outline-danger btn"
                    onClick={() => handleDelete(item)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Form;
