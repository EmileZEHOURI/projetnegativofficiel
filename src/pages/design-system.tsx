//COMPONENT
import { Container } from "@/ui/components/container/container";
import { Seo } from "@/ui/components/seo/seo";
//DESIGN SYSTEM

import { Typography } from "@/ui/design-system/typography/typography";

import { Layout } from "@/ui/components/layout/layout";
import { Button } from "@/ui/design-system/button/button";

export default function DesignSystem() {
  return (
    <div>
      <Seo title="Projet Negativ" description="Dieu est Grand" />
      <Layout>
        <Container>
          {/* Typography*/}
          <Typography variant="projet-title" component="div" className="mb-4">
            Typography
          </Typography>
          <div className="flex  items-center gap-4 p-10 border border-gray-400 rounded">
            <div className="items-center gap-4 p-1 space-y-6 ">
              <Typography
                variant="h2-page-title"
                weight={900}
                component="div"
                stretch="extended"
                className="tracking-[-0.02em]"
              >
                H2-PAGE-TITLE
              </Typography>
              <Typography
                variant="h2-article-title"
                weight={900}
                component="div"
                stretch="normal"
                className="tracking-[0.02em]"
              >
                H2-ARTICLE-TITLE
              </Typography>

              <Typography
                variant="header-btn"
                weight={900}
                component="div"
                stretch="extended"
                className="tracking-[-0.02em]"
              >
                Header BTN
              </Typography>
              <Typography
                variant="header-content"
                weight={900}
                component="div"
                stretch="normal"
                className="tracking-[0.02em]"
              >
                Header Content
              </Typography>
              <div className="flex ">
                <Typography
                  variant="post-informations"
                  weight={400}
                  component="span"
                  stretch="normal"
                  className="tracking-[0.02em]"
                >
                  Post-Informations <strong> Autre informations</strong>
                </Typography>
              </div>

              <div className="flex flex-col mt-5 mb-5 text-center gap-4">
                <Typography
                  variant="projet-surtitle"
                  weight={900}
                  component="div"
                  stretch="condensed"
                  className="tracking-[0.2em]"
                >
                  PROJET-SURTITLE
                </Typography>
                <Typography
                  variant="projet-title"
                  weight={900}
                  component="div"
                  stretch="extended"
                  className="tracking-[-0.02em]"
                >
                  PROJET-TITLE
                </Typography>
                <Typography
                  variant="projet-footer"
                  weight={900}
                  component="div"
                  stretch="normal"
                  className="tracking-[0.02em]"
                >
                  PROJET-FOOTER
                </Typography>
              </div>
              <div></div>
              <Typography
                variant="paragraph"
                weight={400}
                component="div"
                stretch="normal"
                className="tracking-[0.02em]"
              >
                Paragraph
              </Typography>
              <Typography
                variant="paragraph-quote"
                weight={900}
                component="div"
                stretch="extended"
                className="tracking-[-0.02em]"
              >
                Paragraph-Quote
              </Typography>
            </div>
          </div>

          {/* Button*/}
          <Typography
            variant="projet-title"
            component="div"
            className="mt-4 mb-4"
          >
            Button
          </Typography>

          <div className="flex flex-col  gap-4 p-10 border border-gray-400 rounded">
            <div className="">
              <Button
                size="small"
                variant="bpblack"
                weight={700}
                stretch="extended"
              >
                BpmMedium Button
              </Button>
              <Button
                size="medium-btn-header"
                variant="bpblack"
                weight={700}
                stretch="extended"
              >
                BpmMedium Button
              </Button>
              <Button
                size="large"
                variant="bpblack"
                weight={700}
                stretch="extended"
              >
                BpmMedium Button
              </Button>
            </div>
            <div className="items-center">
              <Button
                size="small"
                variant="button-classic"
                weight={900}
                stretch="normal"
                className="tracking-tight py-[1rem] px-[2em] text-primary"
              >
                BUTTON-CLASSIC
              </Button>
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  );
}
