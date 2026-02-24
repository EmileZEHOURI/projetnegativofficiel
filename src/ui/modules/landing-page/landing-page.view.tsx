
import { ArticlePlacement } from "./components/article-placement/article-placement.view";
import { HighPhotoView } from "./components/high-photo/high-photo.view";
import { PresentationClub } from "./components/presentation-club/presentation-club.view";
import { ProjetPart } from "./components/projet-part/projet-part.view";
import { SocialNetworkView } from "./components/social-network/social-network.view";

export const LandingPageView = () => {
  return (
    <>
        <HighPhotoView/>
        <SocialNetworkView/>
        <ArticlePlacement/>
        <PresentationClub/>
        <ProjetPart/>

    </>
  );
};
