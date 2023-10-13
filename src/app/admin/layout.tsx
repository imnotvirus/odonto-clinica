import "react-toastify/dist/ReactToastify.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionProvider from "./../SessionProvider";
import { ThemeProvider } from "./../ThemeProvider";
import { ThemeSwitcher } from "@/components/ToggleTheme";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Odonto Clinica",
  description: "Odonto Clinica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} h-full bg-slate-50 dark:bg-slate-900`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeSwitcher />
          <SessionProvider>{children}</SessionProvider>
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
