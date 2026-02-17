import clsx from "clsx";
import { Spinner } from "../spinner/spinner";
import { IconProps } from "@/types/iconProps";

interface Props {
  size?: "small" | "medium" | "large";
  variant?:
    | "accent"
    | "secondary"
    | "outline"
    | "disabled"
    | "ico"
    | "black"
    | "white";
  icon?: IconProps;
  iconTheme?: "accent" | "secondary" | "gray" | "black" | "white" |"empty";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
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
    case "ico":
      if (iconTheme === "accent") {
        variantStyles =
           "text-white";
      }
      if (iconTheme === "secondary") {
        variantStyles =
          " text-primary ";
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
  }

  switch (size) {
    case "small":
      sizeStyles = `text-caption3 font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[40px] h-[40px]"
          : "px-[14px] py-[11px]"
      }`;
      icoSize = 18;
      break;
    case "medium": //Default
      sizeStyles = `text-caption2 font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[50px] h-[50px]"
          : "px-[18px] py-[15px]"
      }`;
      icoSize = 20;
      break;
    case "large":
      sizeStyles = `text-caption1 font-medium ${
        variant === "ico"
          ? " flex items-center justify-center w-[60px] h-[60px]"
          : "px-[22px] py-[12px]"
      }`;
      icoSize = 30;
      break;
  }

  return (
    <>
      <button
        type="button"
        className={clsx(
          variantStyles,
          sizeStyles,
          isLoading && "cursor-wait",
          "relative animate-none",
        )}
        onClick={() => console.log("click")}
        disabled={disabled || isLoading}
      >
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
          {icon && variant === "ico" ? (
            <icon.icon size={icoSize} className="block" />
          ) : (
            <div className={clsx(icon && "flex items-center gap-1")}>
              {icon && iconPosition === "left" && <icon.icon size={icoSize} className="block" />}
              {children}
              {icon && iconPosition === "right" && <icon.icon size={icoSize} className="block"/>}
            </div>
          )}
        </div>
      </button>
    </>
  );
};
