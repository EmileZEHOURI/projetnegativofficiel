import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "../container/container";
import Image from "next/image";
import { footerApplicationLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import { ActiveLink } from "./active-link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerNavigationList = footerApplicationLinks.map((element) => (
    <div key={uuidv4()}>{element.label}</div>
  ));

  return (
    <div className="bg-gray ">
      <Container className="flex justify-between pt-16">
        <div className="flex flex-col item-center gap-1">
          <Typography variant="caption1" theme="white" weight="medium">
            Formation gratuites
          </Typography>
          <Typography variant="caption3" theme="gray" weight="medium">
            Abonne-toi à la chaine
          </Typography>
          <a href="#/" target="https://www.youtube.com/">
            <Image
              src="/assets/svg/youtube.svg"
              width={229}
              height={216}
              alt="Remote Monkey | Youtube"
            />
          </a>
        </div>
        <div className="">
          <FooterLink />
        </div>
      </Container>

      <Container className="pt-9 pb-11 space-y-11">
        <hr className="text-gray-800" />
        <div className="flex items-center justify-between">
          <Typography variant="caption4" theme="gray">
            {`Copyright ${currentYear}| Propulsed by`}{" "}
            <a href="https://youtube.com" target="_blank" className="underline">
              {" "}
              Emile ZEHOURI
            </a>{" "}
            {` - Remote monkey SASU `}
          </Typography>
        </div>
      </Container>
    </div>
  );
};

const FooterLink = () => {
  const linksList = footerApplicationLinks.map((link) => (
    <div key={uuidv4()}>
      {link.type === "internal" && (
        <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>
      )}
      {link.type === "external" && (
        <a href={link.baseUrl} target="_blank">
          {link.label}
        </a>
      )}
    </div>
  ));

  return (
    <div className="min-w-[190px]">
      <Typography
        theme="white"
        variant="caption2"
        weight="medium"
        className="pb-5"
      >
        Titre
      </Typography>
      <Typography theme="gray" variant="caption3" className="space-y-4">
        {linksList}
      </Typography>
    </div>
  );
};
