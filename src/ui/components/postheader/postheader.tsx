"use client";

import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import { DropdownMenu }  from "../dropdown-menu/dropdown-menu";



interface Props {
  title: string;
}

export const infosPratiquesLinks = [
  { label: "TARIFS & AIDES", href: "/informations-pratiques/tarifs-aides" },
  { label: "DATES DE REPRISE", href: "/informations-pratiques/dates-reprises" },
  { label: "NOUS CONTACTER", href: "/nous-contacter" },
  { label: "S’INSCRIRE", href: "/informations-pratiques/inscription" },
  { label: "LES HORAIRES", href: "/informations-pratiques/horaires" },
  { label: "LES PERMANENCES", href: "/informations-pratiques/permanences" },
];

export const PostHeader = ({ title }: Props) => {
  return (
    <section className="mt-1 mb-1">
      <Container className="flex flex-col pb-10 text-center">
        <div className="mt-20">
          <DropdownMenu
            label="INFORMATIONS PRATIQUES"
            items={infosPratiquesLinks}
          />
        </div>

        <Typography
          variant="h2-page-title"
          component="h1"
          theme="primary"
          className="mt-[10px] text-shadow-lg tracking-[-0.08em]"
          stretch="extended"
          weight={800}
        >
          {title}
        </Typography>
      </Container>
    </section>
  );
};