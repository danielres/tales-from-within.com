import { Stack } from "./Stack";

export function Layout({ children }) {
  return (
    <>
      <div className="container mx-auto max-w-3xl text-center">
        <Stack spacing="lg">
          {children}

          <footer>[FOOTER]</footer>
        </Stack>
      </div>
    </>
  );
}
