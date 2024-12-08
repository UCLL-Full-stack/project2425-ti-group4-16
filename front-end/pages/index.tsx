import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header";


export default function Home() {
  return (
    <>
      <Head>
        <title>Evently</title>
        <meta name="description" content="Evently app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main >
        
      </main>
    </>
  );
}
