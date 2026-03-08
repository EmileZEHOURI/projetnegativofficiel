import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { GymnasesPageContainer } from "@/ui/modules/informations-pratiques/gymnases-pages/gymnases.container";
import { TarifsAidesPageContainer } from "@/ui/modules/informations-pratiques/tarifs-aides-pages/tarifs-aides-pages.container";




export default function TarifsAides() {
  return (
    <>
      <Seo title="Tarifs-Aides" description="Page de Tarifs-Aides" />

      <Layout isLightNavigation>
        <TarifsAidesPageContainer/>
      </Layout>
    </>
  );
}
