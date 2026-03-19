import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { HorairesPagesContainer } from "@/ui/modules/informations-pratiques/horaires-pages/horaires-pages.container";




export default function Horaires() {
  return (
    <>
      <Seo title="Horaires" description="Page de Horaires" />

      <Layout hideNavigation>
        <HorairesPagesContainer/>
      </Layout>
    </>
  );
}
