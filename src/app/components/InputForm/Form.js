import React from "react";

const Form = ({ onSubmit, value, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={value} onChange={onChange} />
    </form>
  );
};

export default Form;
