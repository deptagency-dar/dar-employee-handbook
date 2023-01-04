import Image from "next/image";
import deptLogo from "@images/dept-logo.svg";
import { Button } from "@components/Button";
import { PrismicLink } from "@prismicio/react";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  return (
    <nav className="l-0 t-0 fixed flex h-screen w-60 flex-col justify-between px-4 py-8 shadow-lg">
      <div>
        <PrismicLink href="/">
          <div className="mb-20 flex">
            <Image className="w-2/3" src={deptLogo} alt="Dept" />
            🇦🇷
          </div>
        </PrismicLink>
        <SidebarMenu />        
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
