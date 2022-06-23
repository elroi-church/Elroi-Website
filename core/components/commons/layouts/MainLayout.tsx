import Head from "next/head";
import { FunctionComponent, ReactNode } from "react";
import { RootState } from "../../../store";
import { useAppSelector } from "../../../store/hooks";
import FullscreenModal from "../modal/FullscreenModal";
import Navbar from "../nav/navbar";
import NavFooter from "../nav/NavFooter";

const MainLayout: FunctionComponent<ReactNode> = ({ children }) => {
  const isOpen = useAppSelector((state: RootState) => state.modal.isOpen);

  return (
    <>
      <Head>
        <title>ERC | Elroi Church Sawangan</title>
      </Head>
      <Navbar />
      <main
        className={`main-layout min-h-screen ${isOpen ? "modal-active" : ""}`}
      >
        {children}
        {/* <div className="main-layout__content">{children}</div> */}
      </main>

      <NavFooter />
      {/* <FullscreenModal title="testing">
        <div>testing asdasdasdasd asdasdasd asdasd</div>
      </FullscreenModal> */}
    </>
  );
};

export default MainLayout;
