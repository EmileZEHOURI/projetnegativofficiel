import { Typography } from "@/ui/design-system/typography/typography";


interface Props {

    highText: string;
    lowText: string;

}

export const PreFooter = ({highText, lowText }: Props) => {
  return (
    <section className="mt-[187px] mb-[211px] items-center text-center">
         <Typography
            variant="h6"
            component="span"
            theme="gray"
            className="justify-center items-center text-center tracking-[0.30em]"
          >
            {highText}
          </Typography>
           <Typography
            variant="h4"
            component="h4"
            theme="primary"
            className="mt-9 justify-center items-center text-center tracking-[0.30em]"
          >
            {lowText}
          </Typography>
    </section>
  );
};
