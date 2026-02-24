interface Props {
  size?: "very-small" | "small" | "medium" | "large" | "xl-footer";
  variant?: "basic" | "secondary";
}

export const Logo = ({ size = "medium", variant = "basic" }: Props) => {
  let sizeLogo: number;
  let logoSrc: string;

  switch (size) {
    case "very-small":
      sizeLogo = 34;
      break;
    case "small":
      sizeLogo = 61;
      break;
    case "medium": //Default
      sizeLogo = 88;
      break;
    case "large":
      sizeLogo = 100;
      break;
    case "xl-footer":
      sizeLogo = 246;
      break;
  }

  switch (variant) {
    case "basic":
      logoSrc = "/assets/img-negativ/svg/logo-footer.svg";
      break;
    case "secondary":
      logoSrc = "/assets/img-negativ/svg/logo-header.svg";
      break;
  }

  return (
    <div>
      <img src={logoSrc} width={sizeLogo} height={sizeLogo} alt="Logo" />
    </div>
  );
};
