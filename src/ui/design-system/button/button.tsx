import clsx from "clsx";
import { Spinner } from "../spinner/spinner";
import { IconProps } from "@/types/iconProps";
import { LinkType, LinkTypes } from "@/lib/link-type";
import Link from "next/link";
import { IconType } from "react-icons";

interface Props {
  size?: "small" | "medium" | "large" | "bpmedium";
  variant?:
    | "accent"
    | "secondary"
    | "outline"
    | "disabled"
    | "ico"
    | "black"
    | "white"
    | "bpwhite" //je travaille sur ça
    | "circle"
    | "circleLight"
    | "isLight";
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
}

export const Button = ({
  size = "medium",
  variant = "accent",
  icon,
  iconTheme = "accent",
  iconPosition = "right",
  disabled = false,
  isLoading = false,
  children,
  baseUrl,
  action = () => {},
  linkType = "internal",
}: Props) => {
  let variantStyles: string = "",
    sizeStyles: string = "",
    icoSize: number = 0;

  switch (variant) {
    case "accent": //Default
      variantStyles = "bg-primary hover:bg-primary-400 text-white rounded";
      break;
    case "secondary":
      variantStyles =
        "bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
      break;
    case "black":
      variantStyles = "bg-gray-900 hover:bg-gray-800 text-white rounded";
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
    case "bpwhite":
      variantStyles =
        " bg-transparent border border-white text-white  whitespace-nowrap shrink-0 rounded-[2rem] hover:bg-white/10 transition";
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
        variantStyles = " text-white leading-none";
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
        "bg-transparent border border-black text-primary whitespace-nowrap shrink-0 rounded-[2rem] hover:bg-black hover:text-white transition";
  }

  switch (size) {
    case "bpmedium":
      sizeStyles = `text-caption4 font-medium ${
        variant === "bpwhite"
          ? "px-[38px] py-[16px] flex flex-row  items-center justify-end "
          : "px-[18px] py-[15px]"
      }`;

      break;
    case "small":
      sizeStyles = `text-caption3 font-medium ${
        variant === "ico" || variant === "circle"
          ? "flex items-center justify-center w-[40px] h-[40px]"
          : "px-[14px] py-[11px]"
      }`;
      icoSize = 18;
      break;
    case "medium": //Default
      sizeStyles = `text-caption2 font-medium ${
        variant === "ico" || variant === "circle"
          ? "flex items-center justify-center w-[90px] h-[90px]"
          : "px-[18px] py-[15px]"
      }`;
      icoSize = 20;
      break;
    case "large":
      sizeStyles = `text-caption1 font-medium ${
        variant === "ico" || variant === "circle"
          ? " flex items-center justify-center w-[60px] h-[60px]"
          : "px-[22px] py-[12px]"
      }`;
      icoSize = 30;
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

  const buttonElement = (
    <>
      <button
        type="button"
        className={clsx(
          variantStyles,
          sizeStyles,
          isLoading && "cursor-wait",
          "relative animate-none",
        )}
        onClick={handleClick}
        disabled={disabled || isLoading}
      >
        {buttonContent}
      </button>
    </>
  );

  if (baseUrl) {
    if (linkType === LinkTypes.EXTERNAL) {
      return (
        <a href={baseUrl} target="_blank">
          {buttonElement}
        </a>
      );
    } else {
      return <Link href={baseUrl}>{buttonElement} </Link>;
    }
  }
  return buttonElement;
};
