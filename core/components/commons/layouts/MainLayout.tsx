import Head from "next/head";
import { FunctionComponent, ReactNode } from "react";
import Navbar from "../nav/navbar";
import NavFooter from "../nav/NavFooter";

const MainLayout: FunctionComponent<ReactNode> = ({ children }) => {
  return (
    <>
      <Head>
        <title>ERC | Elroi Church Sawangan</title>
      </Head>
      <Navbar />
      <main className="main-layout min-h-screen">
        {children}
        {/* <div className="main-layout__content">{children}</div> */}
      </main>
      <NavFooter />
    </>
  );
};

export default MainLayout;
