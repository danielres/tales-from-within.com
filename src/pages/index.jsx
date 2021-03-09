import Head from "next/head";
import { Layout } from "../components/Layout";
import { Stack } from "../components/Stack";

export default function Home() {
  return (
    <>
      <PageTitle>
        <div
          className="opacity-80 text-white"
          style={{ textShadow: "0 0 16px #FFFFFF" }}
        >
          Tales from Within
        </div>
        <div
          className="text-white text-lg "
          style={{ textShadow: "0 0 16px #c722f5", color: "#837af2" }}
        >
          Inner &amp; outer space travels
        </div>
      </PageTitle>
      <Layout>
        <Head>
          <title>Tales from Within music</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Stack spacing="xl">
            <Card>
              <Stack spacing="sm">
                <h2 className="text-gray-800">
                  <div className="text-lg opacity-75">
                    <span
                      style={{
                        textShadow: "0 0 5px rgba(200, 100, 200, 1)",
                      }}
                    >
                      All tracks
                    </span>
                  </div>
                </h2>

                <SCPlaylist />
              </Stack>
            </Card>
            <div
              className="relative z-50 rounded-full opacity-90"
              style={{
                width: 120,
                height: 120,
                left: "calc(50% - 60px)",
              }}
            >
              <ProfilePic />
            </div>
          </Stack>
        </main>
      </Layout>
    </>
  );
}

function Card({ children }) {
  return (
    <div
      className="bg-white bg-opacity-80 p-6 rounded z-50 relative"
      style={{ backgroundColor: "#e7dfffb5" }}
    >
      {children}
    </div>
  );
}

function PageTitle({ children }) {
  return (
    <h1 className="text-4xl text-center my-16 bg-black bg-opacity-30 rounded py-16 z-50 relative">
      {children}
    </h1>
  );
}

function SCPlaylist() {
  return (
    <iframe
      width="100%"
      height="350"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/504227907&color=%233bb4cb&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    ></iframe>
  );
}

function ProfilePic() {
  return <img src="/profile1.jpg" className="rounded-full " />;
}
