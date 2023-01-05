import Link from "next/link";
import { AppProps } from "next/app";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { repositoryName } from "../prismicio";
import useLoadingPage from "@hooks/useLoadingPage";

import "../styles/globals.css";
import LayoutProvider from "@lib/layoutProvider";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading] = useLoadingPage();

  return (
    <UserProvider>
      <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
        <PrismicPreview repositoryName={repositoryName}>
          <LayoutProvider>
            <Component {...pageProps} />
          </LayoutProvider>
        </PrismicPreview>
      </PrismicProvider>
      <ToastContainer />
    </UserProvider>
  );
}
