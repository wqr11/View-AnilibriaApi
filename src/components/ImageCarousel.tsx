import Link from "next/link";
import Image from "next/image";

import { FaPlay } from "react-icons/fa";

import AddButton from "./AddButton";

import styles from "@/styles/ImageCarousel.module.css";

import CarouselArrows from "./CarouselArrows";

const content = [
  {
    src: "/hero/solo-leveling-hero-image.jpg",
    code: "ore-dake-level-up-na-ken",
    title: "Поднятие уровня в одиночку",
    description: "Повесть о становлении сильнейшим.",
    type: "ТВ (12 эп.), 24 мин.",
    genres: ["Приключения", "Фэнтези", "Экшен"],
  },
  {
    src: "/hero/demon-slayer-hero-image.jpg",
    code: "kimetsu-no-yaiba",
    title: "Клинок, рассекающий демонов",
    description: `История о парне, что посвятил жизнь учичтожению демонов`,
    type: "ТВ (26 эп.), 25 мин.",
    genres: [
      "Исторический",
      "Приключения",
      "Сверхъестественное",
      "Сёнен",
      "Фэнтези",
      "Экшен",
    ],
  },
  {
    src: "/hero/classroom-of-the-elite-hero-image.jpg",
    code: "youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e",
    title: "Добро пожаловать в класс превосходства",
    description: `Аниме про борьбу учеников престижной школы Кёдо Икусей.`,
    type: "ТВ (12 эп.), 24 мин.",
    genres: ["Комедия", "Романтика", "Школа"],
  },
];

const ImageCarousel = () => {
  const carouselId = "hero-carousel";

  return (
    <div className="relative m-auto mt-2 max-w-[1920px]">
      <div
        id={carouselId}
        className={`${styles.carousel_cards} flex h-fit snap-x snap-mandatory`}
      >
        {content.map((item, idx) => (
          <div
            key={`hero-slide-${idx}`}
            className={`${styles.carousel_card} relative min-w-fit snap-start`}
          >
            <Image
              className="max-h-[600px] min-h-[200px] object-cover brightness-75"
              src={item.src}
              width={1920}
              height={600}
              alt={item.title}
              priority
            />
            <div className="absolute left-0 top-0 size-[100%]">
              <div className="ml-[3%] mt-[3%]">
                <h1
                  className="mb-4 text-5xl text-[1.777rem] font-bold text-white md:text-5xl"
                  style={{ textShadow: "2px 2px 5px black" }}
                >
                  {item.title}
                </h1>
                <h4
                  className="hidden max-w-[60%] text-[.6rem] font-light text-white md:flex md:text-[1rem]"
                  style={{ textShadow: "2px 2px 5px black" }}
                >
                  {item.description}
                </h4>
              </div>
              <div className="opacity-2 ml-[3%] mt-[1rem] flex w-fit gap-4">
                {item.genres.map((item, idx) => (
                  <Link
                    key={idx}
                    className="rounded-xl bg-white p-2 text-xs hover:opacity-80 active:opacity-40 md:text-sm"
                    href={`/search?genres=${item}`}
                  >
                    {item}
                  </Link>
                ))}
              </div>
              <div className="ml-[3%] mt-[2rem] flex gap-8 font-bold">
                <Link
                  href={`/anime/${item.code}`}
                  className="flex items-center gap-1 rounded-xl bg-white p-[1.5rem] text-xl font-medium transition-transform duration-100 ease-in-out hover:scale-110 active:opacity-60"
                >
                  <FaPlay />
                  Смотреть
                </Link>
                <AddButton />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute left-0 top-[calc(50%-15px)] flex min-w-[100%] justify-between text-3xl text-white">
        <CarouselArrows carouselId={carouselId} />
      </div>
    </div>
  );
};

export default ImageCarousel;
