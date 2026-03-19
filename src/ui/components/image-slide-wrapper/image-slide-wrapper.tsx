"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageItem {
  src: string;
  alt?: string;
}

interface Props {
  images: ImageItem[];
  className?: string;
  imageClassName?: string;
}

export default function ImageSlideWrapper({
  images,
  className = "",
  imageClassName = "",
}: Props) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "100px",
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { centerPadding: "80px" },
      },
      {
        breakpoint: 640,
        settings: { centerPadding: "24px" },
      },
    ],
  };

  return (
    <div className={`slider-wrapper mx-auto w-full max-w-5xl ${className}`}>
      <Slider className="slider" {...settings}>
        {images.map((img, i) => (
          <div key={i} className="px-1">
            <div className="slide-image overflow-hidden rounded-2xl">
              <img
                src={img.src}
                alt={img.alt ?? `slide-${i}`}
                className={` h-[420px] w-full object-cover ${imageClassName}`}
              />
            </div>
          </div>
        ))}
      </Slider>

      <style jsx global>{`
        .slider .slick-list {
          overflow: visible;
        }
        .slider .slick-slide {
          opacity: 0.9;
          transform: scale(0.96);
          transition: 100ms ease;
        }
        .slider .slick-center {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
    </div>
  );
}