import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { PermanencesPageContainer } from "@/ui/modules/permanences-page/permanences.container";


export default function Inscription() {
  return (
    <>
      <Seo title="Permanences" description="Page Permanences" />

      <Layout isLightNavigation >
        <PermanencesPageContainer/>
      </Layout>
    </>
  );
}
