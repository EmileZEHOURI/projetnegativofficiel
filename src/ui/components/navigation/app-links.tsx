import { LinkTypes } from "@/lib/link-type";
import { AppLinks, FooterLinks, FooterSimpleLink } from "@/types/app-links";
import { AiFillYoutube, AiOutlineInstagram,  AiOutlineTikTok } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


export const footerPrimaryColumns: FooterLinks[] = [
  {
    label: "INSCRIPTIONS",
    links: [
      {
        label: "INSCRIPTION",
        baseUrl: "/informations-pratiques/inscription",
        type: LinkTypes.INTERNAL,
      },
         {
        label: "LE CLUB",
        baseUrl: "/presentation-club",
        type: LinkTypes.INTERNAL,
      },
    ],
  },
  {
    label: "LES ÉQUIPES",
    links: [
      {
        label: "LES ÉQUIPES COMPÉTITIONS",
        baseUrl: "/les-equipes-competitions",
        type: LinkTypes.INTERNAL,
      },
      {
        label: "LES ÉQUIPES LOISIRS",
        baseUrl: "/les-equipes-loisirs",
        type: LinkTypes.INTERNAL,
      },
    ],
  },
  {
    label: "INFORMATIONS PRATIQUES",
    links: [
      {
        label: "GYMNASES",
        baseUrl: "/informations-pratiques/gymnases",
        type: LinkTypes.INTERNAL,
      },
      {
        label: "TARIFS & AIDES",
        baseUrl: "/informations-pratiques/tarifs-aides",
        type: LinkTypes.INTERNAL,
      },
      {
        label: "LES PERMANENCES",
        baseUrl: "/permanences",
        type: LinkTypes.INTERNAL,
      },
      {
        label: "LES HORAIRES",
        baseUrl: "/informations-pratiques/horaires",
        type: LinkTypes.INTERNAL,
      },
      {
        label: "DATES DE REPRISES",
        baseUrl: "/informations-pratiques/dates-reprises",
        type: LinkTypes.INTERNAL,
      },
    ],
  },
];

export const footerSecondaryLinks: FooterSimpleLink[] = [
  {
    label: "LES PROJETS",
    href: "/les-projets-1",
    target: "_self",
  },
  {
    label: "LES ACTUALITÉS",
    href: "/les-actualités",
    target: "_self",
  },
  {
    label: "NOUS CONTACTER",
    href: "/nous-contacter",
    target: "_self",
  },
];

export const footerBottomLinks: FooterSimpleLink[] = [
  {
    label: "Mentions Légales",
    href: "/mentions-legales",
    target: "_self",
  },
];

export const footerSocialsNetworksLinks: AppLinks[] = [
  {
    label: "Youtube",
    baseUrl: "https://www.youtube.com/@NEGATIVBasketball",
    type: LinkTypes.EXTERNAL,
    icon: AiFillYoutube,
  },
  {
    label: "Instagram",
    baseUrl: "https://www.instagram.com/negativ.basketball/",
    type: LinkTypes.EXTERNAL,
    icon:AiOutlineInstagram,
  },
  {
    label: "TikTok",
    baseUrl: "https://www.tiktok.com/@negativ.basketball",
    type: LinkTypes.EXTERNAL,
    icon: AiOutlineTikTok,
  },
  {
    label: "Linkedin",
    baseUrl: "https://www.linkedin.com/company/ngvbasket/posts/?feedView=all",
    type: LinkTypes.EXTERNAL,
    icon: FaLinkedinIn,
  },
];



{/* Header App Links */  }

export const leftButtonsLinks: AppLinks[] = [
  {
  label: "INFORMATIONS PRATIQUES",
    baseUrl: "informations-pratiques/gymnases/",
    type: LinkTypes.INTERNAL,
  },
  {
    label: "S'INSCRIRE",
    baseUrl: "/informations-pratiques/inscription",
    type: LinkTypes.INTERNAL,
  }
]

