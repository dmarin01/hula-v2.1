import Head from "next/head";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hula v2.1 - App </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <NavBar></NavBar>
    </div>
  );
}
