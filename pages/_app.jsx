import { useEffect, useContext } from "react";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { useRouter } from "next/router";
import { UserProvider } from "@auth0/nextjs-auth0/client";

import { repositoryName } from "../prismicio";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  // useEffect(() => {
  //   console.log({ user });
  //   console.log({ isAuthenticated });
  //   // checks if the user is authenticated
  //   isAuthenticated ? router.push("/") : router.push("/login");
  // }, [isAuthenticated]);

  return (
    <UserProvider>
      <PrismicProvider internalLinkComponent={Link}>
        <PrismicPreview repositoryName={repositoryName}>
          <Component {...pageProps} />
        </PrismicPreview>
      </PrismicProvider>
    </UserProvider>
  );
}
