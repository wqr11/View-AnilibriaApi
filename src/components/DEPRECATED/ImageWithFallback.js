"use client";

import { useState } from "react";

import Image from "next/image";

const ImageWithFallback = ({ src, fallbackSrc, alt, ...options }) => {
  const [error, setError] = useState(false);

  return (
    <Image
      onError={() => {
        setError(true);
      }}
      src={!error ? src : fallbackSrc}
      alt={alt}
      {...options}
    ></Image>
  );
};

export default ImageWithFallback;
