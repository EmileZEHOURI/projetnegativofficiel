import { Typography } from "@/ui/design-system/typography/typography";

import { SocialNetworksButtons } from "../navigation/social-networks-buttons";

interface Props {}

export const FollowSocialNetwork = () => {
  return (
    <div className=" flex gap-5 px-10 py-20 justify-between  ">
      <div className="max-w-2xl">
        <Typography  variant="h3-page-title" component="h5" weight={800} theme="black"  className="tracking-tight" >
          SUIVEZ L'ACTUALITÉ DU CLUB<br />  SUR LES RÉSEAUX SOCIAUX <br /> @NEGATIVBASKETBALL
        </Typography>
      </div>
      <SocialNetworksButtons theme="secondary" className="flex items-center gap-1" icoSize="medium" />

    </div>
  );
};
