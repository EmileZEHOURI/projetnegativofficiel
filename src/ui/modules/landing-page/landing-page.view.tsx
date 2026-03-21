import type { InstagramPost } from "@/lib/instagram";

import { PresentationClub } from "./components/presentation-club/presentation-club.view";
import { ProjetPart } from "./components/projet-part/projet-part.view";
import SocialNetworkView from "./components/social-network/social-network.view";
import { FollowSocialNetwork } from "@/ui/components/followSocialNetwork/followSocialNetwork";
import { HomeHeroView } from "@/ui/components/home-hero/home-hero.view";
import { HOME_HERO_SLIDES } from "@/ui/components/home-hero/home-hero.data";
import { ArticlePresentation } from "@/ui/components/article-presentation/article-présentation";
import { PreFooter } from "@/ui/components/prefooter/prefooter";
import { NousContacterPresentation } from "@/ui/components/nous-contacter-presentation/nous-contacter-presentation";
import { ResultsWidgetView } from "@/ui/components/results-widget/results-widget.view";

type Props = {
  posts: InstagramPost[];
};

export const LandingPageView = ({ posts }: Props) => {
  return (
    <> 
      <HomeHeroView slides={HOME_HERO_SLIDES} />
      
      {/* <ResultsWidgetView /> */}

     <FollowSocialNetwork />

      {/* <SocialNetworkView posts={posts} /> A faire plus tard */}

      <ArticlePresentation
        imageSrc="/assets/img-negativ/img-alain/photo-melvin-2.jpeg"
        alt="photo"
        title="SAISON SUIVANTE"
        surtitle="Il y a 1 mois - Le Club"
      /> 
      
      
      
      <ProjetPart />
      <PresentationClub />
      <NousContacterPresentation
        imageSrc="/assets/img-negativ/img-sony/collage-negativ.jpg"
        alt="photo"
        title="NOUS CONTACTER"
        subtitle=""
        baseUrl="/nous-contacter"
      />
    </>
  );
};
