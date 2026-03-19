import { Typography } from "@/ui/design-system/typography/typography";
import { HighPhotoView } from "../../components/high-photo/high-photo.view";
import { Container } from "@/ui/components/container/container";
import Image from "next/image";
import { GalleryMosaicView } from "./component/gallery-mosaic/gallery-mosaic.view";
import ImageSlideWrapper from "@/ui/components/image-slide-wrapper/image-slide-wrapper";
import { CLUB_HISTORY, CLUB_INTRO, CLUB_PHILOSOPHY } from "./club-data";
import { PreFooter } from "@/ui/components/prefooter/prefooter";

const images = [
  {
    src: "/assets/img-negativ/img-alain/group-bench-photo-1.jpeg",
    alt: "Image 1",
  },
  {
    src: "/assets/img-negativ/img-alain/group-bench-photo-2.jpeg",
    alt: "Image 2",
  },
  {
    src: "/assets/img-negativ/img-alain/photo-spectator-1.jpeg",
    alt: "Image 3",
  },
];

export const ClubPageView = () => {
  return (
    <>
      <HighPhotoView
        title="PRÉSENTATION DU CLUB"
        surtitle="LE CLUB"
        imageSrc="/assets/img-negativ/img-alain/photo-spectator-1.jpeg"
        alt="Photo du Club"
      />

      <Container className="flex h-full flex-col items-center pl-[106px] pr-[106px]">
        

        <div className="mt-[150px] px-1 w-full max-w-4xl mx-auto grid grid-cols-12 gap-20 items-start">
          <div className="col-start-1 col-span-4">
            <Typography
              variant="h2-article-title"
              component="h2"
              theme="primary"
              className=" tracking-tight"
              weight={800}
            >
              PRÉSENTATION
            </Typography>

            <Typography
              variant="caption2"
              component="div"
              theme="gray"
              className=" "
            >
              {CLUB_INTRO}
            </Typography>

            <Typography
              variant="h2-article-title"
              component="h2"
              theme="primary"
              className="mt-[40px] whitespace-nowrap leading-none tracking-normal"
              weight={800}
            >
              PHILOSOPHIE DU CLUB
            </Typography>

            <Typography
              variant="caption2"
              component="div"
              theme="gray"
              className=" "
            >
              {CLUB_PHILOSOPHY}
            </Typography>
          </div>

          <div className="col-start-6 col-span-5 relative h-[400px] md:mt-0">
            <div className="relative w-[400px] h-[650px]  overflow-hidden top-[290px] right-10  ">
              <Image
                src="/assets/img-negativ/img-alain/photo-melvin-1.jpeg"
                alt="Titre"
                fill
                className=" object-cover object-bottom absolute  z-20"
              />
            </div>

            <Image
              src="/assets/img-negativ/img-sony/photo-lower-body-2.jpg"
              alt="Titre"
              width={640}
              height={480}
              className="absolute top-0 left-40 z-10"
            />
          </div>
        </div>

        <div className="relative w-screen h-[550px] overflow-hidden top-[150px] ">
          <Image
            src="/assets/img-negativ/img-alain/photo-dalys-1.jpeg"
            alt="Titre"
            fill
            className=" object-cover object-[center_60%] absolute"
          />
        </div>

        <div className="max-w-4xl px-2 mt-[120px] ">
          <Typography
            variant="h2-article-title"
            component="h2"
            theme="primary"
            className="mt-[146px] whitespace-nowrap leading-none tracking-normal"
            weight={800}
          >
            NOTRE HISTOIRE
          </Typography>

          <Typography
            variant="caption2"
            component="div"
            theme="gray"
            className=" "
          >
            {CLUB_HISTORY}
          </Typography>

          <div className="justify-center h-[420px] mt-[120px]">
            <ImageSlideWrapper images={images} />
          </div>
        </div>

        <PreFooter
          lowText="S'INSCRIRE"
          highText="DÉCOUVRIR AUSSI"
          href="/informations-pratiques/inscription"
        />
      </Container>
    </>
  );
};
