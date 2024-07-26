import AnimeCard from "@/components/AnimeCard";
import Arrows from "@/components/Arrows";

import { AnimeData } from "@/util/AnimeDataType";

import styles from "@/styles/AnimeCardCarousel.module.css";

const AnimeCardCarousel = async ({
  data,
  idKey,
}: {
  data: AnimeData[];
  idKey: string;
}) => {
  return (
    <div key={idKey} className="relative mx-4">
      <div
        id={`${idKey}-anime-card-carousel-scroll`}
        className={`${styles.anime_card_carousel_scroll} flex w-[100%] snap-x snap-mandatory gap-4 overflow-scroll`}
      >
        {data.map((item, idx) => (
          <AnimeCard key={`${idKey}-anime-card-${idx}`} data={item} />
        ))}
      </div>
      <Arrows idKey={idKey} />
    </div>
  );
};

export default AnimeCardCarousel;
