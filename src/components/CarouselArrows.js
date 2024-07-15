"use client";

import { useState } from "react";

import {
  IoIosArrowDropleftCircle as ArrowLeft,
  IoIosArrowDroprightCircle as ArrowRight,
} from "react-icons/io";

import styles from "@/styles/CarouselArrows.module.css";

const CarouselArrows = ({ maxSlides = 3 }) => {
  const [slide, setSlide] = useState(1);
  return (
    <>
      <a
        className={styles.carousel_arrow}
        onClick={() => {
          setSlide(slide === 1 ? maxSlides : slide - 1);
        }}
        href={`#slide-${slide}`}
      >
        <ArrowLeft />
      </a>
      <a
        className={styles.carousel_arrow}
        onClick={() => {
          setSlide(slide === maxSlides ? 1 : slide + 1);
        }}
        href={`#slide-${slide}`}
      >
        <ArrowRight />
      </a>
    </>
  );
};

export default CarouselArrows;
