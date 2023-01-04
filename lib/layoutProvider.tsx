import { Layout } from "@components/layout";
import SpinnerArea from "@components/SpinnerArea";
import React, { useContext } from "react";
import useSWR, { Fetcher } from 'swr';
import { MenuDocument } from "types/types.generated";

interface ILayoutContext {
  menuDocument: MenuDocument | null;
}

const LayoutContext = React.createContext<ILayoutContext>({
  menuDocument: null,
});

export const useLayoutContext = () => useContext(LayoutContext);

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const fetcher: Fetcher<MenuDocument, string> = (...args) => fetch(...args).then(res => res.json());  
  const { data } = useSWR<MenuDocument>('/api/layout', fetcher);
  
  return (
    <LayoutContext.Provider value={{ menuDocument: data || null }}>
      <SpinnerArea>
        <Layout>
          {children}
        </Layout>
      </SpinnerArea>
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
