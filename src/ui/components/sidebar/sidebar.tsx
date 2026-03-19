"use client";

import { Logo } from "@/ui/design-system/logo/logo";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { SocialNetworksButtons } from "../navigation/social-networks-buttons";

type SidebarItem = {
  label: string;
  href: string;
  target?: "_self" | "_blank";
};

type MainSection =
  | {
      title: string;
      href: string;
    }
  | {
      title: string;
      items: SidebarItem[];
    };

type SecondaryLink = {
  label: string;
  href: string;
  target?: "_self" | "_blank";
};

type SidebarProps = {
  open: boolean;
  onClose: () => void;
  mainSections?: MainSection[];
  secondaryLinks?: SecondaryLink[];
};

const styles = {
  mainLink:
    "text-[1.25em] md:text-[1.35em] lg:text-[1.8em] font-[800] uppercase tracking-tight leading-[1.15em] text-gray-500 hover:text-gray-500/80 transition",
  subLink:
    "text-[0.8em] md:text-[0.9em] lg:text-[1em] font-[800] uppercase tracking-tight leading-[1.2em] text-gray-500 hover:text-gray-500/80 transition",
  secondaryLink:
    "text-[1.05em] md:text-[1.15em] lg:text-[1.5em] font-[700] uppercase tracking-tight leading-[1.15em] text-primary-300 hover:text-gray-300/80 transition",
};

const DEFAULT_MAIN_SECTIONS: MainSection[] = [
  {
    title: "Inscription",
    href: "/informations-pratiques/inscription",
  },
  {
    title: "Le Club",
    href: "/presentation-club",
  },
  {
    title: "Les Équipes",
    items: [
      { label: "Les Equipes Competitions", href: "/les-equipes-competitions" },
      { label: "Les Equipes Loisirs", href: "/les-equipes-loisirs" },
    ],
  },
  {
    title: "Les Projets",
    items: [
      { label: "Projet 1", href: "/" },
      { label: "Projet 2", href: "/" },
    ],
  },
  {
    title: "Informations Pratiques",
    items: [
      { label: "L'Inscription", href: "/informations-pratiques/inscription" },
      { label: "Les Gymnases", href: "/informations-pratiques/gymnases" },
      { label: "Tarifs & Aides", href: "/informations-pratiques/tarifs-aides" },
      { label: "Les Permanences", href: "/informations-pratiques/permanences" },
      { label: "Les Horaires", href: "/informations-pratiques/horaires" },
      { label: "Dates de Reprise", href: "/informations-pratiques/dates-reprises" },
    ],
  },
  {
    title: "Les Actualités",
    href: "/",
  },
  {
    title: "Nous Contacter",
    href: "/",
  },
];

const DEFAULT_SECONDARY_LINKS: SecondaryLink[] = [
  {
    label: "🔍 Rechercher sur le site",
    href: "/recherche",
    target: "_self",
  },
  {
    label: "La boutique",
    href: "https://basketparis14.bigcartel.com/",
    target: "_blank",
  },
  {
    label: "Devenir partenaire",
    href: "/",
    target: "_self",
  },
  {
    label: "Mentions légales",
    href: "/",
    target: "_self",
  },
];

export function Sidebar({
  open,
  onClose,
  mainSections = DEFAULT_MAIN_SECTIONS,
  secondaryLinks = DEFAULT_SECONDARY_LINKS,
}: SidebarProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  };

  if (open) {
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
  }

  return () => {
    window.removeEventListener("keydown", onKeyDown);
    document.body.style.overflow = "";
  };
}, [open]);

  const toggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <>
      <div
        className={[
          "fixed inset-0 z-50 bg-black/50 transition-opacity duration-300",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={[
          "fixed left-0 top-0 z-50 flex h-dvh w-[85vw] max-w-[760px] flex-col overflow-y-auto sidebar-scroll bg-primary shadow-xl",
          "transition-transform duration-500 ease-out",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="m-6 flex items-center justify-between px-5 py-6">
          <button onClick={onClose} aria-label="Fermer le menu">
            <AiOutlineArrowLeft size={38} color="white" />
          </button>
          <a href="/">
             <Logo variant="secondary" />
          </a>
         
        </div>

        <main className="flex flex-1 flex-col px-5">
          <section className="mb-8">
            <nav className="mx-6" aria-label="Navigation principale">
              <ul className="list-none space-y-3 pl-0">
                {mainSections.map((section, idx) => (
                  <li key={idx} className="list-none">
                    {"items" in section ? (
                      <div className="flex flex-col">
                        <button
                          type="button"
                          onClick={() => toggle(idx)}
                          aria-expanded={openIndex === idx}
                          className="flex w-full items-center justify-between text-left"
                        >
                          <span className={styles.mainLink}>{section.title}</span>
                        
                        </button>

                        <ul
                          className={[
                            "list-none overflow-hidden pl-0 transition-all duration-300 ease-in-out",
                            openIndex === idx
                              ? "mt-2 max-h-96 opacity-100"
                              : "max-h-0 opacity-80",
                          ].join(" ")}
                        >
                          {section.items.map((item) => (
                            <li key={item.href} className="list-none py-1">
                              <Link
                                href={item.href}
                                onClick={onClose}
                                target={item.target ?? "_self"}
                                className={styles.subLink}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <Link
                        href={section.href}
                        onClick={onClose}
                        className="block"
                      >
                        <span className={styles.mainLink}>{section.title}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          <section className="mt-auto mb-5">
            <nav className="mx-6" aria-label="Navigation secondaire">
              <ul className="list-none space-y-3 pl-0">
                {secondaryLinks.map((link) => (
                  <li key={link.href} className="list-none">
                    <Link
                      href={link.href}
                      onClick={onClose}
                      target={link.target ?? "_self"}
                      className={styles.secondaryLink}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

           <section className="mt-auto mb-5">
            <nav className="mx-6" aria-label="footer">
              <SocialNetworksButtons theme="black" className="flex items-center gap-1 hover:text-white/80" icoSize="small" /> 
            </nav>
          </section>
         
        </main>
      </aside>
    </>
  );
}