import { Footer } from "./Footer";
import Sidebar from "./Sidebar";
import { NavigationDocument } from "../../types/types.generated";

interface Props {
  children: React.ReactNode;
  navigation: NavigationDocument;
}

export const Layout = ({ navigation, children }: Props) => {
  return (
    <div className="text-slate-700">
      <Sidebar navigation={navigation} />
      <div className="ml-60 min-h-screen flex flex-col justify-between">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
        <Footer />
      </div>
    </div>
  );
};
