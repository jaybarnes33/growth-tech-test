import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
const Layout = ({ children }) => {
  useEffect(() => {
    document.documentElement.lang = "en-us";
  }, []);
  return (
    <>
      <Head>
        <title>Growth-Tech</title>
        <meta
          name="description"
          content="Growth-Tech React Test Built using nextjs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
