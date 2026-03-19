import { Container } from "@/ui/components/container/container";
import { HighPhotoView } from "@/ui/components/high-photo/high-photo.view";
import { Typography } from "@/ui/design-system/typography/typography";
import { PreFooter } from "@/ui/components/prefooter/prefooter";
import { Button } from "@/ui/design-system/button/button";
import { ScheduleTable } from "@/ui/components/schedule-table/schedule-table";
import {
  LES_HORAIRES,
  LES_VACANCES_SCOLAIRES,
  SCHEDULE_DATA,
} from "./horaires-data";

export const HorairesPagesView = () => {
  return (
    <>
      <HighPhotoView
        title="LES HORAIRES"
        surtitle=" INFORMATIONS PRATIQUES "
        imageSrc="/assets/img-negativ/img-alain/photo-adam-1.jpeg"
        alt="Photo du Club"
      />

      <Container className="mt-[70px] flex h-full flex-col items-center pl-[106px] pr-[106px]">
        <div className="max-w-4xl px-2">
          <div className="grid grid-cols-12 gap-x-10 gap-y-12">
            <div className="col-start-1 col-span-5">
              <Typography
                variant="caption1"
                component="h5"
                theme="primary"
                className="tracking-tighter"
                stretch="extended"
                weight={800}
              >
                LES HORAIRES 2025-2026
              </Typography>
            </div>

            <div className="col-start-9 col-span-5">
              <Typography
                variant="caption2"
                component="div"
                theme="gray"
              >
                {LES_HORAIRES}
              </Typography>

              <Button
                variant="accent"
                size="medium"
                baseUrl="https://basketparis14.com/wp-content/uploads/2025/06/PLANNING-BP14-Saison-2526-060625-.pdf"
                linkType="external"
                className="mt-[40px] tracking-tight font-normal"
                weight={800}
              >
                PLANNING SAISON 2025-2026
              </Button>
            </div>

            <div className="col-start-1 col-span-5">
              <Typography
                variant="caption1"
                component="h5"
                theme="primary"
                className="tracking-tighter"
                stretch="extended"
                weight={800}
              >
                LES VACANCES SCOLAIRES
              </Typography>
            </div>

            <div className="col-start-9 col-span-5">
              <Typography
                variant="caption2"
                component="div"
                theme="gray"
              >
                {LES_VACANCES_SCOLAIRES}
              </Typography>
            </div>
          </div>

          <ScheduleTable sections={SCHEDULE_DATA} firstCat="CATÉGORIES" secondCat="GYMNASES" thirdCat="HORAIRES" />
        </div>

        <PreFooter
          highText="DÉCOUVRIR AUSSI"
          lowText="LES GYMNASES"
          href="/informations-pratiques/gymnases"
        />
      </Container>
    </>
  );
};