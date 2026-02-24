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

export const GalleryMosaicView = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-2 gap-6 ">
          {photos.map((photo, index) => (
            <div
              key={photo.src}
              className={[
                "relative overflow-hidden aspect-square bg-gray-100",
                photo.big
                  ? "col-span-2 row-span-2 aspect-square"
                  : "aspect-square",
              ].join(" ")}
            >
              <Image
                src={photo.src}
                alt={`photo-${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
