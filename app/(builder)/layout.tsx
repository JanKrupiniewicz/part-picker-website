import { PartsContextProvider } from "@/services/providers/PartsContext";

export default function BuilderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PartsContextProvider>{children}</PartsContextProvider>;
}
