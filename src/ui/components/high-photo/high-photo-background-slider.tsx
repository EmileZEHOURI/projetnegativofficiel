"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface HeroSlideItem {
  src: string;
  alt?: string;
}

interface Props {
  images: HeroSlideItem[];
}

export const HighPhotoBackgroundSlider = ({ images }: Props) => {
  const settings = {
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
  };

  if (!images.length) return null;

  return (
    <div className="absolute inset-0 z-0">
      <Slider {...settings} className="high-photo-slider h-full">
        {images.map((img, index) => (
          <div key={index}>
            <div className="relative h-[90vh] min-h-[600px] w-full">
              <img
                src={img.src}
                alt={img.alt ?? `slide-${index}`}
                className="h-full w-full object-cover select-none"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Force la hauteur full */}
      <style jsx global>{`
        .high-photo-slider,
        .high-photo-slider .slick-list,
        .high-photo-slider .slick-track,
        .high-photo-slider .slick-slide,
        .high-photo-slider .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </div>
  );
};