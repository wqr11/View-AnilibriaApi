import { montserrat } from "@/util/fonts";

import "@/styles/globals.css";

import Provider from "@/util/Provider";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "view",
  description: "An anilibria's api based anime website built by <WQR!>",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${montserrat.className} bg-[#212529]`}>
        <Provider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
