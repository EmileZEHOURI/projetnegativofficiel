import { Container } from "@/ui/components/container/container";
import { HighPhotoView } from "@/ui/components/high-photo/high-photo.view";
import { Typography } from "@/ui/design-system/typography/typography";
import React from "react";
import { DATES_REPRISES_CONTENT, SCHEDULE_REPRISES_DATA } from "./dates-reprises-data";
import { ScheduleTable } from "@/ui/components/schedule-table/schedule-table";
import { PreFooter } from "@/ui/components/prefooter/prefooter";


export const DatesReprisesPagesView = () => {
  return (
    <>
      <HighPhotoView
        title="DATES REPRISES"
        surtitle=" INFORMATIONS PRATIQUES "
        imageSrc="/assets/img-negativ/img-alain/group-bench-photo-2.jpeg"
        alt="Photo du Club"
      />

      <Container className="flex flex-col h-full pl-[106px] pr-[106px] items-center">
        <div className="max-w-2xl px-6">
          <Typography
            variant="caption2"
            component="div"
            theme="gray"
            weight={400}
            className="mt-10 self-start"
          >
            {DATES_REPRISES_CONTENT}
          </Typography>
        </div>

        <div className="max-w-4xl w-full px-2">
          <ScheduleTable
            sections={SCHEDULE_REPRISES_DATA}
            firstCat="CATÉGORIES"
            secondCat="GYMNASES"
            thirdCat="DATES ET HEURES"
          />
        </div>

        <PreFooter highText="DÉCOUVRIR AUSSI" lowText="LES GYMNASES" href="/informations-pratiques/gymnases"/>
      </Container>
    </>
  );
};
