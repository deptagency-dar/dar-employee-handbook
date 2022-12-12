import React from "react";
import { Footer } from "./Footer";
import Sidebar from "./Sidebar";

export const Layout = ({ navigation, children }) => {
  return (
    <div className="text-slate-700">
      <Sidebar navigation={navigation} />
      <div className="ml-60 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
        <Footer />
      </div>
    </div>
  );
};
