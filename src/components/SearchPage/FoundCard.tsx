import Image from "next/image";

import { FaHeart as HeartFull } from "react-icons/fa";
import { CiHeart as HeartEmpty } from "react-icons/ci";

import { AnimeData } from "@/util/AnimeDataType";

const FoundCard = ({ item }: { item: AnimeData }) => {
  return (
    <div className="mb-2 flex">
      <a href={`/anime/${item.code}`}>
        <Image
          className="min-w-[160px] rounded-md transition-transform duration-100 ease-in-out hover:scale-105 hover:cursor-pointer hover:opacity-80 active:opacity-40"
          width={160}
          height={90}
          src={`/anilibriaPosters${item.posters.original.url}`}
          alt={item.names.ru}
        />
      </a>

      <div className="ml-4 font-light text-gray-300">
        <div className="flex flex-col">
          <a
            href={`/anime/${item.code}`}
            className="text-xl font-normal tracking-wide text-white underline-offset-2 transition-opacity duration-100 ease-in-out hover:underline hover:opacity-80 active:opacity-40"
          >
            {item.names.ru}
          </a>
          <h4 className="text-lg font-light text-gray-300">{item.names.en}</h4>
        </div>
        <div>{item.type.full_string}</div>
        <div>
          {item.season.year}, {item.genres[0]}
          {/* fix this */}
        </div>
        <div className="mt-1 flex items-center gap-2 text-lg">
          <button className="rounded-xl bg-[#495057] p-2 text-white hover:opacity-80 active:opacity-40">
            <HeartEmpty />
          </button>
          <h4>{item.in_favorites}</h4>
        </div>
      </div>
    </div>
  );
};

export default FoundCard;
