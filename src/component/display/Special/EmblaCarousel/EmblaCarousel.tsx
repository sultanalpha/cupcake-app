"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useAutoplay } from "./EmblaCarouselautoplayv2";
import "./css/base.css";
import "./css/embla.css";
import "./css/sandbox.css";
import { Card } from "@mui/material";

type EmblaCarouselProps = {
  slides: number[];
  options?: EmblaOptionsType;
};

export default function EmblaCarousel(props: EmblaCarouselProps) {
  const { slides, options } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ playOnInit: true, delay: 3000 })]);
  // const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } = useAutoplay(emblaApi);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <Card
                    sx={{
                      width: "250px",
                      height: "100%",
                    }}
                  >
                    <span>{index + 1}</span>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
