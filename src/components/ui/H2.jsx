export function H2({ children }) {
  return (
    <h2
      className="text-xl"
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
