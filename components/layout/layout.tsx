import React, { FunctionComponent } from "react";
import Sidebar, { SidebarItem } from "./Sidebar";
import { Footer } from "./footer";

const footer = {
  copyrightOwner: "GEEK SG",
  linkedin: "https://www.linkedin.com/in/raymondyeh/",
  github: "https://github.com/yehjxraymond",
  instagram: "https://www.instagram.com/geek.sg/",
};

interface Props {
  children: React.ReactNode;
  items: SidebarItem[];
}

export const Layout: React.FC<Props> = ({ children, items }) => {
  return (
    <>
      <Sidebar sidebarItems={items} />
      <div className="min-h-screen ml-60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
        <Footer {...footer} />
      </div>
    </>
  );
};

export default Layout;
