import Facebook from "../icons/Facebook";
import Soundcloud from "../icons/Soundcloud";
import { LinkSocial } from "../ui/LinkSocial";

export function Social() {
  return (
    <div className="grid grid-cols-2 text-white">
      <div className="text-right mr-4">
        <LinkSocial
          href="https://soundcloud.com/tales-from-within"
          Icon={Soundcloud}
        >
          Soundcloud
        </LinkSocial>
      </div>

      <div className="text-left ml-4">
        <LinkSocial
          href="https://soundcloud.com/tales-from-within"
          Icon={Facebook}
        >
          Facebook
        </LinkSocial>
      </div>
    </div>
  );
}
