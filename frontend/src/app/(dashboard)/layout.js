import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import SessionHandler from "@/components/SessionHandler";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-screen h-screen bg-[#131418]">
          <SessionHandler>
            <div className="w-full h-full">
              <div className="w-full h-24 px-20 py-5">
                <Navbar />
              </div>
              <div className="w-full h-[calc(100vh-6rem)]">
                {children}
              </div>
            </div>
          </SessionHandler>
        </div>
      </body>
    </html>
  );
}
