import React from "react";
import { Footer } from "./Footer";
import Sidebar from "./Sidebar";

const footer = {
  copyrightOwner: "GEEK SG",
  linkedin: "https://www.linkedin.com/in/raymondyeh/",
  github: "https://github.com/yehjxraymond",
  instagram: "https://www.instagram.com/geek.sg/",
};

export const Layout = ({ navigation, settings, children }) => {
  return (
    <div className="text-slate-700">
      <Sidebar navigation={navigation} settings={settings} />
      <div className="ml-60 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
        <Footer {...footer} />
      </div>
    </div>
  );
};
