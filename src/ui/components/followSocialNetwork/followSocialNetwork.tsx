import { Typography } from "@/ui/design-system/typography/typography";

import { SocialNetworkView } from "@/ui/modules/landing-page/components/social-network/social-network.view";
import { SocialNetworksButtons } from "../navigation/social-networks-buttons";

interface Props {}

export const FollowSocialNetwork = () => {
  return (
    <div className=" flex gap-10 px-10 py-20  ">
      <div >
        <Typography  variant="h5" component="h5" >
          SUIVEZ L'ACTUALITÉ DU CLUB SUR LES RÉSEAUX SOCIAUX @NEGATIV_BASKETBALL
        </Typography>
      </div>
      <SocialNetworksButtons theme="secondary" className="flex items-center gap-1" icoSize="small" />

    </div>
  );
};
