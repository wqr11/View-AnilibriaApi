import AnimeCard from "@/components/AnimeCard";
import Arrows from "@/components/Arrows";

import { AnimeData } from "@/util/AnimeDataType";

import styles from "@/styles/AnimeCardCarousel.module.css";

export const dynamic = "force-dynamic";

const getAnimeData = async (host: string, url: string) => {
  const res = await fetch(`${host}${url}`);
  if (!res.ok) {
    throw new Error("FETCH ERROR IN getAnimeData FUNCTION");
  }
  return await res.json();
};

const AnimeCardCarousel = async (props: { url: string; idKey: string }) => {
  const data: { list: AnimeData[] } = await getAnimeData(
    "https://api.anilibria.tv/v3/",
    props.url,
  );

  return (
    <div key={props.idKey} className="relative">
      <div
        id={`${props.idKey}-anime-card-carousel-scroll`}
        className={`${styles.anime_card_carousel_scroll} flex w-[100%] snap-x snap-mandatory gap-4 overflow-scroll`}
      >
        {data.list.map((item, idx) => (
          <AnimeCard key={`${props.idKey}-anime-card-${idx}`} data={item} />
        ))}
      </div>
      <Arrows idKey={props.idKey} />
      <div className={`${styles.shadow} left-0`}></div>
      <div className={`${styles.shadow} right-0`}></div>
    </div>
  );
};

export default AnimeCardCarousel;
