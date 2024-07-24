import axios from "axios";

import { unstable_cache } from "next/cache";

import Image from "next/image";

import { AnimeData } from "@/util/AnimeDataType";

import Arrows from "@/components/Arrows";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";

import styles from "@/styles/AnimePage.module.css";

const getAnimePageData = unstable_cache(async (code: string) => {
  const res = await axios.get(
    `http://localhost:3000/anilibriaApi/title?code=${code}`,
  );
  return res.data;
});

const getAnimeFranchiseData = unstable_cache(async (data) => {
  const res = [];

  if (data.franchises.length > 0) {
    for (const item of data.franchises[0].releases) {
      const unit = await axios.get(
        `http://localhost:3000/anilibriaApi/title?code=${item.code}`,
      );

      res.push(unit.data);
    }
  }
  return res;
});

const AnimePage = async ({ params }) => {
  const data: AnimeData = await getAnimePageData(params.code);
  const franchiseData: AnimeData[] = await getAnimeFranchiseData(data);

  return (
    <div className={styles.content}>
      <div className={styles.page_wrapper}>
        <div className={styles.poster_div}>
          <Image
            className={styles.poster}
            src={`/anilibriaPosters${data.posters.original.url}`}
            alt={data.names["ru"]}
            width={700}
            height={1000}
            priority
          />
        </div>
        <div className={styles.text_wrapper}>
          <div className={styles.title}>
            <h4 className={styles.main_title}>{data.names["ru"]}</h4>
            <p className={styles.sub_title}>{data.names["en"]}</p>
          </div>
          <div className={styles.data_desc}>
            <div className={styles.desc_head}>Тип</div>
            <a
              href={`/search?type=${data.type.string}`}
              className={styles.search_link}
            >
              {data.type.full_string}
            </a>
            <div className={styles.desc_head}>Эпизоды</div>
            <div>{data.player.episodes.string}</div>
            <div className={styles.desc_head}>Статус</div>
            <div>{data.status.string}</div>
            <div className={styles.desc_head}>Жанр</div>
            <a
              href={`/search?genres=${data.genres}`}
              className={styles.search_link}
            >
              {data.genres.join(", ")}
            </a>
            <div className={styles.desc_head}>Сезон</div>
            <a
              href={`/search?year=${data.season.year}`}
              className={styles.search_link}
            >
              {data.season.string
                ? data.season.string.toUpperCase().slice(0, 1) +
                  data.season.string.slice(1) +
                  ", " +
                  data.season.year
                : data.season.year}
            </a>
          </div>
          <div className={styles.anime_desc}>
            <p>{data.description}</p>
          </div>
          {franchiseData.length > 0 && (
            <>
              <div className="size-fit">
                <h3 className="text-2xl font-medium">Связанное</h3>
              </div>
              <div className="relative">
                <div
                  id={`franchise-anime-card-carousel-scroll`}
                  className={`${styles.carousel} flex max-w-[100%] snap-x snap-mandatory gap-4 overflow-scroll scroll-smooth`}
                >
                  {franchiseData.map((item, idx) => (
                    <a
                      href={`/anime/${item.code}`}
                      key={idx}
                      className="relative max-w-[140px] snap-start rounded-md transition-opacity duration-100 hover:opacity-80 active:opacity-40"
                    >
                      <Image
                        className="min-w-[140px] rounded-md"
                        src={`/anilibriaPosters${item.posters.original.url}`}
                        width={140}
                        height={200}
                        alt={item.names["ru"]}
                      />

                      <div className="m-1 font-medium">{item.names["ru"]}</div>
                    </a>
                  ))}
                </div>
                {franchiseData.length > 3 && (
                  <Arrows idKey="franchise" scrollDistance={156} />
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <div className={styles.videoplayer_wrapper}>
        <VideoPlayer data={data} />
      </div>
    </div>
  );
};

export default AnimePage;
