"use client";

import { useState } from "react";

import {
  IoIosArrowBack as LeftArrow,
  IoIosArrowForward as RightArrow,
} from "react-icons/io";

const Arrows = ({
  scrollDistance = 272,
  idKey,
}: {
  scrollDistance?: number;
  idKey: string;
}) => {
  return (
    <div key={`${idKey}-arrows`} className="text-3xl text-white">
      <button
        onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
          e.preventDefault();
          document
            .getElementById(`${idKey}-anime-card-carousel-scroll`)
            .scrollBy({
              top: 0,
              left: -scrollDistance,
              behavior: "smooth",
            });
        }}
        className={`absolute left-0 top-[calc(50%-15px)] z-20 opacity-80 hover:opacity-100 active:opacity-40`}
      >
        <LeftArrow />
      </button>
      <button
        onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
          e.preventDefault();
          document
            .getElementById(`${idKey}-anime-card-carousel-scroll`)
            .scrollBy({
              top: 0,
              left: scrollDistance,
              behavior: "smooth",
            });
        }}
        className={`absolute right-0 top-[calc(50%-15px)] z-20 opacity-80 hover:opacity-100 active:opacity-40`}
      >
        <RightArrow />
      </button>
    </div>
  );
};

export default Arrows;
