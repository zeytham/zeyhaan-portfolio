import localFont from "next/font/local";
import "./globals.css";

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
  title: "Zeyhaan Tech Solution",
  description: "Building Smart Systems for a Digital Future — Web Development, Systems Engineering, Data Analysis & Technical Documentation. Based in Zanzibar, Tanzania.",
  keywords: "Zeyhaan Tech Solution, Web Development, Systems Engineering, Data Analysis, LaTeX, Zanzibar, Tanzania",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
},
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
