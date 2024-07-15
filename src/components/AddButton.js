"use client";

import { FaPlus } from "react-icons/fa";

const AddButton = () => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
      }}
      className="flex gap-1 rounded-xl border-2 border-solid border-[#495057] bg-[#212529] p-[1.5rem] text-xl font-medium text-white active:opacity-60"
      style={{ alignItems: "center" }}
    >
      <FaPlus />
      Добавить
    </button>
  );
};

export default AddButton;
