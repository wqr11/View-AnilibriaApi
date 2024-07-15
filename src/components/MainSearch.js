"use client";

import { useState } from "react";

import { FaMagnifyingGlass as FaSearch } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

import styles from "@/styles/MainSearch.module.css";

const MainSearch = () => {
  const [opened, setOpened] = useState(false);
  const [searchText, setSearchText] = useState("");
  return (
    <div className="flex justify-center" style={{ alignItems: "center" }}>
      <div
        className="relative m-auto flex min-h-[72px] w-[60%] justify-center"
        style={{ alignItems: "center" }}
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            setOpened(!opened);
          }}
          className={`${styles.search_button} ${opened ? styles.opened : ""} rounded-full bg-slate-700 text-white`}
        >
          <FaSearch />
        </button>
        <input
          className={`${styles.search_input} ${opened ? styles.opened : ""} rounded-full bg-slate-700 pl-[72px] text-white outline-none`}
          type="text"
          onChange={(e) => {
            e.preventDefault();
            setSearchText(e.target.value);
          }}
          value={searchText}
          placeholder="Поиск"
        ></input>
        <button
          className={`${styles.cancel_button} transition-opacity duration-100 ease-in-out`}
          onClick={(e) => {
            e.preventDefault();
            setSearchText("");
          }}
          style={{ opacity: opened && searchText ? "1" : "0" }}
        >
          <MdCancel />
        </button>
      </div>
    </div>
  );
};

export default MainSearch;
