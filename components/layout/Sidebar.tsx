import Image from "next/image";
import deptLogo from "@images/dept-logo.svg";
import { PrismicLink } from "@prismicio/react";
import SidebarMenu from "./SidebarMenu";
import { useUser } from "@auth0/nextjs-auth0/client";
import UserInfo from "@components/UserInfo";

const Sidebar = () => {
  const { user } = useUser();
  
  return (
    <aside className="l-0 t-0 fixed flex h-screen w-60 flex-col justify-between px-4 py-8 shadow-lg">
      <div>
        <PrismicLink href="/">
          <div className="mb-20 flex">
            <Image className="w-2/3" src={deptLogo} alt="Dept" priority />
            🇦🇷
          </div>
        </PrismicLink>
        <SidebarMenu />        
      </div>

      <div>
        <UserInfo  />
      </div>
    </aside>
  );
};

export default Sidebar;
