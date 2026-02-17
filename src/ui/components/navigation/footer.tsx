import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "../container/container";
import Image from "next/image";
import { footerLeClubColumn, footerLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import { ActiveLink } from "./active-link";
import { FooterLinks } from "@/types/app-links";
import { LinkTypes } from "@/lib/link-type";
import { SocialNetworksButtons } from "./social-networks-buttons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerNavigationList = footerLinks.map((colomnLinks) => (
    <FooterLink key={uuidv4()} data={colomnLinks} />
  ));

  return (
    <div className="bg-black ">
      <Container className="flex items-start gap-16 pt-16">
        <a href="/" target="_blank">
          <Image
            src="assets/svg/logo-footer.svg"
            width={246}
            height={246}
            alt="Logo Negativ"
          />
        </a>
        {/* Colonne Le Club*/}
        <div className="">
          <Typography
            theme="white"
            variant="caption2"
            weight="medium"
            className="pb-5"
          >
            INSCRIPTIONS
          </Typography>
          <FooterLink data={footerLeClubColumn} />
        </div>
        {/* Colonne Equipes et Info Pratiques*/}
        <div className="flex gap-16">{footerNavigationList}</div>

        {/* Colonne Les Projets Les Actualités Nous Contacter */}

        <div className="min-w-[190px] flex flex-col h-full">
          <div className="flex flex-col gap-4">
            <Typography
              theme="white"
              variant="caption2"
              weight="medium"
              className="pb-5"
            >
              LES PROJETS
            </Typography>
            <Typography
              theme="white"
              variant="caption2"
              weight="medium"
              className="pb-5"
            >
              LES ACTUALITES
            </Typography>
            <Typography
              theme="white"
              variant="caption2"
              weight="medium"
              className="pb-5"
            >
              NOUS CONTACTER
            </Typography>
          </div>
          {/*Bloc Réseau Sociaux*/}
  
            <div className="mt-6">
              <SocialNetworksButtons className="flex items-center gap-1" />
            </div>
        </div>
      </Container>

      <Container className="pt-9 pb-11 space-y-11">
        <hr className="border-gray-800" />
        <div className="flex flex-col justify-center items-center gap-3 flex-wrap text-center">
          <ul className="flex items-center ">
            <li className="">
              <Typography variant="caption4" theme="gray">
                Mentions Légales
              </Typography>
            </li>
          </ul>
          <div className="">
            <Typography variant="caption4" theme="gray">
              {`© Copyright ${currentYear} - `}
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Negativ Basketball
              </a>
            </Typography>
          </div>
          {/* Bloc Liens */}
        </div>
      </Container>
    </div>
  );
};

interface footerLinkProps {
  data: FooterLinks;
}

const FooterLink = ({ data }: footerLinkProps) => {
  const linksList = data.links.map((link) => (
    <div key={uuidv4()}>
      {link.type === LinkTypes.INTERNAL && (
        <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>
      )}
      {link.type === LinkTypes.EXTERNAL && (
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
        {data.label}
      </Typography>
      <Typography theme="gray" variant="caption3" className="space-y-4">
        {linksList}
      </Typography>
    </div>
  );
};
