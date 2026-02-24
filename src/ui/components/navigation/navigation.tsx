"use client";

import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import Link from "next/link";
import { Container } from "../container/container";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { Sidebar } from "../sidebar/sidebar";
import { ActiveLink } from "./active-link";
import { leftButtonsLinks } from "./app-links";

interface Props {
  variant?: "default" | "overlay";
  isLight?: boolean;
}

export const Navigation = ({
  variant = "default",
  isLight = false,
}: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const rightLinks = leftButtonsLinks.map((link) => (
    <ActiveLink key={link.label} href={link.baseUrl}>
      <Button size="bpmedium" variant={isLight ? "isLight" : "bpwhite"}>
        {link.label}
      </Button>
    </ActiveLink>
  ));

  return (
    <div
      className={
        variant === "overlay"
          ? "absolute top-0 left-0 w-full z-50"
          : ""
      }
    >
      <Container className="relative grid grid-cols-2 items-center py-6 bg-transparent">
        {/* GAUCHE */}
        <div className="flex justify-start">
          <Button
            variant={isLight ? "circleLight" : "circle"}
            action={() => setSidebarOpen(true)}
          >
            <HiOutlineMenu
              size={44}
              className={isLight ? "text-black" : "text-white"}
            />
          </Button>
        </div>

        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* CENTRE */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/" aria-label="Accueil">
            <Logo size="large" />
          </Link>
        </div>

        {/* DROITE */}
        <div className="hidden lg:flex justify-end gap-4 font-heading">
          {rightLinks}
        </div>
      </Container>
    </div>
  );
};