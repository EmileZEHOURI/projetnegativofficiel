import clsx from "clsx";

interface Props {
  variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "lead"
    | "body-lg"
    | "body-base"
    | "body-sm"
    | "caption1"
    | "caption2"
    | "caption3"
    | "caption4";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "span" | "li" | "p";
  theme?: "black" | "gray" | "white" | "primary" | "secondary";
  weight?: "regular" | "medium";
  className?: string;
  children: React.ReactNode;
  font?: "heading" | "body"
}

export const Typography = ({
  variant = "h3",
  component: Component = "div",
  theme = "black",
  weight = "regular",
  className,
  children,
}: Props) => {
  let variantStyles: string = "",
    colorStyles: string = "",
    fontStyles: string = "";

  switch (variant) {
    case "display":
      variantStyles = "text-8xl";
      fontStyles = "font-heading uppercase tracking-wide";
      break;
    case "h1":
      variantStyles = "text-7xl";
      fontStyles = "font-heading uppercase tracking-wide";
      break;
    case "h2":
      variantStyles = "text-6xl";
      fontStyles = "font-heading uppercase tracking-wide";
      break;
    case "h3": //Default
      variantStyles = "text-5xl";
      fontStyles = "font-heading uppercase tracking-wide";
      break;
    case "h4":
      variantStyles = "text-4xl";
      fontStyles = "font-heading uppercase tracking-wide";
      break;
    case "h5":
      variantStyles = "text-3xl";
      fontStyles = "font-heading uppercase tracking-wide";
      break;
    case "lead":
      variantStyles = "text-2xl";
      fontStyles = "font-body";
      break;
    case "body-lg":
      variantStyles = "text-lg";
      fontStyles = "font-body";
      break;
    case "body-base":
      variantStyles = "text-base";
      fontStyles = "font-body";
      break;
    case "body-sm":
      variantStyles = "text-sm";
      fontStyles = "font-body";
      break;
    case "caption1":
      variantStyles = "text-caption1";
      fontStyles = "font-body";
      break;
    case "caption2":
      variantStyles = "text-caption2";
      fontStyles = "font-body";
      break;
    case "caption3":
      variantStyles = "text-caption3";
      fontStyles = "font-body";
      break;
    case "caption4":
      variantStyles = "text-caption4";
      fontStyles = "font-body";
      break;
  }

  switch (theme) {
    case "black": //Default
      colorStyles = "text-gray";
      break;
    case "gray":
      colorStyles = "text-gray-700";
      break;
    case "white":
      colorStyles = "text-white";
      break;
    case "primary":
      colorStyles = "text-primary";
      break;
    case "secondary":
      colorStyles = "text-secondary";
      break;

    default:
      break;
  }

  return (
    <Component
      className={clsx(
        variantStyles,
        colorStyles,
        fontStyles,
        weight === "medium" && "font-medium",
        className,
        theme,
      )}
    >
      {children}
    </Component>
  );
};
