import { Typography } from "@/ui/design-system/typography/typography";
import { HighPhotoView } from "../../components/high-photo/high-photo.view";
import { Container } from "@/ui/components/container/container";
import Image from "next/image";
import { GalleryMosaicView } from "./component/gallery-mosaic/gallery-mosaic.view";
import { SlideShowView } from "./component/slide-show/slide-show.view";

export const ClubPageView = () => {
  return (
    <>
      <HighPhotoView
        position="left"
        title="Présentation du Club"
        surtitle="LE CLUB"
        imageSrc="/assets/img-negativ/img/image-basket-3x3.jpg"
        alt="Photo du Club"
      />
      <Container className="flex flex-col h-full pl-[106px] pr-[106px] items-start  ">
        <div className="flex flex-col items-start w-[1000px]">
          <Typography
            variant="h2"
            component="h2"
            theme="primary"
            className="mt-[146px] leading-none tracking-normal whitespace-nowrap"
          >
            LE NOUVEAU CLUB PARISIEN
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            theme="white"
            className="text-stroke leading-none tracking-normal whitespace-nowrap"
          >
            NEGATIV BASKETBALL
          </Typography>
          <Typography
            variant="caption1"
            component="p"
            theme="black"
            className="mt-14 w-[800px] leading-10"
          >
            Nous sommes une association sportive et culturelle fondée en octobre
            2022 et basée à PARIS 10e. Notre ambition est de s'affirmer en tant
            que club compétitif et de créer des opportunités pour nos adhérents
            et bénévoles.
          </Typography>
        </div>
        <div>
          <Typography
            variant="h2"
            component="h2"
            theme="black"
            className="mt-[146px] leading-none tracking-normal whitespace-nowrap"
          >
            PHILOSOPHIE DU CLUB
          </Typography>
          <Typography
            variant="caption1"
            component="p"
            theme="black"
            className="mt-14 w-[800px] leading-10"
          >
            <p>
              Nous nous engageons auprès des jeunes sportifs afin de former des
              joueurs mais aussi des personnes responsables et citoyennes. Notre
              ambition sportive va donc de paire avec une vrai volonté sociale.
              Nous souhaitons offrir à tous nos adhérents la possibilité de
              s’épanouir individuellement au sein de notre collectif. La
              formation est le fil rouge de notre club. Nous voulons former des
              joueurs, des éducateurs, des coachs, des arbitres et aussi des
              dirigeants.
            </p>

            <p>
              <br />
              Notre club possède une force qu’il puise dans sa diversité à
              l’image de notre arrondissement et des quartiers « Politique de la
              Ville » dans lesquels nous évoluons. Nous nous engageons et nous
              investissons dans de nombreuses actions au sein de notre quartier
              ou auprès de la Ville de Paris et souhaitons renforcer le maillage
              inter-associatif et la vie de quartier. Le club a par exemple
              proposé.
            </p>
          </Typography>
        </div>
        <div className="mt-[146px] grid grid-cols-12 gap-6  mb-10">
          {/* Image gauche (grande) */}
          <Image
            className="col-span-7 col-start-1 w-full h-auto"
            src="/assets/img-negativ/img/photo-group-2.jpg"
            alt="Photo Group"
            width={553}
            height={414}
          />
          {/* Image droite (plus basse) */}
          <Image
            className="col-span-5 col-start-8 w-full h-auto translate-y-[80px]"
            src="/assets/img-negativ/img/image-basket-3x3.jpg"
            alt="Photo 3x3"
            width={675}
            height={404}
          />
        </div>

        <div>
          <Typography
            variant="h2"
            component="h2"
            theme="primary"
            className="mt-[146px] leading-none tracking-normal whitespace-nowrap"
          >
            NOTRE HISTOIRE
          </Typography>
          <Typography
            variant="caption1"
            component="p"
            theme="black"
            className="mt-14 w-[800px] leading-10"
          >
            <p>
              Nous nous engageons auprès des jeunes sportifs afin de former des
              joueurs mais aussi des personnes responsables et citoyennes. Notre
              ambition sportive va donc de paire avec une vrai volonté sociale.
              Nous souhaitons offrir à tous nos adhérents la possibilité de
              s’épanouir individuellement au sein de notre collectif.
              La formation est le fil rouge de notre club. Nous voulons former
              des joueurs, des éducateurs, des coachs, des arbitres et aussi des
              dirigeants. Le BASKET PARIS 14 c’est donc aussi la possibilité
              d’évoluer professionnellement dans le sport, notamment grâce à son
              École d’Arbitrage ou grâce à l’accès aux formations internes
              menant aux diplômes d’entraîneurs.
            </p>

            <p>
              <br />
              Notre club possède une force qu’il puise dans sa diversité à
              l’image de notre arrondissement et des quartiers « Politique de la
              Ville » dans lesquels nous évoluons. Nous nous engageons et nous
              investissons dans de nombreuses actions au sein de notre quartier
              ou auprès de la Ville de Paris et souhaitons renforcer le maillage
              inter-associatif et la vie de quartier. Le club a par exemple
              proposé trois projets aux votes du Budget Participatif et met en
              place des stages gratuits ou payants durant les vacances, du
              soutien scolaire, des sorties, des rencontres, débats, etc…
            </p>
          </Typography>

          <div>
            <GalleryMosaicView />
          </div>

          <div>Something</div>

          <div className="justify-center">
            <SlideShowView />
          </div>
        </div>
      </Container>
    </>
  );
};
