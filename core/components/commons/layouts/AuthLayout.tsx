import { getSession, GetSessionParams, useSession } from "next-auth/react";
import router from "next/router";
import { FunctionComponent, ReactNode, useEffect } from "react";
import NavbarAuth from "../nav/navbarAuth";
import NavFooter from "../nav/NavFooter";
import SideBar from "../sidebar";

const AuthLayout: FunctionComponent<ReactNode> = ({ children }) => {
  const { data: session } = useSession();

  if (typeof window === "undefined") return null;

  if (!session) {
    return <div>Access Denied</div>;
  }
  return (
    <>
      <NavbarAuth session={session} />
      <main className="main-layout min-h-screen my-10">
        <div className="flex">
          <div className="w-1/5">
            <SideBar />
          </div>
          <div className="w-4/5">{children}</div>
        </div>
        {/* <div className="main-layout__content">{children}</div> */}
      </main>
      <NavFooter />
    </>
  );
};

export default AuthLayout;

export async function getServerSideProps(
  context: GetSessionParams | undefined
) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
