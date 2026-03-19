import { Typography } from "@/ui/design-system/typography/typography";

type ScheduleRow = {
  cat: string;
  gym: string;
  time: string;
};

type ScheduleSection = {
  title: string;
  rows: ScheduleRow[];
};

interface ScheduleTableProps {
  sections: ScheduleSection[];
  firstCat: string;
  secondCat: string;
  thirdCat: string;
}


export const ScheduleTable = ({ sections, firstCat, secondCat, thirdCat }: ScheduleTableProps) => {
  return (
    <div>
      <div className="mt-[70px] mb-6 grid grid-cols-12 border-b pb-4">
        <div className="col-span-4">
          <Typography variant="caption1" theme="primary" weight={800}>
            {firstCat}
          </Typography>
        </div>

        <div className="col-span-4">
          <Typography variant="caption1" theme="primary" weight={800}>
            {secondCat}
          </Typography>
        </div>

        <div className="col-span-4">
          <Typography variant="caption1" theme="primary" weight={800}>
            {thirdCat}
          </Typography>
        </div>
      </div>

      <div className="space-y-10">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <Typography className="mb-4 font-bold text-gray-600">
              {section.title}
            </Typography>

            <div className="divide-y">
              {section.rows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="grid grid-cols-12 items-center py-4"
                >
                  <div className="col-span-4 text-gray-700">{row.cat}</div>
                  <div className="col-span-4 text-gray-700">{row.gym}</div>
                  <div className="col-span-4 text-gray-700">{row.time}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};