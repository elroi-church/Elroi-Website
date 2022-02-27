import { FunctionComponent, ReactNode } from "react";
import NavbarAuth from "../nav/navbarAuth";
import NavFooter from "../nav/NavFooter";
import SideBar from "../sidebar";

const AuthLayout: FunctionComponent<ReactNode> = ({ children }) => {
  return (
    <>
      <NavbarAuth />
      <main className="main-layout min-h-screen my-10">
        <div className="flex">
          <div className="w-1/4">
            <SideBar />
          </div>
          <div className="w-3/4">{children}</div>
        </div>
        {/* <div className="main-layout__content">{children}</div> */}
      </main>
      <NavFooter />
    </>
  );
};

export default AuthLayout;
