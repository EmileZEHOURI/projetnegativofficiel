
import { ArticlePlacement } from "./components/article-placement/article-placement.view";
import { HighPhotoView } from "../../components/high-photo/high-photo.view";
import { PresentationClub } from "./components/presentation-club/presentation-club.view";
import { ProjetPart } from "./components/projet-part/projet-part.view";
import { SocialNetworkView } from "./components/social-network/social-network.view";
import { FollowSocialNetwork } from "@/ui/components/followSocialNetwork/followSocialNetwork";

export const LandingPageView = () => {
  return (
    <>
        <HighPhotoView imageSrc="/assets/img-negativ/img/photo-group-1.jpg" alt="Photo du Club" title="Le Nouveau Club Parisien"/>

        <FollowSocialNetwork/>
        
        <SocialNetworkView/>
        <ArticlePlacement/>
        <PresentationClub/>
        <ProjetPart/>

    </>
  );
};
