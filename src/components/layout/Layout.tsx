import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";
import PageTransition from "./PageTransition";

interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

const Layout = ({ children, showFooter = true }: LayoutProps) => {
  return (
    <>
      <CustomCursor />
      <PageTransition>
        <main>{children}</main>
        {showFooter && <Footer />}
      </PageTransition>
      <Navbar />
    </>
  );
};

export default Layout;
