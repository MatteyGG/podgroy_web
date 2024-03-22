import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../app/components/navbar";
import Footer from "../app/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Подгорой",
  description: "Ваш дом в дали от дома",
  icons: {
    icon: ["/favicon.ico"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="../" />
      </head>

      <body className={inter.className}>
        <main className="w-[90%] mx-auto">
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
