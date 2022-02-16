import React from "react";
import MoreInfo from "../components/MoreInfo";
import Head from "next/head";

export default function links() {
  return (
    <>
      <Head>
        <title>Praveen N. - More Information</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <MoreInfo></MoreInfo>
      </main>
    </>
  );
}
