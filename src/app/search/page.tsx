"use client"; // REMOVE // FOR DEV ONLY !!!

import { useState } from "react";

import styles from "@/styles/SearchPage.module.css";

import Image from "next/image";
import { IoSearchCircle as Search } from "react-icons/io5";

import СhosenSettingCategory from "@/components/СhosenSettingCategory";
import Genres from "@/components/SearchPage/Genres";

import { AnimeData } from "@/util/AnimeDataType";
import getSearchDataAction from "../actions/getSearchDataAction";
import { getSearchDataAbort } from "../actions/getSearchDataAction";

import Spinner from "@/components/Spinner";

const SearchPage = () => {
  const [searchData, setSearchData] = useState<{
    list: AnimeData[];
    pagination: object;
  }>();

  const [chosenGenres, setChosenGenres] = useState<Array<string>>([]);
  const [chosenYears, setChosenYears] = useState<Array<string>>([]);

  const [yearInputText, setYearInputText] = useState<string>("");

  const [searchText, setSearchText] = useState<string>("");

  return (
    <div className="m-auto mt-4 flex max-w-[95%] grid-cols-8 flex-col items-center gap-4 md:grid md:items-start">
      <div className="col-span-2 size-fit rounded-xl bg-[#343a40] p-4">
        <h2 className="text-center text-xl font-semibold text-white underline underline-offset-2">
          Категории поиска
        </h2>
        <СhosenSettingCategory
          chosenCategory={chosenGenres}
          setChosenCategory={setChosenGenres}
        />
        <СhosenSettingCategory
          chosenCategory={chosenYears}
          setChosenCategory={setChosenYears}
        />
        <h3 className={styles.category_title}>Жанры</h3>
        <Genres chosenGenres={chosenGenres} setChosenGenres={setChosenGenres} />
        <div className="w-full">
          <h3 className={styles.category_title}>Год выхода</h3>
          <div className="m-auto mt-1 flex w-[60%] min-w-[100px] gap-1 text-white">
            <form
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                chosenYears.includes(yearInputText)
                  ? null
                  : setChosenYears(chosenYears.concat([yearInputText]));
              }}
            >
              <input
                id="category-year-input"
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                  e.preventDefault();
                  setYearInputText(
                    (parseInt(e.target.value) + "").replace("NaN", ""),
                    // converts input into string
                    // possibly containing NaN
                    // so we turn this number into a string by concatenatig an "" to it
                    // then we replace "NaN" with ""
                  );
                }}
                value={yearInputText}
                className={`${styles.input_area} w-full rounded-xl bg-[#495057] p-2 outline-none`}
                type="text"
                placeholder="Год"
              ></input>
            </form>
          </div>
        </div>
      </div>
      <div className="col-span-6 flex flex-col">
        <form
          onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setSearchData(undefined);
            getSearchDataAbort();
            const data = await getSearchDataAction(
              searchText,
              chosenGenres,
              chosenYears,
            );
            setSearchData(data);
          }}
        >
          <div className="relative flex min-w-[90%] items-center md:w-auto">
            <input
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                e.preventDefault();
                setSearchText(e.target.value);
              }}
              value={searchText}
              className="w-full rounded-xl border-2 border-[#868e96] bg-[#495057] p-4 text-white outline-none"
              type="text"
              placeholder="Поиск"
            ></input>
            <button
              type="submit"
              className="absolute right-2 z-20 text-5xl text-white hover:opacity-80 active:opacity-40"
            >
              <Search />
            </button>
          </div>
        </form>
        {searchData === undefined && (
          <div className="mt-4 flex flex-col items-center">
            <h3 className="mb-4 text-3xl text-white">Загрузка</h3>
            <Spinner loading={searchData === undefined} />
          </div>
        )}

        {searchData !== undefined && searchData !== null && (
          <div className="mt-4 w-full">
            {searchData.list.map((item, idx) => (
              <div key={`found-${idx}`} className="mb-2 flex">
                <a href={`/anime/${item.code}`}>
                  <Image
                    className="min-w-[160px] rounded-md transition-transform duration-100 ease-in-out hover:scale-105 hover:cursor-pointer hover:opacity-80 active:opacity-40"
                    width={160}
                    height={90}
                    src={`/anilibriaPosters${item.posters.original.url}`}
                    alt={item.names.ru}
                  />
                </a>

                <div className="flex flex-col">
                  <a
                    href={`/anime/${item.code}`}
                    className="ml-2 text-xl font-normal tracking-wide text-white underline-offset-2 transition-opacity duration-100 ease-in-out hover:underline hover:opacity-80 active:opacity-40"
                  >
                    {item.names.ru}
                  </a>
                  <h4 className="ml-2 text-lg font-light text-gray-300">
                    {item.names.en}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
