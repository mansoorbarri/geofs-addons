import "~/styles/globals.css";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "GeoFS Addons Hub",
  description:
    "Explore community-built addons for GeoFS: Radar, VStrips, Charts, and Tab-Key.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-gradient-to-br from-slate-50 via-white to-slate-100 font-sans text-gray-900 antialiased">
        <main className="flex-1 flex flex-col items-center justify-center">
          {children}
        </main>
        <footer className="w-full border-t border-slate-200 py-6 text-center text-sm text-slate-400">
          Developed by{" "}
          <a
            href="https://discord.com/users/xyzmani"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 hover:underline"
          >
            xyzmani
          </a>
        </footer>
      </body>
    </html>
  );
}