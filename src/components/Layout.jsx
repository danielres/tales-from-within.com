import { Stack } from "./Stack";
import { Stars } from "./Stars";

export function Layout({ children }) {
  return (
    <>
      <Stars />

      <div className="container mx-auto max-w-3xl text-center">
        <Stack spacing="lg">
          {children}

          <footer>[FOOTER]</footer>
        </Stack>
      </div>
    </>
  );
}
