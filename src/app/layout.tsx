import "../styles/globals.css";
import "../styles/Vars.scss";
import "../styles/Styles.scss";
// import "../styles/lib/gsap.css";
import type { Metadata } from "next";
import { Poppins, Roboto, Nunito, Cabin } from "next/font/google";
import { getLayoutAPI } from "../libs/layoutapi";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});
const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});
const cabin = Cabin({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "FRNZ",
  description: "Frenzz Official Website",
  icons: "favicon.png",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const apiLayoutData: Promise<layoutdata> = getLayoutAPI();
  const layoutJson = await apiLayoutData;
  const { HeaderData, FooterData, productsData, gameData } = layoutJson;

  return (
    <html lang="en">
      <body className={`${roboto.className} bg-bg`}>
        {HeaderData && productsData && gameData ? (
          <Header
            HeaderData={HeaderData}
            productsData={productsData}
            gameData={gameData}
          />
        ) : null}

        {children}

        {FooterData && productsData ? (
          <Footer FooterData={FooterData} productsData={productsData} />
        ) : null}
      </body>
    </html>
  );
}
