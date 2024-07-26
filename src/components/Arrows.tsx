"use client";

import { useState, useEffect, ReactNode } from "react";

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
  const [scroll, setScroll] = useState<HTMLElement>(null);
  const [scrollLeft, setScrollLeft] = useState<number>();
  const [scrollWidth, setScrollWidth] = useState<number>();

  useEffect(() => {
    const tempScroll = document.getElementById(
      `${idKey}-anime-card-carousel-scroll`,
    );
    setScroll(tempScroll);
    setScrollLeft(tempScroll.scrollLeft);
    setScrollWidth(tempScroll.scrollWidth - tempScroll.clientWidth);
  }, []);

  return (
    <div
      key={`${idKey}-arrows`}
      className="flex h-full items-center text-3xl text-white"
    >
      <div
        className="absolute left-0 top-0 h-full"
        style={{
          visibility: scrollLeft === 0 ? "hidden" : "visible",
        }}
      >
        <button
          onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
            e.preventDefault();
            scroll.scrollBy({
              top: 0,
              left: -scrollDistance,
            });
            setScrollLeft(scroll.scrollLeft);
            setScrollWidth(scroll.scrollWidth - scroll.clientWidth);
          }}
          className="relative z-20 h-full opacity-80 hover:opacity-100 active:opacity-40"
        >
          <LeftArrow />
        </button>
        <div
          className="absolute top-0 z-10 h-full"
          style={{ boxShadow: "0 0 5rem 3rem black" }}
        ></div>
      </div>
      <div
        className="absolute right-0 top-0 h-full overflow-y-clip"
        style={{
          visibility: scrollLeft === scrollWidth ? "hidden" : "visible",
        }}
      >
        <button
          onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
            e.preventDefault();
            scroll.scrollBy({
              top: 0,
              left: scrollDistance,
            });
            setScrollLeft(scroll.scrollLeft);
            setScrollWidth(scroll.scrollWidth - scroll.clientWidth);
          }}
          className="relative z-20 h-full opacity-80 hover:opacity-100 active:opacity-40"
        >
          <RightArrow />
        </button>
        <div
          className="absolute top-0 z-10 h-full"
          style={{ boxShadow: "0 0 5rem 3rem black" }}
        ></div>
      </div>
    </div>
  );
};

export default Arrows;
