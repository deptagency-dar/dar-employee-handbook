import Image from "next/image";
import deptLogo from "@images/dept-logo.svg";
import { Button } from "@components/Button";
import { PrismicLink } from "@prismicio/react";
import { NavigationDocument, MenuDocument } from "types/types.generated";
import SidebarMenu from "./SidebarMenu";

export interface SidebarItem {
  title: string;
  href: string;
}
export interface SidebarProps {
  navigation: NavigationDocument;
  menu: MenuDocument;
}

interface NavItemProps {
  children: React.ReactNode;
}

const NavItem = ({ children }: NavItemProps) => {
  return (
    <li className="ml-2 font-semibold tracking-normal text-slate-800 leading-tight py-1 hover:underline">{children}</li>
  );
};

const Sidebar = ({ navigation, menu }: SidebarProps) => {
  return (
    <nav className="l-0 t-0 fixed flex h-screen w-60 flex-col justify-between px-4 py-8 shadow-lg">
      <div>
        <PrismicLink href="/">
          <div className="mb-20 flex">
            <Image className="w-2/3" src={deptLogo} alt="Dept" />
            🇦🇷
          </div>
        </PrismicLink>
        <SidebarMenu menu={menu} />        
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
