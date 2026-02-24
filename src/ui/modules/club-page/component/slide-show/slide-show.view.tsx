import Image from "next/image";

const photos = [
  { src: "/assets/img-negativ/img/photo-mosaic-1.jpg", big: false },
  { src: "/assets/img-negativ/img/photo-mosaic-2.jpg", big: false },
  { src: "/assets/img-negativ/img/photo-mosaic-2.jpg", big: true }, // celle-ci plus grande
  { src: "/assets/img-negativ/img/photo-mosaic-4.jpg", big: false },
  { src: "/assets/img-negativ/img/photo-mosaic-5.jpg", big: true },
  { src: "/assets/img-negativ/img/photo-mosaic-6.jpg", big: false },

  // ...
];

export const SlideShowView = () => {
  return (
    <section className="py-16 justify-center">
    <Image
     src= "/assets/img-negativ/img/photo-mosaic-1.jpg"
     alt= "Photo 1"
     width={733}
     height={445}
    />
    </section>
  );
};
