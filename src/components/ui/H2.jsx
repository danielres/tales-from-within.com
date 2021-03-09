export function H2({ children, align = "center" }) {
  return (
    <h2
      className={`text-xl text-white text-opacity-75 ${
        align === "left"
          ? "text-left"
          : align === "right"
          ? "text-right"
          : "text-center"
      } px-4`}
      style={{
        textShadow:
          "rgb(193, 238, 255) 0px 0px 8px, rgb(193, 238, 255) 0px 0px 16px, rgb(240, 238, 255) 0px 0px 24px ",
        fontFamily: "'Courier Prime'",
      }}
    >
      {children}
    </h2>
  );
}
