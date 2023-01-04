import { Footer } from "./Footer";
import Sidebar from "./Sidebar";
interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {

  return (
    <div className="text-slate-700">
      <Sidebar />
      <div className="ml-60 min-h-screen flex flex-col justify-between">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
        <Footer />
      </div>
    </div>
  );
};
