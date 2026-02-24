import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { Footer } from "../navigation/footer";
import { Navigation } from "../navigation/navigation";

interface Props {
  children: React.ReactNode;
  hideNavigation?: boolean;

  isDisplayBreadCrumbs?: boolean;
  isLightNavigation?: boolean;
}

export const Layout = ({
  children,
  hideNavigation = false,
  isDisplayBreadCrumbs = false,
  isLightNavigation = false,
}: Props) => {
  return (
    <>
      {!hideNavigation && (
        <Navigation isLight={isLightNavigation} />
)}
      {isDisplayBreadCrumbs && <Breadcrumbs />}
      {children}
      <Footer />
    </>
  );
};
