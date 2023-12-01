"use client";
import React from "react";
import "./SearchInput.css";

const SearchInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search Card"
      value={value}
      onChange={onChange}
    />
  );
};
export default SearchInput;
