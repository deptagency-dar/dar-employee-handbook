import { Router } from "next/router";
import { useEffect, useState } from "react";
import { Loading } from "./Loading";

export const Spinner = () => {
  return (
    <div
      role="status"
      className="fixed top-0 left-0 flex h-full w-full items-center justify-center"
    >
      <div className="flex h-14 w-14 animate-spin items-center justify-center rounded-full bg-sky-500 bg-gradient-to-tr from-sky-500 to-white">
        <div className="h-12 w-12 rounded-full bg-white"></div>
      </div>
    </div>
  );
};
interface Props {
  children: React.ReactNode;
}

const SpinnerArea = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const start = () => setIsLoading(true);        
        const end = () => setIsLoading(false);
        Router.events.on('routeChangeStart', start);
        Router.events.on('routeChangeComplete', end);
        Router.events.on('routeChangeError', end);
        return () => {
          Router.events.off('routeChangeStart', start);
          Router.events.off('routeChangeComplete', end);
          Router.events.off('routeChangeError', end);
        };
      }, []);
  
  return (
    <>
      {isLoading && <Loading />}
      <div className={isLoading ? "opacity-25" : ""}>{children}</div>
    </>
  );
};

export default SpinnerArea;
