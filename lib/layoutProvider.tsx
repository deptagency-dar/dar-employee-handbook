import { Layout } from "@components/layout";
import SpinnerArea from "@components/SpinnerArea";
import React, { useContext, useState } from "react";
import useSWR, { Fetcher } from "swr";
import { MenuDocument } from "types/types.generated";

interface SidebarState {
  open: boolean;
  setOpen: (value: boolean) => void;
}
interface ILayoutContext {
  sidebarState: SidebarState;
  menuDocument: MenuDocument | null;
}

interface ILayoutResponse {
  menu: MenuDocument;
}

const LayoutContext = React.createContext<ILayoutContext>({
  sidebarState: {} as SidebarState,
  menuDocument: null,
});

export const useLayoutContext = () => useContext(LayoutContext);

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const fetcher: Fetcher<ILayoutResponse, string> = (...args) =>
    fetch(...args).then((res) => res.json());
  const { data } = useSWR<ILayoutResponse>("/api/layout", fetcher);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <LayoutContext.Provider
      value={{
        menuDocument: data?.menu || null,
        sidebarState: {
          open: sidebarOpen,
          setOpen: setSidebarOpen,
        } as SidebarState,
      }}
    >
      <SpinnerArea>
        <Layout>{children}</Layout>
      </SpinnerArea>
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
