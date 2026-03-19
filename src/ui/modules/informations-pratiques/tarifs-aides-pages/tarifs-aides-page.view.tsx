import { Container } from "@/ui/components/container/container";
import { PostHeader } from "@/ui/components/postheader/postheader";
import Image from "next/image";
import { PreFooter } from "@/ui/components/prefooter/prefooter";
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import ImageSlideWrapper from "@/ui/components/image-slide-wrapper/image-slide-wrapper";
import {
  AIDES_TEXT,
  COMPETITION_NEGATIV_TEXT,
  COTISATION_USAGE_TEXT1,
  COTISATION_USAGE_TEXT2,
  COUPONS_SPORT_TEXT,
  FAMILLES_NOMBREUSES_TEXT,
  FONDS_SOLIDARITE_TEXT,
  INTRO_TEXT,
  LICENCE_PARENTS_TEXT,
  LOISIRS_TEXT,
  OFFRE_DONATEURS_TEXT1,
  OFFRE_DONATEURS_TEXT2,
  PASS_SPORT_TEXT,
  PRACTICES_TEXT,
  TICKETS_LOISIRS_TEXT,
} from "./component/tarifs-aides-data";

export const titleAndParagraph = (title?: string, paragraph?: React.ReactNode) => {
  return (
    <div className=" ">
      <Typography
        variant="caption1"
        component="h5"
        theme="primary"
        className=" mt-10 text-left tracking-tighter "
        stretch="extended"
        weight={800}
      >
        {title}
      </Typography>

      <Typography variant="caption2" component="div" theme="gray" className="">
        {paragraph}
      </Typography>
    </div>
  );
};

const images = [
  { src: "/assets/img-negativ/img/photo-mosaic-1.jpg", alt: "Image 1" },
  { src: "/assets/img-negativ/img/photo-mosaic-2.jpg", alt: "Image 2" },
  { src: "/assets/img-negativ/img/photo-mosaic-3.png", alt: "Image 3" },
  { src: "/assets/img-negativ/img/photo-group-1.jpg", alt: "Image 4" },
  { src: "/assets/img-negativ/img/photo-group-1.jpg", alt: "Image 5" },
];

const SECTIONS = [
  { title: "CATÉGORIES LOISIRS", content: LOISIRS_TEXT },
  { title: "COMPÉTITION NEGATIV", content: COMPETITION_NEGATIV_TEXT },
];

const AIDES_SECTIONS = [
  { title: "LES AIDES", content: AIDES_TEXT },
  { title: "FAMILLES NOMBREUSES :", content: FAMILLES_NOMBREUSES_TEXT },
  { title: "TICKETS LOISIRS", content: TICKETS_LOISIRS_TEXT },
  { title: "PASS SPORT", content: PASS_SPORT_TEXT },
  { title: "COUPONS SPORT", content: COUPONS_SPORT_TEXT },
];

