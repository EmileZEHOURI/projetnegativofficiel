"use client";

import { Container } from "@/ui/components/container/container";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import Link from "next/link";
import {
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { useState } from "react";
import { infosPratiquesLinks } from "../postheader/postheader";
import { HighPhotoBackgroundSlider } from "./high-photo-background-slider";


interface DropdownItem {
  label: string;
  href: string;
}

interface HeroSlideItem {
  src: string;
  alt?: string;
}

interface Props {
  imageSrc?: string;
  alt?: string;
  title: string;
  surtitle?: string;
  variant?: "dropdown" | "static";
  dropdownItems?: DropdownItem[];
  mediaType?: "image" | "slider";
  sliderImages?: HeroSlideItem[];
}

export const HighPhotoView = ({
  imageSrc = "/",
  alt = "",
  title,
  surtitle = "Informations pratiques",
  variant = "dropdown",
  dropdownItems = infosPratiquesLinks,
  mediaType = "image",
  sliderImages = [],
}: Props) => {
  const [open, setOpen] = useState(false);

  const { refs, floatingStyles, context, placement } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: "top-start",
    whileElementsMounted: autoUpdate,
    middleware: [offset(4), flip(), shift({ padding: 12 })],
  });

  const click = useClick(context, {
    enabled: variant === "dropdown",
  });

  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "menu" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  const isPlacedTop = placement.startsWith("top");

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      {mediaType === "slider" && sliderImages.length > 0 ? (
        <HighPhotoBackgroundSlider images={sliderImages} />
      ) : (
        <Image
          src={imageSrc}
          alt={alt}
          fill
          priority
          className="object-cover"
        />
      )}

      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="pointer-events-auto">
          <Navigation variant="overlay" />
        </div>

        <Container className="pointer-events-none flex h-full flex-col items-start justify-end pb-10">
          <div className="pointer-events-auto relative inline-block">
            {variant === "dropdown" ? (
              <>
                <button
                  type="button"
                  ref={refs.setReference}
                  className="group inline-flex items-center gap-2"
                  {...getReferenceProps()}
                >
                  <Typography
                    variant="caption1"
                    component="h2"
                    theme="white"
                    className="tracking-[5px]"
                    weight={700}
                    stretch="condensed"
                  >
                    {surtitle}
                  </Typography>

                  <svg
                    className="h-4 w-4 text-white transition-transform duration-200 group-aria-[expanded=true]:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5.23 7.21L10 10.94l4.77-3.73" />
                  </svg>
                </button>

                {open && (
                  <div
                    ref={refs.setFloating}
                    style={floatingStyles}
                    className={[
                      "z-[60] min-w-[200px] bg-primary py-2 shadow-lg",
                      isPlacedTop ? "origin-bottom-left" : "origin-top-left",
                    ].join(" ")}
                    {...getFloatingProps()}
                  >
                    {dropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block px-4 py-2 hover:bg-primary-500"
                      >
                        <Typography
                          variant="h2-article-title"
                          component="span"
                          theme="white"
                          className="text-[0.9rem] tracking-[4px]"
                          weight={700}
                          stretch="condensed"
                        >
                          {item.label}
                        </Typography>
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Typography
                variant="caption1"
                component="h2"
                theme="white"
                className="mb-3 tracking-[0.30em]"
                weight={700}
                stretch="condensed"
              >
                {surtitle}
              </Typography>
            )}
          </div>

          <Typography
            variant="h2-page-title"
            component="h1"
            theme="white"
            className="pointer-events-auto mt-[10px] tracking-tight"
            weight={800}
          >
            {title}
          </Typography>
        </Container>
      </div>
    </section>
  );
};