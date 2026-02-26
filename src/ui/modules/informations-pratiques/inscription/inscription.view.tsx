import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import Image from "next/image";
import { PreFooter } from "@/ui/components/prefooter/prefooter";

export const InscriptionPageView = () => {
  return (
    <>
      <Container className="flex flex-col h-full pl-[106px] pr-[106px] items-center  ">
        <div className="">
          <Typography
            variant="h5"
            component="h5"
            theme="primary"
            className="mt-10 justify-center items-center text-center"
          >
            INFORMATIONS PRATIQUES
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            theme="primary"
            className="mt-6 justify-center items-center text-center"
          >
            S'INSCRIRE
          </Typography>
        </div>
        <div className="">
          <Typography
            variant="h2"
            component="h2"
            theme="gray"
            className="mt-[124px] justify-center items-center text-center"
          >
            LES RÉ-INSCRIPTIONS POUR LA SAISON 2025-2026 SONT OUVERTES !
          </Typography>
          <Typography
            variant="caption3"
            component="p"
            theme="gray"
            className="mt-10 justify-center items-center text-center"
          >
            Jusqu’au 20 juin inclus, les ré-inscriptions se font au même tarif
            que la saison dernière. Passé le 20 juin, sans exception, les
            inscriptions basculeront sur la nouvelle tarification
          </Typography>

          <Typography
            variant="h2"
            component="h2"
            theme="black"
            className="mt-10 justify-center items-center text-center"
          >
            COMMENT S'INSCRIRE :
          </Typography>
          <Typography
            variant="caption3"
            component="span"
            theme="gray"
            className="mt-10 justify-center items-center text-center"
          >
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Faire la pré-inscription en ligne en cliquant sur le bouton
                ci-dessous
              </li>
              <li>
                Vous recevrez un e-mail de confirmation immédiatement après
                (vérifiez vos spams si vous ne recevez rien).
              </li>
              <li>
                Effectuez le paiement de la cotisation en ligne, ou lors de
                l’une de nos permanences.
              </li>
              <li>
                La FFBB vous envoie un e-mail (sous 48h) pour saisir votre
                e-licence. 
              </li>
            </ol>
          </Typography>
        </div>
        <div className="mt-10">
          <Button variant="accent" size="large" baseUrl="">
            CLIQUEZ ICI POUR FAIRE VOTRE INSCRIPTION
          </Button>
        </div>
        <div>
          <Image
            src="/assets/img-negativ/img/photo-mosaic-1.jpg"
            alt="Image d'inscription"
            width={1108}
            height={740}
          />
        </div>
        <div className="mt-10">
          <Typography
            variant="caption3"
            component="span"
            theme="black"
            className=" justify-center items-center text-center"
          >
            <p>
              Les inscriptions sont libres en catégories Loisirs et nécessitent
              un mot de passe en catégories Compétitions.  Les mots de passe
              sont donnés par les coachs après sélection lors de nos
              détections. Une fois les détections terminées vous pouvez
              contacter directement le coach (mails indiqué sur cette page) et
              voir si jamais une place est encore disponible dans son équipe.
            </p>

            <p>
              <br />
              Une séance d’essai est bien sûr possible pour les catégories
              Loisirs, avant de finaliser votre inscription. Nous vous demandons
              pour ça de vous pré-inscrire et de valider le paiement une fois
              l’essai effectué. Les séances d’essais sont permises jusqu’à la
              fin septembre.
            </p>

            <p>
              <br />
              Si jamais vous avez des questions précises vous pouvez consultez
              les questions courantes 
            </p>
          </Typography>
        </div>
        <div className="mt-10">
          <Button variant="accent" size="large" baseUrl="">
            QUESTION COURANTES
          </Button>
        </div>
        <div>
          <Typography
            variant="h4"
            component="h4"
            theme="black"
            className="mt-[118px] flex justify-center gap-4 text-primary"
          >
            <a href="/" className="text-black hover:text-primary">
              HORAIRES
            </a>
            <span className="">|</span>
            <a href="/" className="text-black hover:text-primary">
              TARIFS
            </a>
            <span>|</span>
            <a href="/" className="text-black hover:text-primary">
              CONTACTS
            </a>
          </Typography>
          <Typography
            variant="h4"
            component="h4"
            theme="black"
            className="mt-1 flex justify-center gap-4 text-primary"
          >
            <a>NOUS CONTACTER</a>
          </Typography>
          <PreFooter highText="Découvrir aussi" lowText="COMMENT S'INSCRIRE ?"/>
        </div>
      </Container>
    </>
  );
};
