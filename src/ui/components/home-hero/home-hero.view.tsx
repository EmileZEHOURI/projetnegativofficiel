"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Container } from "@/ui/components/container/container";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import { AnimatePresence, motion } from "framer-motion";
import { HomeHeroSlide } from "@/types/home-hero-slide";
import { SocialNetworksButtons } from "@/ui/components/navigation/social-networks-buttons";

const HeroImageSlider = dynamic(
  () => import("./hero-image-slider").then((mod) => mod.HeroImageSlider),
  { ssr: false },
);

interface Props {
  slides: HomeHeroSlide[];
}

export const HomeHeroView = ({ slides }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!slides.length) return null;

  const currentSlide = slides[activeIndex];

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      <HeroImageSlider
        images={slides}
        activeIndex={activeIndex}
        onChange={setActiveIndex}
      />

      <div className="absolute inset-0 z-[1] bg-black/25" />

      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="pointer-events-auto">
          <Navigation variant="overlay" />
        </div>

        <Container className="pointer-events-none flex h-full flex-col items-start justify-end pb-10">
          <div className="pointer-events-auto max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >

                <Typography
                  variant="h2-page-title"
                  component="h1"
                  theme="white"
                  className="mt-[10px] tracking-tight shrink-0 whitespace-nowrap"
                  weight={800}
                >
                  {currentSlide.title}
                </Typography>

                <div className="mt-8">
                  <Button
                    variant="button-classic"
                    size="large"
                    baseUrl={currentSlide.buttonHref}
                    weight={700}
                  >
                    {currentSlide.buttonLabel}
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center gap-3">
              {slides.map((_, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Aller au slide ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                    className={[
                      "h-3 w-3 rounded-full  transition",
                      isActive
                        ? "bg-primary"
                        : "border-white/80 bg-white/50 hover:bg-white/70",
                    ].join(" ")}
                  />
                );
              })}
            </div>
          </div>
        </Container>
        <div className="pointer-events-auto absolute right-2 top-1/2 -translate-y-1/2 z-20">
          <SocialNetworksButtons
            theme="black"
            icoSize="medium"
            className="flex flex-col gap-0.5"
          />
        </div>
      </div>
    </section>
  );
};
