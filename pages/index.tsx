import Head from "next/head";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu v2.1 - App </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hulu 2.1</h1>
      <Header></Header>
      <NavBar></NavBar>
    </div>
  );
}
