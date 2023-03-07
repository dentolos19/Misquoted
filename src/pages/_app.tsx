import "@/styles/global.scss";
import Head from "next/head";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Misquoted</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}