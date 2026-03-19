"use client";

import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import Link from "next/link";

interface Props {
  imageSrc: string;
  alt?: string;
  title: string;
  subtitle: string;
  baseUrl: string;
  cta?: string;
}

export const NousContacterPresentation = ({
  imageSrc,
  alt = "",
  title,
  subtitle,
  baseUrl,
  cta = "EN SAVOIR PLUS",
}: Props) => {
  return (
    <section className="mt-[150px] mb-[100px] px-[106px]">
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-center">
        <Link href={baseUrl} className="group block">
          <div className="relative h-[580px] w-[1000px] overflow-hidden">
            <Image
              src={imageSrc}
              alt={alt || title}
              fill
              priority
              className="object-cover object-center"
            />

            <div className="absolute inset-0 z-10">
              <Container className="flex h-full flex-col items-center justify-between py-8">
                <div />

                <div className="flex flex-col items-center justify-center transition-transform duration-300 ease-out group-hover:scale-[1.04]">
                  <Typography
                    variant="projet-footer"
                    component="h2"
                    theme="white"
                    className="mb-3 tracking-[0.30em] transition-all duration-300 ease-out group-hover:tracking-[0.45em]"
                    weight={600}
                    stretch="condensed"
                  >
                    {subtitle}
                  </Typography>

                  <Typography
                    variant="h3-page-title"
                    component="h1"
                    theme="white"
                    className="mt-[10px] text-center tracking-tight transition-all duration-300 ease-out group-hover:tracking-[0.04em]"
                    stretch="extended"
                    weight={800}
                  >
                    {title}
                  </Typography>
                </div>

                <Typography
                  variant="projet-footer"
                  component="h2"
                  theme="white"
                  className="self-center tracking-[0em] transition-all duration-300 ease-out group-hover:translate-y-[-1px] group-hover:tracking-[0.08em]"
                  weight={800}
                >
                  {cta}
                </Typography>
              </Container>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};