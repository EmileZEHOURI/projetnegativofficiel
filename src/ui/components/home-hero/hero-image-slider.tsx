"use client";

import { useEffect, useMemo, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface HeroSlideItem {
  imageSrc: string;
  alt?: string;
}

interface Props {
  images: HeroSlideItem[];
  activeIndex: number;
  onChange: (index: number) => void;
}

export const HeroImageSlider = ({
  images,
  activeIndex,
  onChange,
}: Props) => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = useMemo(
    () => ({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 8000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      draggable: true,
      swipe: true,
      swipeToSlide: true,
      touchMove: true,
      beforeChange: (_current: number, next: number) => {
        onChange(next);
      },
    }),
    [onChange]
  );

  useEffect(() => {
    sliderRef.current?.slickGoTo(activeIndex);
  }, [activeIndex]);

  if (!images.length) return null;

  return (
    <div className="absolute inset-0 z-10">
      <Slider ref={sliderRef} {...settings} className="home-hero-slider h-full">
        {images.map((img, index) => (
          <div key={index}>
            <div className="relative h-[90vh] min-h-[600px] w-full">
              <img
                src={img.imageSrc}
                alt={img.alt ?? `hero-slide-${index}`}
                className="h-full w-full object-cover select-none"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </Slider>

      <style jsx global>{`
        .home-hero-slider,
        .home-hero-slider .slick-list,
        .home-hero-slider .slick-track,
        .home-hero-slider .slick-slide,
        .home-hero-slider .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </div>
  );
};