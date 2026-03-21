interface Props {
  size?: "very-small" | "small" | "medium" | "large" | "xl-footer";
  variant?: "basic" | "secondary";
  className?: string;
}

export const Logo = ({
  size = "medium",
  variant = "basic",
  className = "",
}: Props) => {
  let sizeLogo: number;
  let logoSrc: string;

  switch (size) {
    case "very-small":
      sizeLogo = 34;
      break;
    case "small":
      sizeLogo = 61;
      break;
    case "medium":
      sizeLogo = 88;
      break;
    case "large":
      sizeLogo = 100;
      break;
    case "xl-footer":
      sizeLogo = 150;
      break;
    default:
      sizeLogo = 88;
  }

  switch (variant) {
    case "basic":
      logoSrc = "/assets/img-negativ/svg/logo-footer.svg";
      break;
    case "secondary":
      logoSrc = "/assets/img-negativ/svg/logo-header.svg";
      break;
    default:
      logoSrc = "/assets/img-negativ/svg/logo-footer.svg";
  }

  return (
    <div
      className={`shrink-0 ${className}`}
      style={{ width: `${sizeLogo}px`, height: `${sizeLogo}px` }}
    >
      <img
        src={logoSrc}
        alt="Logo"
        width={sizeLogo}
        height={sizeLogo}
        style={{
          width: `${sizeLogo}px`,
          height: `${sizeLogo}px`,
          minWidth: `${sizeLogo}px`,
          minHeight: `${sizeLogo}px`,
          maxWidth: "none",
        }}
      />
    </div>
  );
};