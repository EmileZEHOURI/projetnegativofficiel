import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { DatesReprisesPagesContainer } from "@/ui/modules/informations-pratiques/dates-reprises-pages/dates-reprises-pages.container";





export default function DatesReprises() {
  return (
    <>
      <Seo title="Dates Reprises" description="Page de Gymnases" />

      <Layout hideNavigation>
        <DatesReprisesPagesContainer/>
      </Layout>
    </>
  );
}
