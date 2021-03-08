import Head from "next/head";
import { Layout } from "../components/Layout";
import { Stack } from "../components/Stack";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Tales from Within music</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTitle>
        <div className="opacity-90" style={{ textShadow: "0 0 16px #FFFFFF" }}>
          Tales from Within
        </div>
        <div className="text-xl opacity-50">
          Inner &amp; outer space travels
        </div>
      </PageTitle>

      <main>
        <Stack spacing="xs">
          <Card>
            <Stack spacing="sm">
              <h2 className="text-gray-800">
                <div className="text-lg opacity-75">All tracks</div>
              </h2>
              <div className="opacity-100">
                <iframe
                  width="100%"
                  height="350"
                  scrolling="no"
                  frameborder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/504227907&color=%233bb4cb&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                ></iframe>
              </div>
            </Stack>
          </Card>
        </Stack>
      </main>
    </Layout>
  );
}

function Card({ children }) {
  return (
    <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg">
      {children}
    </div>
  );
}

function PageTitle({ children }) {
  return <h1 className="text-white text-4xl text-center my-16">{children}</h1>;
}
