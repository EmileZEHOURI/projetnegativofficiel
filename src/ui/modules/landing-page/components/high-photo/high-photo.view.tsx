import { Container } from "@/ui/components/container/container";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Typography } from "@/ui/design-system/typography/typography";
import clsx from "clsx";
import Image from "next/image";

interface Props {
  imageSrc: string;
  alt: string;
  className?: string;
  typoVariant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"; //pas utilisé
  styleVariant?: "primary" | "secondary"; //pas utilisé
  position?: "center" | "left" | "right";
  title: string;
  surtitle?: string;
}

export const HighPhotoView = ({
  imageSrc = "/",
  alt = " ",
  position = "center",
  title = "null",
  surtitle = "",
}: Props) => {
  let positionStyles = "";
  switch (position) {
    case "center":
      positionStyles = "relative z-10 flex h-full items-center justify-center";
      break;
    case "left":
      positionStyles = "absolute bottom-8 left-8 z-10 text-left";
      break;
    case "right":
      positionStyles = "justify-end text-right";
      break;
  }

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      <Image src={imageSrc} alt={alt} fill priority className="object-cover" />

      {/* Overlay */}
      <div className="absolute inset-0 z-10">
        <Navigation variant="overlay" />

        {/* Texte qui suit le même max-width/padding que le burger */}

        <Container className="h-full flex flex-col items-start justify-end pb-10 ">
          <Typography variant="h6" component="h1" theme="white" className="">
            {surtitle}
          </Typography>

          <Typography
            variant="h3"
            component="h1"
            theme="white"
            className=" text-shadow-lg mt-[40px]"
          >
            {title}
          </Typography>
        </Container>
      </div>
    </section>
  );
};
