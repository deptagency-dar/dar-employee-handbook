import React, { FC } from "react";
import { NavigationDocument } from "types.generated";
import { Footer } from "./Footer";
import Sidebar from "./Sidebar";

interface Props {
  children: React.ReactNode;
  navigation: NavigationDocument;
}

export const Layout: FC<Props> = ({ navigation, children }) => {
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
