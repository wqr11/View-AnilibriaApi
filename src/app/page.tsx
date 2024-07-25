import { unbounded } from "@/util/fonts";
import { montserrat } from "@/util/fonts";

import AnimeCardCarousel from "@/components/AnimeCardCarousel";
import ImageCarousel from "@/components/ImageCarousel";

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

  return (
    <div className={`${unbounded.className}`}>
      <ImageCarousel />
      {/* <div className="mt-4 flex w-full flex-col gap-4">
        {animeCardCarouselUrls.map((section, idx) => (
          <div key={`carousel-wrapper-${idx}`}>
            <h3
              className={`${montserrat.className} m-4 flex justify-center text-4xl font-semibold text-white`}
            >
              {section.sectionTag}
            </h3>
            <AnimeCardCarousel url={section.url} idKey={`carousel-${idx}`} />
          </div>
        ))}
      </div> */}
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
