import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { ClubPageContainer } from "@/ui/modules/club-page/club.container";

export default function PresentationClub() {
  return (
    <>
      <Seo title="Présentation du club" description="Page de Présentation" />

      <Layout hideNavigation>
        <ClubPageContainer/>
      </Layout>
    </>
  );
}
