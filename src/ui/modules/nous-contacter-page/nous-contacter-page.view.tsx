import { Container } from "@/ui/components/container/container";
import { PostHeader } from "@/ui/components/postheader/postheader";
import { titleAndParagraph } from "../informations-pratiques/tarifs-aides-pages/tarifs-aides-page.view";
import Image from "next/image";
import { NOUS_CONTACTER_PAR_COURRIER, NOUS_CONTACTER_PAR_EMAIL } from "./nous-contacter.data";
import { ContactFormView } from "@/ui/components/contact-form/contact-form.view";
import { PreFooter } from "@/ui/components/prefooter/prefooter";

export const NousContacterPageView = () => {
  return (
    <Container className="flex flex-col h-full pl-[106px] pr-[106px] items-center ">
      <div>
        <PostHeader title="NOUS CONTACTER" />
      </div>
      <div className="max-w-7xl w-full ">
        <div className="grid grid-cols-12 items-start mt-10">
          {/* Gauche */}
          <div className="col-start-1 col-span-5">
            {titleAndParagraph("PAR COURRIER", NOUS_CONTACTER_PAR_COURRIER)}
            {titleAndParagraph("PAR EMAIL", NOUS_CONTACTER_PAR_EMAIL)}
            <ContactFormView/>
          </div>

          {/* Droite */}
          <div className="relative w-full h-screen col-start-7 col-span-6 flex flex-col items-start overflow-hidden">
           <Image
           src="/assets/img-negativ/img-alain/mass-adam-photo-1.jpeg"
           alt="Photo"
           fill
           className="object-cover object-center"
           />
          </div>
        </div>
      </div>

      <PreFooter lowText="S'INSCRIRE" href="/informations-pratiques/inscription"/>
    </Container>
  );
};
