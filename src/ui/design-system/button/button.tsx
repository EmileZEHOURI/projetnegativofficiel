import clsx from "clsx";
import { Spinner } from "../spinner/spinner";
import { IconProps } from "@/types/iconProps";
import { LinkType, LinkTypes } from "@/lib/link-type";
import Link from "next/link";
import { IconType } from "react-icons";

interface Props {
  size?: "small" | "medium" | "medium-btn-header" | "large";
  variant?:
    | "button-classic"
    | "bpwhite" //je travaille sur ça
    | "bpblack"
    | "accent"
    | "secondary"
    | "outline"
    | "disabled"
    | "ico"
    | "black"
    | "white"
    | "circle"
    | "circleLight"
    | "isLight";
  stretch?:
    | "ultra-condensed"
    | "condensed"
    | "normal"
    | "extended"
    | "ultra-extended";
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  icon?: IconProps;
  iconTheme?: "accent" | "secondary" | "gray" | "black" | "white" | "empty";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  baseUrl?: string;
  linkType?: LinkType;
  onClick?: () => void;
  action?: Function;
  className?: string;
}

export const Button = ({
  size = "medium",
  variant = "accent",
  stretch,
  icon,
  iconTheme = "accent",
  iconPosition = "right",
  disabled = false,
  isLoading = false,
  children,
  baseUrl,
  className,
  weight = 400,
  action = () => {},
  linkType = "internal",
}: Props) => {
  let variantStyles: string = "",
    icoSize: number = 0;
  let textSize = "";
  let padding = "";
  let iconBox = "";
  let fontFamily = "";
  let stretchClass = "";

  switch (variant) {
    case "button-classic":
      variantStyles =
        " bg-transparent border border-white text-white  whitespace-nowrap shrink-0  hover:border-primary/40 hover:text-white transition";
      break;
    case "bpwhite":
      variantStyles =
        " bg-transparent border border-white text-white  whitespace-nowrap shrink-0 rounded-[2rem] hover:bg-white/10 transition";
      break;
    case "bpblack":
      variantStyles =
        " bg-transparent border border-black text-black  whitespace-nowrap shrink-0 rounded-[2rem] hover:bg-white/10 transition";
      break;
    case "accent": //Default
      variantStyles = "bg-transparent border hover:border-secondary-400 text-secondary  transition";
      break;
    case "secondary":
      variantStyles =
        "bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
      break;
    case "black":
      variantStyles = "bg-gray-900 hover:bg-gray-800 text-white  rounded";
      break;
    case "white":
      variantStyles = "bg-white hover:bg-gray-100 text-gray-900 rounded";
      break;
    case "outline":
      variantStyles =
        "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded";
      break;
    case "disabled":
      variantStyles =
        "bg-gray-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed";
      break;

    case "ico":
      if (iconTheme === "accent") {
        variantStyles = "text-white";
      }
      if (iconTheme === "secondary") {
        variantStyles = " text-primary ";
      }
      if (iconTheme === "gray") {
        variantStyles = " text-white ";
      }
      if (iconTheme === "black") {
        variantStyles = " text-gray-200/50 hover:text-white/70 leading-none";
      }
      if (iconTheme === "white") {
        variantStyles = " text-gray-900 ";
      }
      break;

    case "circle":
      variantStyles =
        "flex w-[68px] h-[68px] rounded-full border border-white/70 items-center justify-center p-0 bg-transparent hover:bg-white/10 transition";
      break;
    case "circleLight":
      variantStyles =
        "flex w-[68px] h-[68px] rounded-full border border-black/70 items-center justify-center p-0 bg-transparent hover:bg-black/10 transition";
      break;
    case "isLight":
      variantStyles =
        "bg-transparent border border-black/20 text-primary whitespace-nowrap shrink-0 rounded-[2rem] hover:border-primary/80 transition";
  }

  switch (stretch) {
  case "ultra-condensed":
    stretchClass = "font-ultra-condensed";
    break;
  case "condensed":
    stretchClass = "font-condensed";
    break;
  case "extended":
    stretchClass = "font-extended";
    break;
  case "ultra-extended":
    stretchClass = "font-ultra-extended";
    break;
  default:
    stretchClass = "font-normal-stretch";
}


  const isIcon = variant === "ico" || variant === "circle"|| variant === "circleLight";

  switch (size) {
  case "small":
    textSize = "text-caption3";
    padding = "px-4 py-3";
    iconBox = "w-[40px] h-[40px]";
    icoSize = 18;
    break;

  case "medium":
    textSize = "text-caption3";
    padding = "p-[1rem]";
    iconBox = isIcon ? "w-[40px] h-[40px]" : "w-[90px] h-[90px]";
    icoSize = 20;
    break;

  case "medium-btn-header":
    textSize = "text-caption3";
    padding = "p-[1rem]";
    iconBox = "w-[90px] h-[90px]";
    icoSize = 20;
    break;

  case "large":
    textSize = "text-caption2";
    padding = "px-8 py-4";
    iconBox = isIcon ? "w-[40px] h-[40px]" : "w-[60px] h-[60px]";
    icoSize = 24;
    break;

  default:
    textSize = "text-caption2";
    padding = "px-4 py-3";
    iconBox = isIcon ? "w-[32px] h-[32px]" : "w-[40px] h-[40px]";
    icoSize = 20;
    break;
}
  

  const Icon: IconType | undefined = icon?.icon;

  const buttonContent = (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          {variant === "accent" || variant === "ico" ? (
            <Spinner size="small" variant="white" />
          ) : (
            <Spinner size="small" />
          )}
        </div>
      )}

      <div className={clsx(isLoading && "invisible")}>
        {Icon && variant === "ico" ? (
          <Icon size={icoSize} className="block" />
        ) : (
          <div className={clsx(icon && "flex items-center gap-1")}>
            {Icon && iconPosition === "left" && (
              <Icon size={icoSize} className="block" />
            )}
            {children}
            {Icon && iconPosition === "right" && (
              <Icon size={icoSize} className="block" />
            )}
          </div>
        )}
      </div>
    </>
  );

  const handleClick = () => {
    action?.();
  };

  const sharedStyle = { fontWeight: weight };

  const sizeStyles = clsx(
    textSize || "text-caption2",
    fontFamily,
    isIcon
      ? clsx("flex items-center justify-center", iconBox || "w-[40px] h-[40px]")
      : padding || "px-4 py-3",
  );

  const classes = clsx(
    "inline-flex items-center justify-center font-anybody",
    variantStyles,
    sizeStyles,
     stretchClass,
    
    isLoading && "cursor-wait",
    "relative animate-none", 
    className
  );

  // ✅ Si c’est un lien, on rend un <a> / <Link> avec les mêmes classes
  if (baseUrl) {
    if (linkType === LinkTypes.EXTERNAL) {
      return (
        <a
          href={baseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          style={sharedStyle}
        >
          {buttonContent}
        </a>
      );
    }
    

    return (
      <Link href={baseUrl} className={classes} style={sharedStyle}>
        {buttonContent}
      </Link>
    );
  }

  // ✅ Sinon, on rend un vrai <button>
  return (
    <button
      type="button"
      className={classes } 
      style={sharedStyle}
      onClick={handleClick}
      disabled={disabled || isLoading}
      
    >
      {buttonContent}
    </button>
  );
};
