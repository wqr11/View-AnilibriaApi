import Image from "next/image";
import { montserrat } from "@/util/fonts";

import { AnimeData } from "@/util/AnimeDataType";

import { FaPlay as Play } from "react-icons/fa6";

import styles from "@/styles/AnimeCard.module.css";

const AnimeCard = ({
  data,
  width = 240,
  height = 135,
}: {
  data: AnimeData;
  width?: number;
  height?: number;
}) => {
  return (
    <div
      className={`${styles.card_wrapper} relative snap-start overflow-clip rounded-xl`}
      style={{ minWidth: `${width}px`, maxWidth: `${width}px` }}
    >
      <Image
        className={`${styles.poster}`}
        src={`/anilibriaPosters${data.posters.original.url}`}
        width={width}
        height={height}
        alt={data.names.ru}
      />

      <div
        className={`${montserrat.className} absolute bottom-8 left-4 z-20 flex flex-col justify-center text-white`}
      >
        <a
          href={`/anime/${data.code}`}
          title={data.names.ru}
          className="text-xl font-semibold hover:opacity-70 active:opacity-40"
        >
          {data.names.ru.length > 18
            ? `${data.names.ru.slice(0, 15)}..`
            : data.names.ru}
        </a>
        <h4 className="font-normal opacity-80">{`${data.season.year}, ${data.genres[0]}`}</h4>
      </div>
      <a
        href={`/anime/${data.code}`}
        title={data.names.ru}
        className={`${styles.play_button} absolute left-[calc(50%-24px)] top-[calc(50%-24px)] text-5xl text-white`}
      >
        <Play />
      </a>
      <div className={`${styles.card_shadow}`}></div>
    </div>
  );
};

export default AnimeCard;
