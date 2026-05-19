"use client";

import { Carousel } from "@mantine/carousel";
import Image from "next/image";

interface Props {
  images: string[];
}

export default function PhotoCarousel({ images }: Props) {
  return (
    <div>
      <Carousel
        emblaOptions={{ loop: true, align: "center" }}
        withIndicators
        withControls={false}
        slideGap="sm"
        slideSize={{ xs: "25%", base: "50%" }}
      >
        {images.map((src) => (
          <Carousel.Slide key={src}>
            <img
              src={src}
              alt={src}
              style={{ height: 500, width: "auto", objectFit: "cover" }}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}
