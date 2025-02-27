import React from "react";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters." }),
  amount: z.number({ invalid_type_error: "Amount field is required" }),
  category: z.string(),
});
interface Props {
  formData1: Array<{ id: number; value: string; label: string }>;
  formData2: Array<{ id: number; value: string; label: string }>;
}

// 自动推导表单数据类型
type FormData = z.infer<typeof schema>;
const Form = ({ formData1, formData2 }: Props) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  // 用于存储表单提交的数据
  const [submittedData, setSubmittedData] = useState<FormData[]>([]);
  const [filterData, setFilterData] = useState<FormData[]>([]);

  const fData: any[] = [];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  //选择框的值发生变化时触发
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };
  //过滤数据
  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
    submittedData.map((arr, index) => {
      if (arr.category === event.target.value) {
        fData.push(arr);
      }
      setFilterData(fData);
    });
  };

  //删除按钮的点击事件
  const handleDelete = (index: number) => {
    setSubmittedData((prev) => {
      prev.splice(index, 1);
      return [...prev];
    });
    // setSubmittedData((prev) => prev.filter((_, i) => i !== index));
  };
  //表单提交事件
  const onSubmit = (data: FormData) => {
    console.log(data, errors);
    // 将提交的数据追加到状态中
    setSubmittedData((prev) => [...prev, data]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            id="description"
            className="form-control"
            type="text"
            {...register("description")}
          />

          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            id="amount"
            {...register("amount", { valueAsNumber: true })}
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            id="category"
            className="form-control"
            {...register("category")}
            value={selectedValue}
            onChange={handleChange}
          >
            {formData1.map((item) => (
              <option key={item.id} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="mb-3">
        <label>Category</label>
        <select value={selectedCategory} onChange={handleFilter}>
          {formData2.map((item) => (
            <option key={item.id} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      {submittedData.length > 0 && filterData.length <= 0 && (
        <table className="table mt-4 table-bordered ">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((item, index) => (
              <tr key={index}>
                <td>{item.description}</td>
                <td>${item.amount.toFixed(2)}</td>
                <td>{item.category}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={handleDelete.bind(null, index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {filterData.length > 0 && (
        <table className="table mt-4 table-bordered ">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {filterData.map((item, index) => (
              <tr key={index}>
                <td>{item.description}</td>
                <td>${item.amount.toFixed(2)}</td>
                <td>{item.category}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={handleDelete.bind(null, index)}
                  >
                    Delete333
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Form;
