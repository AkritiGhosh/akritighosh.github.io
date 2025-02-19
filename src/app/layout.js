import localFont from "next/font/local";
import "./globals.css";
import Taskbar from "@/components/desktop/taskbar/Taskbar";
import { ModalContextProvider } from "@/context/ModelContext";

export const metadata = {
  title: "Akriti Ghosh",
  description: "Portfolio for experienced Frontend Developer - Akriti Ghosh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`antialiased`}
      >
        <ModalContextProvider>
          {children}
          <Taskbar />
        </ModalContextProvider>
      </body>
    </html>
  );
}
