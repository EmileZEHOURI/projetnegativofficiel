import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import Link from "next/link";
import { Container } from "../container/container";
import { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { Sidebar } from "../sidebar/sidebar";

export const Navigation = ({
  variant = "default",
}: {
  variant?: "default" | "overlay";
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    console.log("sidebarOpen:", sidebarOpen);
  }, [sidebarOpen]);

  return (
    <div
      className={
        variant === "overlay" ? "absolute top-0 left-0 w-full z-50" : ""
      }
    >
      <Container className="relative grid grid-cols-2 items-center py-6 bg-transparent">
        {/* GAUCHE */}
        <div className="flex justify-start">
          <Button variant="circle" action={() => setSidebarOpen(true)}>
            <div className="flex flex-col justify-between h-5">
              <HiOutlineMenu size={44} className="text-white " />
            </div>
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
        <div className="hidden lg:flex justify-end gap-4 font-heading ">
          <Button size="bpmedium" variant="bpwhite">
            INFORMATIONS PRATIQUES
          </Button>
          <Button size="bpmedium" variant="bpwhite">
            S'INSCRIRE
          </Button>
        </div>
      </Container>
    </div>
  );
};
