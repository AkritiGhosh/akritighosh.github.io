import localFont from "next/font/local";
import "./globals.css";
import Taskbar from "@/components/desktop/taskbar/Taskbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Akriti Ghosh",
  description: "Portfolio for experienced Frontend Developer - Akriti Ghosh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Taskbar />
      </body>
    </html>
  );
}
