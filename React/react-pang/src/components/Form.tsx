import { useForm, FieldValues } from "react-hook-form";

const Form = () => {
  // const { formState } = useForm();
  // 查看错误信息
  // console.log(formState.errors);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
          {...register("name", { required: true, minLength: 3 })}
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">Name is required.</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">Name must be at least 3 characters.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          type="number"
          className="form-control"
          {...register("age", {
            required: true,
            min: 18,
          })}
        />
        {errors.age?.type === "required" && (
          <p className="text-danger">Age is required.</p>
        )}
        {errors.age?.type === "min" && (
          <p className="text-danger">Age must be at least 18.</p>
        )}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
