import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { GymnasesPageContainer } from "@/ui/modules/informations-pratiques/gymnases-pages/gymnases.container";




export default function Gymnases() {
  return (
    <>
      <Seo title="Gymnases" description="Page de Gymnases" />

      <Layout hideNavigation>
        <GymnasesPageContainer/>
      </Layout>
    </>
  );
}
