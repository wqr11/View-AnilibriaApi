"use client"; // REMOVE // FOR DEV ONLY !!!

import { useState } from "react";

import styles from "@/styles/SearchPage.module.css";

import Image from "next/image";
import { IoSearchCircle as Search } from "react-icons/io5";

import СhosenSettingCategory from "@/components/СhosenSettingCategory";
import SettingOption from "@/components/SearchPage/SettingOption";

import SortSettings from "@/components/SortSettings";

import FoundCard from "@/components/SearchPage/FoundCard";

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
  const [chosenTypes, setChosenTypes] = useState<Array<string>>([]);
  const [chosenSortVariant, setChosenSortVariant] = useState<Array<string>>([]);
  const [chosenSortDirection, setChosenSortDirection] = useState<Array<string>>(
    [],
  );
  const [itemsPerPage, setItemsPerPage] = useState<string>("20");
  const [page, setPage] = useState<number>(1);

  const [yearInputText, setYearInputText] = useState<string>("");

  const [searchText, setSearchText] = useState<string>("");

  return (
    <div className="m-auto mt-4 flex max-w-[95%] grid-cols-8 flex-col items-center gap-4 md:grid md:items-start">
      <div className="col-span-2 size-fit rounded-xl bg-[#343a40] p-4">
        <h2 className="text-center text-2xl font-semibold text-white underline underline-offset-4 transition-transform duration-100 ease-in-out hover:scale-110">
          Категории
        </h2>
        <СhosenSettingCategory
          chosenCategory={chosenGenres}
          setChosenCategory={setChosenGenres}
        />
        <СhosenSettingCategory
          chosenCategory={chosenYears}
          setChosenCategory={setChosenYears}
        />
        <СhosenSettingCategory
          chosenCategory={chosenTypes}
          setChosenCategory={setChosenTypes}
        />
        <СhosenSettingCategory
          chosenCategory={chosenSortVariant}
          setChosenCategory={setChosenSortVariant}
        />
        <СhosenSettingCategory
          chosenCategory={chosenSortDirection}
          setChosenCategory={setChosenSortDirection}
        />
        <h3 className={styles.category_title}>Жанры</h3>
        <SettingOption
          chosenSetting={chosenGenres}
          setChosenSetting={setChosenGenres}
          settingValues={["Повседневность", "Ужасы", "Сейнен", "Хентай"]}
        />
        <h3 className={styles.category_title}>Тип</h3>
        <SettingOption
          chosenSetting={chosenTypes}
          setChosenSetting={setChosenTypes}
          settingValues={["ТВ", "Фильм", "OVA"]}
        />
        <h3 className={styles.category_title}>Сортировка</h3>

        <SortSettings
          setChosenSetting={setChosenSortVariant}
          settingValues={[
            "По жанрам",
            "По типам",
            "По годам",
            "По популярности",
          ]}
        />

        <h3 className={styles.category_title}>Тип сортировки</h3>

        <SortSettings
          setChosenSetting={setChosenSortDirection}
          settingValues={["Возрастание", "Убывание"]}
        />

        <div className="w-full">
          <h3 className={styles.category_title}>Год выхода</h3>
          <div className="m-auto flex w-full gap-1 text-white">
            <form
              className="ml-4 w-[60%] min-w-[100px]"
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
                    // so we turn this number into a string by concatenating an "" to it
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
        <div className="w-full">
          <h3 className={styles.category_title}>Количество на странице</h3>
          <div className="ml-4 w-[60%] min-w-[100px]">
            <input
              className={`${styles.input_area} w-full rounded-xl bg-[#495057] p-2 text-white outline-none`}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                e.preventDefault();
                setItemsPerPage(
                  (parseInt(e.target.value) + "").replace("NaN", ""),
                  // converts input into string
                  // possibly containing NaN
                  // so we turn this number into a string by concatenating an "" to it
                  // then we replace "NaN" with ""
                );
              }}
              value={itemsPerPage}
              type="text"
            ></input>
          </div>
        </div>
      </div>
      <div className="col-span-6 flex w-full flex-col">
        <form
          className="w-full"
          onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setSearchData(undefined);
            getSearchDataAbort();
            const data = await getSearchDataAction(
              searchText,
              chosenGenres,
              chosenYears,
              chosenTypes,
              chosenSortVariant,
              chosenSortDirection,
              itemsPerPage,
              1, // page
            );
            setSearchData(data);
          }}
        >
          <div className="relative flex w-full items-center">
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
              <FoundCard key={`found-${idx}`} item={item} />
            ))}
            <form
              onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                const newData = await getSearchDataAction(
                  searchText,
                  chosenGenres,
                  chosenYears,
                  chosenTypes,
                  chosenSortVariant,
                  chosenSortDirection,
                  itemsPerPage,
                  page,
                );
                setSearchData({
                  list: searchData.list.concat(newData.list),
                  pagination: newData.pagination,
                });
              }}
            >
              <button
                type="submit"
                onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
                  setPage(page + 1);
                }}
                className="w-full rounded-xl bg-white p-2 text-2xl font-medium transition-opacity duration-100 ease-in-out hover:opacity-80 active:opacity-40"
              >
                Еще
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
