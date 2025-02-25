import React from "react";
import { useRef, useState } from "react";
const Form = () => {
  //   const person = {
  //     name: "",
  //     age: 0,
  //   };
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // if (nameRef.current && ageRef.current) {
    //   person.name = nameRef.current.value;
    //   person.age = parseInt(ageRef.current.value, 10); // 使用parseInt将字符串转换为数字
    console.log(person);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/* <input ref={nameRef} type="text" id="name" className="form-control" /> */}
        <input
          onChange={(e) => {
            setPerson({ ...person, name: e.target.value });
          }}
          type="text"
          value={person.name}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label>Age</label>
        {/* <input ref={ageRef} type="number" id="age" className="form-control" /> */}
        <input
          onChange={(e) => {
            setPerson({ ...person, age: parseInt(e.target.value) });
          }}
          type="number"
          value={person.age}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
