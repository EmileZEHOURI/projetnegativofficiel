import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";

import { InscriptionPageContainer } from "@/ui/modules/informations-pratiques/inscription/inscription.container";

export default function Inscription() {
  return (
    <>
      <Seo title="Inscription" description="Page d'inscription" />

      <Layout isLightNavigation >
        <InscriptionPageContainer />
      </Layout>
    </>
  );
}
