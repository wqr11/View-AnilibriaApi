import { unbounded } from "@/util/fonts";
import { montserrat } from "@/util/fonts";

import { AnimeData } from "@/util/AnimeDataType";

import AnimeCardCarousel from "@/components/AnimeCardCarousel";
import ImageCarousel from "@/components/ImageCarousel";

const getAnimeCardData = async (sections) => {
  const result: { sectionTag: string; data: AnimeData[] }[] = [];

  for (let section of sections) {
    const res = await fetch(`https://api.anilibria.tv/v3/${section.url}`);
    if (!res.ok) {
      throw new Error("FETCH FAILED IN getAnimeCardData in HomePage");
    }
    const data = await res.json();
    result.push({ sectionTag: section.sectionTag, data: data.list });
  }
  return result;
};

const HomePage = async () => {
  const animeCardCarouselUrls = [
    { sectionTag: "Новинки", url: "title/search?year=2024&limit=20" },
    { sectionTag: "Фильмы", url: "title/search?type=MOVIE&limit=20" },
    {
      sectionTag: "Повседневность",
      url: "title/search?genres=Повседневность&limit=20",
    },
    { sectionTag: "Ужасы", url: "title/search?genres=Ужасы&limit=20" },
  ];

  const data = await getAnimeCardData(animeCardCarouselUrls);

  return (
    <div className={`${unbounded.className}`}>
      <ImageCarousel />
      <div className="mt-4 flex w-full flex-col">
        {data.map((dataSlice, idx) => (
          <div key={`carousel-wrapper-${idx}`}>
            <h3
              className={`${montserrat.className} m-4 flex justify-center text-4xl font-semibold text-white`}
            >
              {dataSlice.sectionTag}
            </h3>
            <AnimeCardCarousel
              data={dataSlice.data}
              idKey={`carousel-${idx}`}
            />
          </div>
        ))}
      </div>
      <div className="flex">
        <a
          href="/search"
          className={`${montserrat.className} m-8 flex-grow rounded-xl bg-white p-4 text-center text-xl font-semibold tracking-tight text-black transition-opacity duration-100 ease-in-out hover:opacity-80 active:opacity-40`}
        >
          Показать еще
        </a>
      </div>
    </div>
  );
};

export default HomePage;
