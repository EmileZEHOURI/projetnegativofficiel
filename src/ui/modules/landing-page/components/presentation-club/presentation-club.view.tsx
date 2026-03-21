import { Typography } from "@/ui/design-system/typography/typography";
import { CLUB_INTRO, CLUB_PHILOSOPHY } from "@/ui/modules/club-page/club-data";
import Image from "next/image";
import { CLUB_ACCUEIL_INTRO } from "./presentation-club.data";
import { Button } from "@/ui/design-system/button/button";

export const PresentationClub = () => {
  return (
    <>
      <section className="mt-[150px] mb-[150px] px-[106px]">
        <div className="mt-[150px] px-1 w-full max-w-4xl mx-auto grid grid-cols-12 gap-20 items-start">
          <div className="col-start-1 col-span-5">
            <Typography
              variant="h2-page-title"
              component="h2"
              theme="primary"
              className=" tracking-tighter"
              weight={800}
              stretch="condensed"
            >
              UN CLUB <br/> NÉ DE LA PASSION
            </Typography>

            <Typography
              variant="caption2"
              component="div"
              theme="gray"
              className=" "
            >
              {CLUB_ACCUEIL_INTRO}
            </Typography>

            <div className="mt-8">
               <Button
              variant="accent"
              size="medium"
              baseUrl="/presentation-club"
              weight={800}
              stretch="extended"
            >
              EN SAVOIR PLUS
            </Button>
              </div>

           
          </div>

          <div className="col-start-7 col-span-5 relative h-[400px] md:mt-0">
            <div className="relative w-[250px] h-[350px]  overflow-hidden top-[130px] right-10  ">
              <Image
                src="/assets/img-negativ/img-alain/photo-melvin-1.jpeg"
                alt="Titre"
                fill
                className=" object-cover object-bottom absolute  z-20"
              />
            </div>

            <img
              src="/assets/img-negativ/img-sony/photo-lower-body-2.JPG"
              alt="Titre"
              width={240}
              height={80}
              className="absolute top-0 left-40 z-10"
            />
          </div>
        </div>
      </section>
    </>
  );
};
