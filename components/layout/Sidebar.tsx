import Image from "next/image";
import deptLogo from "@images/dept-logo.svg";
import { PrismicLink } from "@prismicio/react";
import SidebarMenu from "./SidebarMenu";
import UserInfo from "@components/UserInfo";
import { useLayoutContext } from "@lib/layoutProvider";

const Sidebar = () => {
  const {
    sidebarState: { open, setOpen },
  } = useLayoutContext();

  return (
    <aside>
      <div
        className={`fixed top-0 left-0 right-0 h-full w-full bg-white/50 backdrop-blur-sm md:hidden ${
          !open ? "hidden" : ""
        }`}
        onClick={() => setOpen(false)}
      />
      <div
        className={`l-0 t-0 transition-width fixed z-10 flex h-full flex-col justify-between bg-white px-4 py-8 shadow-lg duration-75 ${
          open ? "w-60" : "w-0"
        }`}
      >
        <button
          className="absolute -right-3 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md hover:bg-cyan-50"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className={`h-3 w-3 ${!open && "rotate-180"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div className={!open ? "hidden" : ""}>
          <PrismicLink href="/">
            <div className="mb-20 flex">
              <Image className="w-2/3" src={deptLogo} alt="Dept" priority />
              🇦🇷
            </div>
          </PrismicLink>
          <SidebarMenu />
        </div>

        <div className={!open ? "hidden" : ""}>
          <UserInfo />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