export const TarifsAidesPageView = () => {
  return (
    <>
      <Container className="flex flex-col h-full pl-[106px] pr-[106px] items-center ">
        <div>
          <PostHeader title="TARIFS & AIDES" />
        </div>
        <div className="max-w-3xl px-6">
          <Typography
            variant="caption2"
            component="div"
            theme="gray"
            className="text-left"
          >
            {INTRO_TEXT}
          </Typography>
        </div>

        <div className="relative w-screen h-[550px] mt-10 overflow-hidden rounded-lg left-10">
          <Image
            src="/assets/img-negativ/img-alain/photo-mass-jazz-1.jpeg"
            alt="Titre"
            fill
            className="object-cover object-[center_25%]"
          />
        </div>

        <div className="mt-[150px] px-6 w-full max-w-4xl mx-auto grid grid-cols-12 gap-20 items-start">
          <div className="col-start-1 col-span-5 ">
            <Typography
              variant="caption2"
              component="div"
              theme="gray"
              className="mt-10 text-left"
            >
              {PRACTICES_TEXT}
            </Typography>

            {SECTIONS.map((section) =>
              titleAndParagraph(section.title, section.content),
            )}
          </div>

          <div className="col-start-7 col-span-5 relative h-[400px] md:mt-0">
            <Image
              src="/assets/img-negativ/img-alain/mass-photo-1.jpeg"
              alt="Titre"
              width={280}
              height={360}
              className="absolute top-0 left-0 z-10"
            />

            <Image
              src="/assets/img-negativ/img-sony/photo-melvin-1.jpg"
              alt="Titre"
              width={240}
              height={320}
              className="absolute top-20 left-40 z-20"
            />
          </div>
        </div>

        <div className="mt-[80px] max-w-3xl px-6">
          {titleAndParagraph("LICENCE PARENTS", LICENCE_PARENTS_TEXT)}
        </div>

        <div className="relative w-[640px] h-[480px] mt-10">
          {/* Image fond */}
          <Image
            src="/assets/img-negativ/img-sony/photo-group-landscape-sony-6.jpg"
            alt="Titre"
            width={400}
            height={300}
            className="absolute top-0 right-0 object-cover rounded-lg shadow-lg"
          />

          {/* Image devant */}
          <Image
            src="/assets/img-negativ/img-sony/photo-group-with-alain.jpg"
            alt="Titre"
            width={320}
            height={240}
            className="absolute top-20 left-10 object-cover "
          />
        </div>

        <div className="max-w-3xl w-full mt-[80px] ">
          {AIDES_SECTIONS.map((section) =>
            titleAndParagraph(section.title, section.content),
          )}
        </div>

        <div className="relative w-[1000px] h-[450px]  overflow-hidden mt-[50px]  ">
          <Image
            src="/assets/img-negativ/img-alain/group-bench-photo-1.jpeg"
            alt="Titre"
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="max-w-3xl w-full ">
          <div className="grid grid-cols-12 items-start mt-10">
            {/* Texte */}
            <div className="col-start-1 col-span-5">
              {titleAndParagraph("OFFRE DONATEURS", OFFRE_DONATEURS_TEXT1)}
            </div>

            {/* Bouton */}
            <div className="col-start-9 col-span-5 flex flex-col items-start">
              {titleAndParagraph("", OFFRE_DONATEURS_TEXT2)}
              <Button
                variant="accent"
                size="medium"
                baseUrl=""
                className="mt-[40px] tracking-tight font-normal"
                weight={800}
              >
                EXPLICATIF OFFRE DONATEURS
              </Button>
            </div>
          </div>

          {titleAndParagraph("FONDS DE SOLIDARITÉ", FONDS_SOLIDARITE_TEXT)}
        </div>

        <div className="relative w-screen h-[550px] right-10 overflow-hidden mt-[50px]  ">
          <Image
            src="/assets/img-negativ/img-alain/group-bench-photo-2.jpeg"
            alt="Titre"
            fill
            className=" object-cover object-[center_40%]"
          />
        </div>

        <div className="max-w-4xl w-full">
          <div className="grid grid-cols-12 gap-x-10 items-start mt-10">
            <div className="col-start-1 col-span-6">
              {titleAndParagraph(
                "COMMENT EST UTILISÉE VOTRE COTISATION ?",
                COTISATION_USAGE_TEXT1,
              )}
            </div>

            <div className="col-start-8 col-span-5 justify-self-start w-full max-w-[400px]">
              {titleAndParagraph("", COTISATION_USAGE_TEXT2)}

              <Button
                variant="accent"
                size="medium"
                baseUrl=""
                className="mt-5 text-base w-full font-bold tracking-tighter font-extended"
                weight={800}
              >
                COMMENT EST UTILISÉE VOTRE COTISATION ?
              </Button>
            </div>
          </div>
        </div>

        <PreFooter lowText="LES PERMANENCES" href="/informations-pratiques/permanences" />
      </Container>
    </>
  );
};
