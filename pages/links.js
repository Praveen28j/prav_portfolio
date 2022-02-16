import React from "react";
import Links from "../components/Links";
import Head from "next/head";

export default function links() {
  return (
    <>
      <Head>
        <title>Praveen N. - Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <Links></Links>
      </main>
    </>
  );
}
