import React, { FunctionComponent } from "react";
import Image from "next/image";
import deptLogo from "@images/dept-logo.svg";
import * as prismicH from "@prismicio/helpers";
import { Button } from "@components/Button";
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
    <nav className="l-0 t-0 fixed flex h-screen w-60 flex-col justify-between px-12 py-12 shadow-lg">
      <div>
        <PrismicLink href="/">
          <div className="mb-20 flex">
            <Image className="w-2/3" src={deptLogo} alt="Dept" />
            🇦🇷
          </div>
        </PrismicLink>
        <div className="list-none">
          {navigation.data?.links.map((item) => (
            <NavItem key={prismicH.asText(item.label)}>
              <PrismicLink field={item.link}>
                <PrismicText field={item.label} />
              </PrismicLink>
            </NavItem>
          ))}
        </div>
      </div>
      <div>
        <Button className="w-full">
          <a className="w-full text-center" href="/api/auth/logout">
            Logout
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default Sidebar;
