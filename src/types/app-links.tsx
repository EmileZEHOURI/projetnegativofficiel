import { LinkType } from "@/lib/link-type";
import { IconType } from "react-icons";

export interface AppLinks{
    label: string;
    baseUrl: string;
    type: LinkType; // @Todo refactor this
    icon?: IconType;
    target?: "_self" | "_blank";
    
}

export interface FooterLinks{
    label: string;
    links: AppLinks[];
}

export type FooterSimpleLink = {
  label: string;
  href: string;
  target?: "_self" | "_blank";
};