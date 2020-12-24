import Head from "next/head";
import { HomeContainer } from "../containers";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Iqbal Fasri</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer />
    </div>
  );
}
