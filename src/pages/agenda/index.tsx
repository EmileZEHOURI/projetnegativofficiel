import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";

import { AgendaPageContainer } from "@/ui/modules/agenda-page/component/agenda.container";

export default function Agenda() {
  return (
    <>
      <Seo title="Agenda" description="Page de Présentation" />

      <Layout >
        <AgendaPageContainer/>
      </Layout>
    </>
  );
}
