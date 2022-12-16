import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { repositoryName } from "../prismicio";
import useLoadingPage from "../hooks/useLoadingPage";
import SpinnerArea from '../components/SpinerArea';

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const [isLoading] = useLoadingPage();

  return (
    <UserProvider>
      <PrismicProvider internalLinkComponent={Link}>
        <PrismicPreview repositoryName={repositoryName}>
          <SpinnerArea loading={isLoading}>
            <Component {...pageProps} />
          </SpinnerArea>
        </PrismicPreview>
      </PrismicProvider>
      <ToastContainer />

    </UserProvider>
  );
}
