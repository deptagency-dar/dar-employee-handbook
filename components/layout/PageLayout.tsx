import { useLayoutContext } from "@lib/layoutProvider";
import { Footer } from "./Footer";
import Sidebar from "./Sidebar";
interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const { sidebarState } = useLayoutContext();
  const { open: sidebarOpen } = sidebarState;
  return (
    <div className="text-slate-700">
      <Sidebar />
      <div
        className={`flex h-full min-h-screen flex-col justify-between overflow-x-auto ${
          sidebarOpen && "md:ml-60"
        }`}
      >
        <div className="container mx-auto px-10">{children}</div>
        <Footer />
      </div>
    </div>
  );
};
