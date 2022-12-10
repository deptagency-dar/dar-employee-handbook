import React, { FunctionComponent } from "react";
import Image from "next/image";
import deptLogo from "./dept-logo.svg";
import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";

export interface SidebarItem {
  title: string;
  href: string;
}

export interface SidebarProps {
  sidebarItems: SidebarItem[];
}

const NavItem = ({ children }) => {
  return (
    <li className="font-semibold tracking-tight text-slate-800 ">{children}</li>
  );
};

const Sidebar: FunctionComponent<SidebarProps> = ({ navigation }) => {
  return (
    <nav className="l-0 t-0 fixed h-screen w-60 px-12 pt-12 shadow-lg">
      <PrismicLink href="/">
        <div className="mb-20 flex">
          <Image className="w-2/3" src={deptLogo} alt="Dept" />
          🇦🇷
        </div>
      </PrismicLink>
      <div className="list-none">
        <NavItem>
          <PrismicLink href="/">
            <PrismicText field={navigation.data.homepageLabel} />
          </PrismicLink>
        </NavItem>
        {navigation.data?.links.map((item) => (
          <NavItem key={prismicH.asText(item.label)}>
            <PrismicLink field={item.link}>
              <PrismicText field={item.label} />
            </PrismicLink>
          </NavItem>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
