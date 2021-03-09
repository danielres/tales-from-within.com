import { BgFixed } from "../components/BgFixed";
// import { Flicker } from "../components/Flicker";
import { Spiral } from "../components/Spiral";
import { Stars } from "../components/Stars";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="relative z-0">
        <BgFixed />
        <Spiral />
        <Stars />
        {/* <Flicker /> */}
      </div>

      <div className="relative z-10">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
