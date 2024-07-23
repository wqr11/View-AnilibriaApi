"use server";

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
) {
  const searchTextOption = searchText.length > 0 ? `&search=${searchText}` : "";

  const chosenGenresOption =
    chosenGenres.length > 0 ? `&genres=${chosenGenres.join(",")}` : "";

  const chosenYearsOption =
    chosenYears.length > 0 ? `&year=${chosenYears.join(",")}` : "";

  const res = await fetch(
    `https://api.anilibria.tv/v3/title/search?${searchTextOption}${chosenGenresOption}${chosenYearsOption}`,
    { signal },
  );

  if (!res.ok) {
    throw new Error(
      "getSearchDataAction error! /app/actions/getSearchDataAction.tsx",
    );
  }

  return await res.json();
}
