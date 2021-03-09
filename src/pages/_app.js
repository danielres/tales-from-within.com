import { BgFixed } from "../components/BgFixed";
import { Stars } from "../components/Stars";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <BgFixed />
      <Stars />

      <div className="relative z-10">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
