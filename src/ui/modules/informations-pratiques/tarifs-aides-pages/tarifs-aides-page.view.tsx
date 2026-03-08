import { Container } from "@/ui/components/container/container";
import { PostHeader } from "@/ui/components/postheader/postheader";
import Image from "next/image";
import { PreFooter } from "@/ui/components/prefooter/prefooter";
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import ImageSlideWrapper from "@/ui/components/image-slide-wrapper/image-slide-wrapper";

const titleAndParagraph = (title?: string, paragraph?: React.ReactNode) => {
  return (
    <div>
      <Typography
        variant="h2-page-title"
        component="h5"
        theme="primary"
        className="mt-10 justify-center items-center text-center tracking-[0.1em]"
      >
        {title}
      </Typography>

      <Typography
        variant="h2-page-title"
        component="span"
        theme="gray"
        className="mt-10 justify-center items-center text-center"
      >
        <p className="mt-8">{paragraph}</p>
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

export const TarifsAidesPageView = () => {
  return (
    <>
      <Container className="flex flex-col h-full pl-[106px] pr-[106px] items-center ">
        <div>
          <PostHeader
            highText="INFORMATIONS PRATIQUE"
            lowText="TARIFS & AIDES"
          />
        </div>

        <Typography
          variant="h2-page-title"
          component="span"
          theme="gray"
          className="mt-10 justify-center items-center text-center"
        >
          <p>
            Retrouvez ci-dessous les tarifs de{" "}
            <strong>
              nos cotisations pour la{" "}
              <span className="text-primary">saison 2025-26 </span> ainsi que
              l’ensemble des aides dont vous pouvez bénéficier.
            </strong>
            Pour rappel, nous sommes une association et nous ne percevons
            aujourd’hui que peu de subventions publiques pour fonctionner.
            <strong>
              <span className="text-secondary">
                Vos cotisations nous permettent de fonctionner, d’exister !
              </span>
            </strong>
          </p>
          <p>
            <br />
            Vous pouvez faire baisser votre cotisation et aider un peu plus
            notre association
            <strong>
              <span className="text-secondary">en réalisant un don</span>
            </strong>
            qui vous sera défiscaliser. Retrouvez plus bas sur cette page tous
            les détails. Enfin, si votre entreprise ou celle d’un proche peut
            sponsoriser le club, n’hésitez pas à nous contacter. Cela pourrait
            permettre au club de ne pas avoir à augmenter le montant des
            cotisations dans les année à venir.
          </p>
        </Typography>

        <Image
          src="/assets/img-negativ/img/photo-group-1.jpg"
          alt="Titre"
          width={1920}
          height={1080}
          className="mt-10"
        />

        <Typography
          variant="h2-page-title"
          component="span"
          theme="gray"
          className="mt-10 justify-center items-center text-center"
        >
          <p>
            Nous proposons deux pratique différentes. La{" "}
            <strong>
              <span className="text-primary">pratique en Loisirs,</span>
            </strong>
            qui compte un entrainement par semaine, et la pratique en
            Compétitions qui comptent elle deux entrainements par semaine et des
            matchs lors des week-ends. Pour s’inscrire dans une équipe
            Compétitions il faut avoir été sélectionné lors d’une détection.
          </p>
        </Typography>

        {titleAndParagraph(
          "Catégories Loisirs",
          <>
            <p>La cotisation annuelle est de 265 €</p>
            <p>
              <br />
              Pour les nouveaux adhérents, des frais d’adhésion de 79 € sont à
              régler (à partir de la catégorie U11){" "}
            </p>
          </>,
        )}
        {titleAndParagraph(
          "Compétition BP14",
          <>
            <p>La cotisation annuelle est de 310 €</p>
            <p>
              <br />
              PPour les nouveaux adhérents, des frais d’adhésion de 79 € sont à
              régler (à partir de la catégorie U11){" "}
            </p>
          </>,
        )}
        {titleAndParagraph(
          "Compétition (CTC)",
          <>
            <p>
              Pour les équipes Filles appartenant à la CTC Paris Rive Gauche
              (entente avec le club Paris Basket 15)
            </p>
            <p>
              <br />
              La cotisation annuelle est de 275 €
            </p>
            <p>
              <br />
              Pour les nouveaux adhérents, des frais d’adhésion de 75 € sont à
              régler (à partir de la catégorie U11)
            </p>
          </>,
        )}

        <Image
          src="/assets/img-negativ/img/photo-group-2.jpg"
          alt="Titre"
          width={1920}
          height={1080}
          className="mt-10"
        />

        {titleAndParagraph(
          "Licence Parents",
          <>
            <p>
              Nous mettons en place cette saison une licence parents, pour
              seulement 30 € annuel. Cette licence vous permettra de vous
              investir plus amplement dans la vie de notre club et notamment de
              pouvoir :
            </p>
            <ul className="list-disc pl-6 space-y-10 mt-5">
              <li>participer activement aux séances de l’Ecole de Basket</li>
              <li>
                être Responsable de Salle lors des matchs compétitions de vos
                enfants (d’une grande aide pour l’organisation du club)
              </li>
              <li>
                tenir des tables de match et bénéficier des formations e-marque
                réalisées par le club.
              </li>
            </ul>
            <p>
              <br /> Cette licence est aussi de façon à soutenir le club
            </p>
          </>,
        )}

        <Image
          src="/assets/img-negativ/img/photo-mosaic-3.png"
          alt="Titre"
          width={1920}
          height={1080}
          className="mt-10"
        />

        {titleAndParagraph(
          "Les Aides",
          <>
            <p>
              Il existe plusieurs type d’aides comme le Pass’ Loisirs Activités
              et le Coupon Sport qui sont fourni par votre CAF. Le club met lui
              en place des facilités pour les familles nombreuses ainsi qu’un
              Fonds de Solidarité pour les personnes en plus grande difficultés.
              En cas de difficultés supplémentaires ou cas particuliers,
              n’hésitez pas à rentrer directement en contact avec nous.
            </p>
          </>,
        )}

        {titleAndParagraph(
          "Familles Nombreuses :",
          <>
            <p>
              Conscient de la difficultés des familles nombreuses à pouvoir
              assumer plusieurs cotisations, nous avons mis en place des
              réductions pour elles. Nous avons donc mis en places les
              réductions suivantes :
            </p>
            <ul className="pl-6 space-y-10 mt-5">
              <li>
                2e enfant : frais d’adhésion de 79€ offerts (pour les nouveaux
                adhérents) et -30€ sur la seconde cotisation.
              </li>
              <li>
                3e enfant : frais d’adhésion de 79€ offerts et -50€ sur la 3e
                cotisation
              </li>
              <li>
                4e enfant : frais d’adhésion de 79€ offerts et -70€ sur la 4e
                cotisation.
              </li>
              <li>
                5e enfant : frais d’adhésion de 79€ offerts et -90€ sur la 5e
                cotisation.
              </li>
            </ul>
          </>,
        )}

        {titleAndParagraph(
          "TiCKETS LOISIRS",
          <>
            <p>
              Bénéficiez d’une aide de 220 € maximum par enfant selon la
              situation. Toutes les informations sont sur cette page du site
              www.caf.fr
            </p>
          </>,
        )}
        {titleAndParagraph(
          "Pass Sport",
          <>
            <p>
              Bénéficiez de 70 € si vous avez entre 14 et 30 ans. Toutes les
              informations sont sur cette page du site www.pass.sports.gouv.fr
            </p>
          </>,
        )}
        {titleAndParagraph(
          "Coupons Sport",
          <>
            <p>
              Bénéficiez de chèques de 10 €, 15 € ou 20 € de réduction. Toutes
              les informations sont sur cette page du site www.aide-sociale.fr
            </p>
          </>,
        )}

        <Image
          src="/assets/img-negativ/img/photo-mosaic-1.jpg"
          alt="Titre"
          width={1920}
          height={1080}
          className="mt-10"
        />

        <div className="mt-10">
          {titleAndParagraph(
            "OFFRE DONATEURS",
            <>
              <p>
                Bénéficiez de chèques de 10 €, 15 € ou 20 € de réduction. Toutes
                les informations sont sur cette page du site www.aide-sociale.fr
              </p>
            </>,
          )}
          <Button variant="accent" size="large" baseUrl="">
            EXPLICATIF OFFRE DONATEURS
          </Button>
        </div>

        {titleAndParagraph(
          "Fonds de Solidarité",
          <>
            <p>
              Afin de venir en aide aux personnes les plus en difficultés, nous
              avons mis en place un fonds de solidarité. Cette cagnotte est
              utilisée pour offrir ou réduire les cotisations des personnes dont
              le règlement de la cotisation est compliqué.
            </p>
            <p>
              <br />
              Ce don est déductible de vos impôts (pour toute demande d’un Cerfa
              à ce sujet contactez nous).
            </p>
            <Button variant="accent" size="large" baseUrl="">
              Faites un Don ici
            </Button>
          </>,
        )}

       <ImageSlideWrapper images={images}/>

        {titleAndParagraph(
          "Comment est utilisée votre cotisation ?",
          <>
            <p>
              Notre club est avant tout une association, financée en très grande
              majorité par vos cotisations. La stabilité de notre structure
              (comme la majorité des associations) est très fragile. L’équilibre
              financier est recherché chaque saison et cela relève parfois de
              l’exploit, notamment grâce à l’énergie déployée par nos dirigeants
              bénévoles sur les sujets comptables. Notre association bénéficie
              de quelques subventions publiques, mais encore trop peu pour
              permettre de baisser les cotisations. Retrouvez dans le document
              ci-dessous une explication détaillée du financement de notre
              association et un graphique schématisant l’utilisation qui est
              faite de votre cotisation.
            </p>
            <Button variant="accent" size="large" baseUrl="">
              Comment est utilisé votre cotisation ?
            </Button>
          </>,
        )}

        <PreFooter highText="Découvrir aussi" lowText="LES PERMANENCES" />
      </Container>
    </>
  );
};
