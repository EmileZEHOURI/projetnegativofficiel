import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import Image from "next/image";
import { PreFooter } from "@/ui/components/prefooter/prefooter";
import { PostHeader } from "@/ui/components/postheader/postheader";
import {
  INSCRIPTION_DETAILS,
  INSCRIPTION_INTRO,
  INSCRIPTION_STEPS,
} from "./inscription-data";

export const InscriptionPageView = () => {
  return (
    <>
      <Container className="flex flex-col h-full pl-[106px] pr-[106px] items-center">
        <div>
          <PostHeader title="S'INSCRIRE" />
        </div>

        <div className="max-w-3xl px-6">
          <div className="self-start">
            <Typography
              variant="h2-article-title"
              component="h2"
              theme="secondary"
              weight={800}
              className="mt-[124px] self-start tracking-tighter"
              stretch="extended"
            >
              LES RÉ-INSCRIPTIONS POUR LA SAISON 2025-2026 SONT OUVERTES !
            </Typography>

            <Typography
              variant="caption2"
              component="div"
              theme="gray"
              weight={300}
              className="mt-10 self-start"
            >
              {INSCRIPTION_INTRO}
            </Typography>

            <Typography
              variant="h2-article-title"
              component="h2"
              weight={800}
              theme="primary"
              className="mt-10 mb-10 self-start tracking-tighter"
              stretch="extended"
            >
              COMMENT S'INSCRIRE :
            </Typography>

            <Typography
              variant="paragraph"
              component="div"
              weight={400}
              className="mt-10 self-start"
            >
              <ol className="list-decimal pl-4 space-y-2 text-secondary-500">
                {INSCRIPTION_STEPS.map((step, i) => (
                  <li key={i} className="text-secondary font-bold">
                    {step}
                  </li>
                ))}
              </ol>
            </Typography>
          </div>
          <div className="mt-10 flex justify-center">
            <Button
              size="small"
              variant="accent"
              weight={900}
              stretch="extended"
              className="tracking-tight py-[1rem] px-[3em] text-secondary mb-10 text-center"
            >
              CLIQUEZ ICI POUR FAIRE VOTRE INSCRIPTION
            </Button>
          </div>

          <div className="flex justify-center">
            <Image
              src="/assets/img-negativ/img-sony/photo-group-landscape-sony-5.jpg"
              alt="Image d'inscription"
              width={640}
              height={480}
            />
          </div>

          <div className="mt-10 self-start">
            <Typography
              variant="caption2"
              component="div"
              theme="gray"
              className=""
              weight={300}
            >
              {INSCRIPTION_DETAILS}
            </Typography>
          </div>

          <div className="mt-10 flex justify-center">
            <Button
              size="small"
              variant="accent"
              weight={900}
              
              className="tracking-tight  text-secondary mb-10 text-center"
            >
              QUESTION COURANTES
            </Button>
        
          </div>

              
            <Typography  variant="caption2"
              component="div"
              theme="gray"
              className=""
              weight={300}>
            Pour toutes autres questions vous pourrez trouvez des réponses sur les pages de notre menu Informations pratiques :
          </Typography>

          <div>
            <Typography
              variant="paragraph-quote"
              component="h4"
              theme="black"
              className="mt-[118px] flex justify-center gap-4 text-primary tracking-tight"
              weight={800}
              
            >
              <a href="/" className="text-secondary hover:text-secondary/80">
                HORAIRES
              </a>
              <span>|</span>
              <a href="/informations-pratiques/tarifs-aides" className="text-secondary hover:text-secondary/80">
                TARIFS
              </a>
              <span>|</span>
              <a href="/" className="text-secondary hover:text-secondary/80">
                CONTACTS
              </a>
            </Typography>

            <Typography
              variant="paragraph-quote"
              component="h4"
              theme="primary"
              className="mt-1 flex justify-center gap-4 "
              weight={800}
            >
              <a href="/nous-contacter" className="hover:text-primary/80" >NOUS CONTACTER</a>
            </Typography>

            <PreFooter
              highText="DÉCOUVRIR AUSSI"
              lowText="COMMENT S'INSCRIRE ?"
              href="/"
            />
          </div>
        </div>
      </Container>
    </>
  );
};
