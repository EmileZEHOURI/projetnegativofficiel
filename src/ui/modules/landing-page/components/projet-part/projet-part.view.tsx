"use client";

import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import Link from "next/link";

const projectCards = [
  {
    imageSrc: "/assets/img-negativ/img-alain/photo-dalys-2.jpeg",
    title: "JOUEUR FORMÉ",
    subtitle: "PROJET",
    cta: "EN SAVOIR PLUS",
    href: "/projets-2",
    offsetClass: "md:mt-0",
  },
  {
    imageSrc: "/assets/img-negativ/img-alain/photo-adam-2.jpeg",
    title: "NOUVELLE CATÉGORIE",
    subtitle: "PROJET",
    cta: "EN SAVOIR PLUS",
    href: "/projets-1",
    offsetClass: "md:mt-16",
  },
];

export const ProjetPart = () => {
  return (
    <section className="mt-[150px] mb-[150px] px-[106px]">
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:items-start">
        {projectCards.map((card, index) => (
          <Link
            key={index}
            href={card.href}
            className={`group block ${card.offsetClass}`}
          >
            <div className="relative h-[580px] w-[480px] overflow-hidden">
              <Image
                src={card.imageSrc}
                alt={card.title}
                fill
                priority
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 z-10 bg-black/20 transition-colors duration-500 group-hover:bg-black/30">
                <Container className="flex h-full flex-col items-center justify-between py-8">
                  <div />

                  <div className="flex flex-col items-center justify-center">
                    <Typography
                      variant="projet-footer"
                      component="h2"
                      theme="white"
                      className="mb-3 tracking-[0.30em]"
                      weight={600}
                      stretch="condensed"
                    >
                      {card.subtitle}
                    </Typography>

                    <Typography
                      variant="h3-page-title"
                      component="h1"
                      theme="white"
                      className="mt-[10px] text-center tracking-tight"
                      stretch="extended"
                      weight={800}
                    >
                      {card.title}
                    </Typography>
                  </div>

                  <Typography
                    variant="projet-footer"
                    component="h2"
                    theme="white"
                    className="self-center tracking-[0em] transition-transform duration-500 group-hover:translate-y-[-4px]"
                    weight={800}
                  >
                    {card.cta}
                  </Typography>
                </Container>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};