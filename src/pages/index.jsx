import Head from "next/head";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Tales from Within music</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-gray-400 text-6xl">Tales from Within</h1>
      </main>
    </Layout>
  );
}
