import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";

interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

const Layout = ({ children, showFooter = true }: LayoutProps) => {
  return (
    <>
      <CustomCursor />
      <main>{children}</main>
      {showFooter && <Footer />}
      <Navbar />
    </>
  );
};

export default Layout;
