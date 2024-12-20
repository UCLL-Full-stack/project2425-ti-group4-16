import Head from "next/head";
import Header from "@/components/header";
import SignupForm from "@/components/signup/signupForm";


export default function Home() {
  return (
    <>
      <Head>
        <title>Evently Sign up</title>
        <meta name="description" content="sign up form" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main >
       
      </main>
    </>
  );
}