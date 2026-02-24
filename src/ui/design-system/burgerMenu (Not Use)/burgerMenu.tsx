import clsx from "clsx";
import type { IconBaseProps } from "react-icons";

type Props = IconBaseProps & {
  variant?: "primary" | "white";
};

export const BurgerMenu = ({
  size = 50,           // <- number|string comme react-icons
  className,
  variant = "primary",
}: Props) => {
  const variantStyles = variant === "white" ? "text-white" : "text-primary";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={clsx(
        variantStyles,
        "bg-gray-400 rounded-full relative",
        className
      )}
    >
      <path d="M20 7L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 17L4 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};
