import { FormEvent, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

const Form = () => {
  // 查看有哪些方法
  // const form = useForm();
  // console.log(form);

  // 查看 register 注册之后的属性
  // const { register } = useForm();
  // console.log(register("name"));

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="form-control"
          {...register("name")}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          type="number"
          className="form-control"
          {...register("age")}
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
