import clsx from "clsx";

interface Props {
  variant?:
    | "h2-page-title"
    | "h2-article-title"
    | "h3-page-title"
    | "header-btn"
    | "header-content"
    | "post-informations"
    | "projet-title"
    | "projet-surtitle"
    | "projet-footer"
    | "paragraph"
    | "paragraph-quote";

  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "span" | "li" | "p";
  theme?: "black" | "gray" | "white" | "primary" | "secondary";
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  className?: string;
  children: React.ReactNode;
  stretch?:
    | "ultra-condensed"
    | "condensed"
    | "normal"
    | "extended"
    | "ultra-extended";
  transform?: "uppercase" | "lowercase" | "capitalize" | "normal-case";
}

export const Typography = ({
  variant = "paragraph",
  component: Component = "div",
  theme = "black",
  weight = 400,
  stretch = "normal",
  className,
  children,
  transform = "normal-case",
}: Props) => {
  let variantStyles = "";
  let colorStyles = "";
  let fontStyles = "";
  let stretchStyles: string = "";

  switch (variant) {
    case "h2-page-title":
      variantStyles = "text-h2-page-title";
      fontStyles = "uppercase tracking-wide";
      break;
    case "h2-article-title":
      variantStyles = "text-h2-article-title";
      fontStyles = "uppercase tracking-wide";
      break;
    case "h3-page-title":
      variantStyles = "text-h3-page-title";
      fontStyles = "uppercase tracking-wide";
      break;
    case "header-btn":
      variantStyles = "text-header-btn";
      fontStyles = "uppercase tracking-wide";
      break;
    case "header-content":
      variantStyles = "text-header-content";
      fontStyles = "uppercase tracking-wide";
      break;
    case "post-informations":
      variantStyles = "text-post-informations";
      fontStyles = "uppercase tracking-wide";
      break;
    case "projet-title":
      variantStyles = "text-projet-title";
      fontStyles = "uppercase tracking-wide";
      break;
    case "projet-surtitle":
      variantStyles = "text-projet-surtitle";
      fontStyles = "uppercase tracking-wide";
      break;
    case "projet-footer":
      variantStyles = "text-projet-footer";
      fontStyles = "uppercase tracking-wide";
      break;
    case "paragraph":
      variantStyles = "text-paragraph";
      fontStyles = "tracking-wide";
      break;
    case "paragraph-quote":
      variantStyles = "text-paragraph-quote";
      fontStyles = "uppercase tracking-wide";
      break;
  }

  switch (theme) {
    case "black":
      colorStyles = "text-gray-900";
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
  }

  switch (stretch) {
    case "ultra-condensed":
      stretchStyles = "font-ultra-condensed";
      break;
    case "condensed":
      stretchStyles = "font-condensed";
      break;
    case "extended":
      stretchStyles = "font-extended";
      break;
    case "ultra-extended":
      stretchStyles = "font-ultra-extended";
      break;
    default:
      stretchStyles = "font-normal-stretch";
      break;
  }

  return (
    <Component
      className={clsx(
        "font-anybody",
        transform, // 👈 IMPORTANT
        variantStyles,
        colorStyles,
        fontStyles,
        stretchStyles, // 👈 IMPORTANT
        className,
      )}
      style={{ fontWeight: weight }} // ✅ ICI
    >
      {children}
    </Component>
  );
};
