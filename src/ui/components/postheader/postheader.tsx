import { Typography } from "@/ui/design-system/typography/typography";

interface Props {
  highText: string;
  lowText: string;
}

export const PostHeader = ({ highText, lowText }: Props) => {
  return (
    <section className="mt-1 mb-1 items-center text-center">
      <Typography
        variant="h2-article-title"
        component="h2"
        theme="primary"
        stretch="condensed"
        className="mt-10 justify-center items-center text-center tracking-[0.3em]"
        weight={900}
      >
        {highText}
      </Typography>
      <Typography
        variant="h3-page-title"
        component="h2"
        theme="primary"
        weight={900}
        stretch="extended"
        className="mt-6 justify-center items-center text-center tracking-[-0.02em]"
      >
        {lowText}
      </Typography>
    </section>
  );
};
