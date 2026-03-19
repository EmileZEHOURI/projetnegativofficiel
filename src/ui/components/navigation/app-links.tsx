import { LinkTypes } from "@/lib/link-type";
import { AppLinks, FooterLinks } from "@/types/app-links";
import { AiFillYoutube, AiOutlineInstagram,  AiOutlineTikTok } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


{/* Footer App Links */  }
const footerLeClubList: AppLinks[] = [
  {
    label: "Présentation du Club",
    baseUrl: "/presentation-club",
    type: LinkTypes.INTERNAL,
  },
  {
    label: "Agenda",
    baseUrl: "/agenda",
    type: LinkTypes.INTERNAL,
  },
  {
    label: "Nos Educateurs",
    baseUrl: "/#",
    type: LinkTypes.INTERNAL,
  },
];
const footerLesEquipes: AppLinks[] = [

  {
    label: "Les Equipes Compétitions",
    baseUrl: "/",
    type: LinkTypes.INTERNAL,
  },
  {
    label: "Les Equipes Loisirs",
    baseUrl: "/#",
    type: LinkTypes.INTERNAL,
  },
];
const footerInformationsLinks: AppLinks[] = [
  {
    label: "L'inscription",
    baseUrl: "/informations-pratiques/inscription",
    type: LinkTypes.INTERNAL,
  },
  {
    label: "Les Gymnases",
    baseUrl: "/informations-pratiques/gymnases",
    type: LinkTypes.INTERNAL,
  },
  {
    label: "Tarifs & Aides",
    baseUrl: "/informations-pratiques/tarifs-aides",
    type: LinkTypes.INTERNAL,
  },
  {
    label: "Les Permanences",
    baseUrl: "/informations-pratiques/permanences",
    type: LinkTypes.INTERNAL,
  },
  {
    label: "Les Horaires",
    baseUrl: "/informations-pratiques/horaires",
    type: LinkTypes.INTERNAL,
  },
  {
    label: "Dates et Reprises",
    baseUrl: "/informations-pratiques/dates-reprises",
    type: LinkTypes.INTERNAL,
  },
];

export const footerLeClubColumn: FooterLinks = {
  label: "LE CLUB",
  links: footerLeClubList,
};



export const footerLinks = [
  {
    label: "LES EQUIPES",
    links: footerLesEquipes,
  },
  {
    label: "INFORMATIONS PRATIQUES",
    links: footerInformationsLinks,
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

{/* Body App Links */  }