import { useEffect, useContext } from "react";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { repositoryName } from "../prismicio";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <PrismicProvider internalLinkComponent={Link}>
        <PrismicPreview repositoryName={repositoryName}>
          <Component {...pageProps} />
        </PrismicPreview>
      </PrismicProvider>
      <ToastContainer />
    </UserProvider>
  );
}
