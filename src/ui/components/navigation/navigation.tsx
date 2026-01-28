import { Logo } from "@/ui/design-system/logo/logo";
import { Container } from "../container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import Link from "next/link";
import { ActiveLink } from "./active-link";

export const Navigation = () => {
  return (
    <div className="border-b-2 border-gray-400">
      <Container className=" flex items-center justify-between py-1.5 gap-7">
        <Link href="/">
          <div className="flex items-center gap-2.5">
            <Logo size="small" />
            <div>
              <div className="text-gray font-extrabold text-[24px]">
                Negativ Basketball
              </div>
              <Typography variant="caption4" theme="gray" component="span">
                Le nouveau club parisien
              </Typography>
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-7">
          <Typography
            variant="caption3"
            component="div"
            className="flex items-center gap-7"
          >
            <ActiveLink href="/design-system"> Design-System</ActiveLink>
            <ActiveLink href="/projets"> Projets</ActiveLink>
            <ActiveLink href="/formation"> Formation</ActiveLink>
            <ActiveLink href="/contact"> Contact</ActiveLink>
          </Typography>
          <div className="flex items-center gap-2">
            <Button size="small">Connexion</Button>
            <Button size="small" variant="secondary">
              Rejoindre
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
