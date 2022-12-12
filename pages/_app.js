import Link from "next/link";
import { SessionProvider } from "next-auth/react";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";

import "../styles/globals.css";

export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <PrismicProvider internalLinkComponent={Link}>
        <PrismicPreview repositoryName={repositoryName}>
          <Component {...pageProps} />
        </PrismicPreview>
      </PrismicProvider>
    </SessionProvider>
  );
}
