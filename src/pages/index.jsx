import Head from "next/head";
import { Layout } from "../components/Layout";
import { Stack } from "../components/Stack";

const tracks = ["reefs", "dreamstate"];

export default function Home() {
  return (
    <>
      <div className="xl:mt-16 mb-16">
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
      </div>

      <Layout>
        <Head>
          <title>Tales from Within music</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Stack spacing="xl">
            <Stack spacing="xs">
              {tracks.map((slug) => (
                <Card>
                  <SCTrack track={slug} />
                </Card>
              ))}
            </Stack>

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

                {/* <SCPlaylist /> */}
              </Stack>
            </Card>

            <div className="">
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
      className="bg-black bg-opacity-30 p-6 rounded-xl z-50 relative"
      // style={{ backgroundColor: "#e7dfffb5" }}
    >
      {children}
    </div>
  );
}

function PageTitle({ children }) {
  return (
    <h1 className="text-4xl text-center bg-black bg-opacity-30 rounded py-16 z-50 relative">
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
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/504227907&color=%233bb4cb&auto_play=false&hide_related=true&show_comments=true&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false&sharing=false&show_playcount=false"
    ></iframe>
  );
}

function SCTrack({
  id,
  track = "reefs",
  artist = "tales-from-within",
  color = "5d5c62",
  inverse = true,
  autoPlay = false,
  showUser = false,
  size = 1,
}) {
  const url = `https://soundcloud.com/${artist}/${track}`;

  return (
    <iframe
      width="100%"
      height={size === 1 ? 20 : size === 2 ? 130 : 20}
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      src={`https://w.soundcloud.com/player/?url=${url}&color=%23${color}&inverse=${inverse}&auto_play=${autoPlay}&show_user=${showUser}`}
    ></iframe>
  );
}

function ProfilePic() {
  return (
    <img
      src="/profile1.jpg"
      className="rounded-full"
      width={120}
      height={120}
    />
  );
}
