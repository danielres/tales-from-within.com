import Head from "next/head";
import { Layout } from "../components/Layout";
import { Card } from "../components/ui/Card";
import { H2 } from "../components/ui/H2";
import { ProfilePic } from "../components/ui/ProfilePic";
import { Ribbon } from "../components/ui/Ribbon";
import { SCTrack } from "../components/ui/Soundcloud/SCTrack";
import { Stack } from "../components/ui/Stack";

const tracks = [
  "dreamstate",
  "reefs",
  "oceanfloor",
  "impossible-suns",
  "another-dream",
  "a-brief-history-of-time",
  "strange-loop",
  "final-frontier",
  "slingshot",
  "star-signals",
  "trails-of-fire",
  "octopus-dream",
];

export default function Home() {
  return (
    <>
      <div className="xl:mt-16 mb-16">
        <PageTitle />
      </div>

      <Layout>
        <Head>
          <title>Tales from Within music</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Stack spacing="xl">
            <H2>Latest tracks</H2>

            <Stack spacing="xs">
              {tracks.map((slug) => (
                <Card>
                  <SCTrack track={slug} />
                </Card>
              ))}
            </Stack>

            <div className="">
              <ProfilePic src="/profile1.jpg" />
            </div>
          </Stack>
        </main>
      </Layout>
    </>
  );
}

function PageTitle() {
  return (
    <Ribbon>
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
    </Ribbon>
  );
}
