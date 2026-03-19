import { Button } from "@/ui/design-system/button/button";
import { footerSocialsNetworksLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";
import { RiCrossLine } from "react-icons/ri";

interface Props {
  theme?: "gray" | "accent" | "secondary" | "white" | "black";
  icoSize?: "small" | "medium" | "large";
  className?: string;
}

export const SocialNetworksButtons = ({ className, theme="black", icoSize="large" }: Props) => {
  const icoList = footerSocialsNetworksLinks.map((socialNetwork) => (
    <Button
      key={uuidv4()}
      variant="ico"
      iconTheme={theme}
      size={icoSize}
      
      icon={{
        icon: socialNetwork.icon ? socialNetwork.icon : RiCrossLine,
        
      }}
      baseUrl={socialNetwork.baseUrl}
      linkType={socialNetwork.type}
    />
  ));

  return <div className={clsx(className)}>{icoList}</div>;
};
