import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Link from "next/link";


interface Props {

    highText?: string;
    lowText: string;
    href:string;


}

export const PreFooter = ({highText = "DÉCOUVRIR AUSSI", lowText, href="/" }: Props) => {
  return (
    <section className="mt-[170px] mb-[170px] items-center text-center">
         <Typography
            variant="paragraph"
            component="span"
            theme="gray"
            className="justify-center items-center text-center tracking-[0.32em] uppercase"
            stretch="condensed"
            weight={800}
          >
            {highText}
          </Typography>
           <Typography
            variant="h3-page-title"
            component="h4"
            theme="primary"
            className="mt-5 justify-center items-center text-center "
            weight={800}
            stretch="extended"
           
          >
            <Link href={href} className="hover:text-primary/80">
             {lowText} 
            </Link>
            
            
            
          </Typography>
    </section>
  );
};
