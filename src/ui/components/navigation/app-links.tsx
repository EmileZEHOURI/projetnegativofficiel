import { LinkTypes } from "@/lib/link-type";
import { AppLinks, FooterLinks } from "@/types/app-links";
import { AiFillYoutube, AiOutlineInstagram,  AiOutlineTikTok } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const footerLeClubList: AppLinks[] = [
  {
    label: "Présentation du Club",
    baseUrl: "/#",
    type: LinkTypes.INTERNAL,
  },
  {
    label: "Agenda",
    baseUrl: "/#",
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
    label: "Séniors 1",
    baseUrl: "/#",
    type: LinkTypes.INTERNAL,
  },
  {
    label: "U21 1",
    baseUrl: "/#",
    type: LinkTypes.INTERNAL,
  },
  {
    label: "Les Equipes Compétitions",
    baseUrl: "/#",
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
    baseUrl: "/#",
    type: LinkTypes.INTERNAL,
  },
  {
    label: "Les Gymnases",
    baseUrl: "/#",
    type: LinkTypes.INTERNAL,
  },
  {
    label: "Tarifs & Aides",
    baseUrl: "/#",
    type: LinkTypes.INTERNAL,
  },
  {
    label: "Les Permanences",
    baseUrl: "/#",
    type: LinkTypes.INTERNAL,
  },
  {
    label: "Les Horaires",
    baseUrl: "/#",
    type: LinkTypes.INTERNAL,
  },
  {
    label: "Dates et Reprises",
    baseUrl: "/#",
    type: LinkTypes.INTERNAL,
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
