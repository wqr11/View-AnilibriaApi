"use client";

import { useState } from "react";

import {
  IoIosArrowDropleftCircle as ArrowLeft,
  IoIosArrowDroprightCircle as ArrowRight,
} from "react-icons/io";

import styles from "@/styles/CarouselArrows.module.css";

const CarouselArrows = ({ carouselId }: { carouselId: string }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const maxSlides = 3;

  return (
    <>
      <button
        className={styles.carousel_arrow}
        onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
          e.preventDefault();

          let carousel = document.getElementById(carouselId);

          if (currentSlide === 1) {
            setCurrentSlide(maxSlides);
            carousel.scrollBy(innerWidth * maxSlides, 0);
          } else {
            setCurrentSlide(currentSlide - 1);
            carousel.scrollBy(-innerWidth, 0);
          }
        }}
      >
        <ArrowLeft />
      </button>
      <button
        className={styles.carousel_arrow}
        onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
          e.preventDefault();

          let carousel = document.getElementById(carouselId);

          if (currentSlide === maxSlides) {
            setCurrentSlide(1);
            carousel.scrollBy(-innerWidth * maxSlides, 0);
          } else {
            setCurrentSlide(currentSlide + 1);
            carousel.scrollBy(innerWidth, 0);
          }
        }}
      >
        <ArrowRight />
      </button>
    </>
  );
};

export default CarouselArrows;
