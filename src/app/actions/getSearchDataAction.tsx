"use server";

import axios from "axios";

const controller = new AbortController();
const signal = controller.signal;

export const getSearchDataAbort = () => {
  controller.abort;
  console.log("CONTROLLER ABORTED");
};

export default async function getSearchDataAction(
  searchText,
  chosenGenres,
  chosenYears,
  chosenTypes,
  chosenSortVariant,
  chosenSortDirection,
  itemsPerPage,
  page,
) {
  const searchTextOption = searchText.length > 0 ? `&search=${searchText}` : "";

  const chosenGenresOption =
    chosenGenres.length > 0 ? `&genres=${chosenGenres.join(",")}` : "";

  const chosenYearsOption =
    chosenYears.length > 0 ? `&year=${chosenYears.join(",")}` : "";

  const typesTranscribeDict = {
    MOVIE: 0,
    Фильм: 0,
    TV: 1,
    ТВ: 1,
    OVA: 2,
    ONA: 3,
    SPECIAL: 4,
    Спешл: 4,
  };

  const chosenTypesOption =
    chosenTypes.length > 0
      ? `&type=${chosenTypes.map((type) => typesTranscribeDict[type]).join(",")}`
      : "";

  const sortTranscribeDict = {
    "По жанрам": "genres[0]",
    "По типам": "type.code",
    "По годам": "season.year",
    "По популярности": "in_favorites",
    Возрастание: "0",
    Убывание: "1",
  };

  const chosenSortVariantOption =
    chosenSortVariant.length > 0
      ? `&order_by=${sortTranscribeDict[chosenSortVariant[0]]}`
      : "";

  const chosenSortDirectionOption =
    chosenSortDirection.length > 0
      ? `&sort_direction=${sortTranscribeDict[chosenSortDirection[0]]}`
      : "";

  const itemsPerPageOption = `&items_per_page=${itemsPerPage}`;
  const pageOption = `&page=${page}`;

  const res = await fetch(
    `https://api.anilibria.tv/v3/title/search?${searchTextOption}${chosenGenresOption}${chosenYearsOption}${chosenTypesOption}${chosenSortVariantOption}${chosenSortDirectionOption}${itemsPerPageOption}${pageOption}`,
    { signal },
  );

  if (!res.ok) {
    throw new Error(
      "getSearchDataAction error! /app/actions/getSearchDataAction.tsx",
    );
  }

  return await res.json();
}
