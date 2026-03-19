
import { ArticlePlacement } from "./components/article-placement/article-placement.view";
import { HighPhotoView } from "../../components/high-photo/high-photo.view";
import { PresentationClub } from "./components/presentation-club/presentation-club.view";
import { ProjetPart } from "./components/projet-part/projet-part.view";
import { SocialNetworkView } from "./components/social-network/social-network.view";
import { FollowSocialNetwork } from "@/ui/components/followSocialNetwork/followSocialNetwork";
import { HomeHeroView } from "@/ui/components/home-hero/home-hero.view";
import { HOME_HERO_SLIDES } from "@/ui/components/home-hero/home-hero.data";

export const LandingPageView = () => {


  return (
    <>
       <HomeHeroView slides={HOME_HERO_SLIDES} />

         <FollowSocialNetwork/>
        
        <SocialNetworkView/>
        <ArticlePlacement/>
        <PresentationClub/>
        <ProjetPart/>

    </>
  );
};
