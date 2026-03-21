import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { NousContacterPageContainer } from "@/ui/modules/nous-contacter-page/nous-contacter-page.container";




export default function NousContacter() {
  return (
    <>
      <Seo title="Nous-Contacter" description="Page de Contact" />

      <Layout isLightNavigation>
        <NousContacterPageContainer/>
      </Layout>
    </>
  );
}
