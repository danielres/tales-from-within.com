import { Stack } from "./ui/Stack";

export function Layout({ children }) {
  return (
    <>
      <div className="container mx-auto max-w-5xl text-center">
        <Stack spacing="lg">
          {children}

          {/* <footer>[FOOTER]</footer> */}
        </Stack>
      </div>
    </>
  );
}
