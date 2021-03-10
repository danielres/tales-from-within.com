import { InlineIcon } from "../icons/InlineIcon";

export function LinkSocial({ Icon, href, children }) {
  return (
    <a
      target="_blank"
      href={href}
      className="text-white opacity-80 hover:opacity-100 transition transition-opacity duration-200"
    >
      <InlineIcon>
        <Icon />
      </InlineIcon>{" "}
      {children}
    </a>
  );
}
