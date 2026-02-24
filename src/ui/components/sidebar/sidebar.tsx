import { Logo } from "@/ui/design-system/logo/logo";
import Link from "next/link";
import { useEffect, useState } from "react";

import { AiOutlineArrowLeft } from "react-icons/ai";

console.log("Sidebar module loaded", typeof window);

type SidebarItem = {
  label: string;
  href: string;
};

type SidebarSection =
  | {
      title: string;
      href: string; // section cliquable directe
    }
  | {
      title: string;
      items: SidebarItem[]; // section expandable
    };
type SidebarProps = {
  open: boolean;
  onClose: () => void;
  sections?: SidebarSection[];
};




const DEFAULT_SECTIONS: SidebarSection[] = [
  {
    title: "Inscription",
    href: "/",
  },
  {
    title: "Le Club",
    href: "/",
  },
  {
    title: "Les Equipes",
    items: [
      { label: "Seniors 1", href: "/seniors-1" },
      { label: "U21 1", href: "/u21-1" },
      { label: "Les Equipes Competitions", href: "/les-equipes-competitions" },
      { label: "Les Equipes Loisirs", href: "/les-equipes-loisirs" },
    ],
  },
  {
    title: "Les Projets",
    href: "/",
  },
  {
    title: "Informations Pratiques",
    items: [
      { label: "L'Inscription", href: "/signup" },
      { label: "Les Gymnases", href: "/login" },
      { label: "Taris & Aides", href: "/login" },
      { label: "Les Permanences", href: "/login" },
      { label: "Les Horaires", href: "/login" },
      { label: "Dates De Reprises", href: "/login" },
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

  {
    title: "Boutique",
    href: "/",
  },
  {
    title: "Devenir Partenaire",
    href: "/",
  },
  {
    title: "Mentions Légales",
    href: "/",
  },
];

export function Sidebar({
  open,
  onClose,
  sections = DEFAULT_SECTIONS,
}: SidebarProps) {
  // Fermer avec ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
  setOpenIndex((current) => (current === idx ? null : idx));
};


  return (
    <>
      {/* Overlay */}
      <div
        className={[
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-500 ease-in-out overscroll-auto",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={[
          "fixed left-0 top-0 z-50 h-dvh w-[760px] max-w-[50vw] bg-primary shadow-xl overflow-y-auto sidebar-scroll",
          "transition-transform duration-500 ease-out",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="flex items-center justify-between  px-5 py-4 m-6">
          <button onClick={onClose} className="" aria-label="Fermer le menu">
            <AiOutlineArrowLeft size={38} color="white" />
          </button>
          <div className="">
            <Logo variant="secondary" />
          </div>
        </div>

        <nav className="px-5 py-4 m-6">
          <div className="flex flex-col gap-1">
            {sections.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-0">

                {/* It's this as an Items or Not (different action) */}
                
                {"items" in section ? (
                  <>
                    <button
                      type="button"
                      onClick={() => toggle(idx)}
                      className="flex w-full items-center justify-between rounded-md px-3  hover:bg-gray-100"
                      aria-expanded={openIndex === idx}
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-500 whitespace-nowrap shrink-0 ">
                        {section.title}
                      </span>

                      <span
                        className={
                          openIndex === idx
                            ? "rotate-180 transition"
                            : "transition"
                        }
                      >
                        ▾
                      </span>
                    </button>

                    <div
                      className={[
                        "overflow-hidden transition-all duration-300 ease-in-out",
                        openIndex === idx
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0",
                      ].join(" ")}
                    >
                      <ul className="flex flex-col pb-2">
                        {section.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={onClose}
                              className="block rounded-md px-6  text-sm hover:bg-gray-100"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    href={section.href}
                    onClick={onClose}
                    className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      {section.title}
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Zone “libre” éditable */}
        <div className="mt-auto  px-5 py-4 text-xs text-gray-500">
          © {new Date().getFullYear()} — Ton projet
        </div>
      </aside>
    </>
  );
}
