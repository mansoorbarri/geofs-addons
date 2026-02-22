import "~/styles/globals.css";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "GeoFS Addons Hub",
  description: "A center for GeoFS addons developed by xyzmani"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 font-sans text-slate-100 antialiased">
        <main className="flex-1 flex flex-col items-center justify-center">
          {children}
        </main>
        <footer className="w-full border-t border-slate-800 py-6 text-center text-sm text-slate-400">
          Developed by{" "}
          <a
            href="https://discord.com/users/xyzmani"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-400 hover:text-blue-300 hover:underline"
          >
            xyzmani
          </a>
        </footer>
      </body>
    </html>
  );
}
