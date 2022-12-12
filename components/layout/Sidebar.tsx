import React, { FunctionComponent } from "react";
import { useSession, signOut } from "next-auth/react";

import Image from "next/image";
import deptLogo from "@images/dept-logo.svg";
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
  const { data: session } = useSession();

  return (
    <nav className="l-0 t-0 fixed h-screen w-60 px-12 pt-12 shadow-lg">
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
      <div>
        <p>Welcome {session.user?.email}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    </nav>
  );
};

export default Sidebar;
