import { Footer } from "../navigation/footer";
import { Navigation } from "../navigation/navigation";



interface Props {
  children: React.ReactNode;
  hideNavigation?: boolean;
}

export const Layout = ({ children, hideNavigation = false }: Props) => {
  return (
    <>
      {!hideNavigation && <Navigation />}
      {children}
      <Footer />
    </>
  );
};
