"use client";

import { Container } from "@/ui/components/container/container";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";

interface Props {
  imageSrc: string;
  alt?: string;
  title: string;
  surtitle?: string;
  baseUrl?: string;
  buttonTitle?: string;
}

export const ArticlePresentation = ({
  imageSrc,
  alt = "",
  title,
  surtitle,
  baseUrl,
  buttonTitle,
}: Props) => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <Image
        src={imageSrc}
        alt={alt}
        fill
        priority
        className="object-cover object-center md:object-[center_60%] absolute"
      />

      <div className="pointer-events-auto absolute inset-0 z-10">
        <Container className="pointer-events-auto flex h-full flex-col items-start justify-center ">
          <div className="pointer-events-auto ">
            <Typography
              variant="projet-footer"
              component="h2"
              theme="white"
              className="mb-3 tracking-[0.10em]"
              weight={700}
              stretch="condensed"
            >
              {surtitle}
            </Typography>
          </div>

          <Typography
            variant="h3-page-title"
            component="h1"
            theme="white"
            className="pointer-events-auto mt-[10px] tracking-tight"
            stretch="extended"
            weight={800}
          >
            {title}
          </Typography>

          <div className="mt-8">
            <Button
              variant="button-classic"
              size="medium"
              baseUrl={baseUrl}
              weight={700}
              stretch="extended"
            >
             LIRE ARTICLE
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
};
