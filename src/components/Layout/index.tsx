import { ReactElement } from "react";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

interface LayoutProps {
  children: ReactElement;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
