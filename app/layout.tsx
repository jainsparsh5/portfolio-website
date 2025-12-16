import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitch from "@/components/theme-switch";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sparsh Jain | Personal Portfolio",
  description:
    "Sparsh Jain is a software engineer based in India. He is passionate about building products that make a difference.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-slate-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-[#0a0a0f] dark:text-gray-50 dark:text-opacity-90 overflow-x-hidden`}
      >
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-violet-400/30 via-purple-400/20 to-fuchsia-400/30 blur-[100px] morph-blob gradient-shift dark:from-violet-600/20 dark:via-purple-600/15 dark:to-fuchsia-600/20" />
          <div className="absolute top-[40%] left-[-15%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cyan-400/25 via-blue-400/20 to-indigo-400/25 blur-[100px] morph-blob gradient-shift dark:from-cyan-600/15 dark:via-blue-600/10 dark:to-indigo-600/15" style={{ animationDelay: '-2s' }} />
          <div className="absolute bottom-[-10%] right-[20%] w-[450px] h-[450px] rounded-full bg-gradient-to-br from-rose-400/20 via-pink-400/15 to-orange-400/20 blur-[100px] morph-blob gradient-shift dark:from-rose-600/10 dark:via-pink-600/08 dark:to-orange-600/10" style={{ animationDelay: '-4s' }} />
          <div className="absolute top-[60%] right-[40%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-emerald-400/20 via-teal-400/15 to-cyan-400/20 blur-[80px] morph-blob gradient-shift dark:from-emerald-600/10 dark:via-teal-600/08 dark:to-cyan-600/10" style={{ animationDelay: '-6s' }} />
        </div>
        
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),transparent)] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),transparent)]" />
        
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster 
              position="top-right"
              toastOptions={{
                style: {
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#fff',
                },
              }}
            />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
