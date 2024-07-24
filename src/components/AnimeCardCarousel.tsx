import AnimeCard from "@/components/AnimeCard";
import Arrows from "@/components/Arrows";

import { AnimeData } from "@/util/AnimeDataType";

import styles from "@/styles/AnimeCardCarousel.module.css";

const getAnimeData = async (url: string) => {
  const res = await fetch(`https://api.anilibria.tv/v3/${url}`);
  return await res.json();
};

const AnimeCardCarousel = async ({
  url,
  idKey,
}: {
  url: string;
  idKey: string;
}) => {
  const data: { list: AnimeData[] } = await getAnimeData(url);

  return (
    <div key={idKey} className="relative">
      <div
        id={`${idKey}-anime-card-carousel-scroll`}
        className={`${styles.anime_card_carousel_scroll} flex w-[100%] snap-x snap-mandatory gap-4 overflow-scroll`}
      >
        {data.list.map((item, idx) => (
          <AnimeCard key={`${idKey}-anime-card-${idx}`} data={item} />
        ))}
      </div>
      <Arrows idKey={idKey} />
      <div className={`${styles.shadow} left-0`}></div>
      <div className={`${styles.shadow} right-0`}></div>
    </div>
  );
};

export default AnimeCardCarousel;
