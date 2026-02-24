import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { LandingPageContainer } from "@/ui/modules/landing-page/landing-page.container";

export default function Home() {
  return (
    <>
      <Seo title="Projet Negativ" description="Dieu est Grand" />

      <Layout hideNavigation>
        <LandingPageContainer />
      </Layout>
    </>
  );
}
