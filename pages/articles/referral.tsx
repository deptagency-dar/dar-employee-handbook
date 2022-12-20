import React from "react";
import { createClient } from "../../prismicio";

export default function referral({ page, navigation, settings }) {
  console.log(page);
  return <div>referral</div>;
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID('article', 'referral')

  return {
    props: {
      page,
    },
  };
}
