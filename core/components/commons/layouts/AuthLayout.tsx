import { Session } from "next-auth";
import { getSession, GetSessionParams, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import router, { useRouter } from "next/router";

import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import { useGetProfileQuery } from "../../../features/auth/api/auth.api";
import { User } from "../../../features/user/models/user";
import { MenuCollapse } from "../../sidebar/menu-collapse";
import NavbarAuth from "../nav/navbarAuth";
import NavFooter from "../nav/NavFooter";
import SideBar from "../sidebar";

interface AuthLayoutProps {
  children: ReactNode;
  title?: string;
  // session?: Session;
}

const AuthLayout: FunctionComponent<AuthLayoutProps> = ({
  children,
  title,
  // session,
}) => {
  const { data: session, status } = useSession();

  const router = useRouter();

  const [profile, setProfile] = useState<User>();

  const { data: profileData, isLoading: profileLoading } =
    useGetProfileQuery(null);

  useEffect(() => {
    if (!session && status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [router, session, status]);

  useEffect(() => {
    if (profileData && !profileLoading) {
      setProfile(profileData.data);
    }
  }, [profileData, profileLoading]);

  if (typeof window === "undefined") return null;

  if (!session) {
    return <div>Access Denied,Redirecting ....</div>;
  }

  const path = router.pathname.substring(1);

  const isActive =
    "lg:inline-block text-white bg-primary hover:bg-primary-darker rounded-md transition duration-400 w-full";

  return (
    <>
      <Head>
        <title>
          {title ? title : "Dashboard - ERC | Elroi Church Sawangan"}
        </title>
      </Head>
      <NavbarAuth profile={profile!} />
      <div className="drawer drawer-mobile !h-auto">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="flex h-screen overflow-hidden drawer-content flex-col my-10 ">
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <MenuCollapse title={"Prayers"} path="dashboard/prayers">
              <Link href="/dashboard/prayers" passHref>
                <a
                  className={`btn-link text-xl py-2 mt-2 pl-4  ${
                    path.toLowerCase() === "dashboard/prayers"
                      ? isActive
                      : "text-black hover:text-gray-500"
                  }`}
                >
                  Prayer List
                </a>
              </Link>
              <Link href="/dashboard/prayers/form" passHref>
                <a
                  className={`btn-link text-xl py-2 mt-2 pl-4  ${
                    path.toLowerCase() === "dashboard/prayers/form"
                      ? isActive
                      : "text-black hover:text-gray-500"
                  }`}
                >
                  Prayer Form
                </a>
              </Link>
            </MenuCollapse>

            <li className="mb-1">
              <Link href="/dashboard/water-baptism" passHref>
                <a
                  className={`btn-link text-xl py-2 pr-4 text-black-400 ${
                    path.toLowerCase() === "dashboard/water-baptism"
                      ? isActive
                      : "hover:text-gray-500 focus:text-gray-500"
                  }`}
                >
                  Water Baptism
                </a>
              </Link>
            </li>
            <li className="mb-1">
              <Link href="/dashboard/child-dedication" passHref>
                <a
                  className={`btn-link text-xl py-2 pr-4 text-black-400 ${
                    path.toLowerCase() === "dashboard/child-dedication"
                      ? isActive
                      : "hover:text-gray-500 focus:text-gray-500"
                  }`}
                >
                  Child Dedication
                </a>
              </Link>
            </li>
            <li className="mb-1">
              <Link href="/dashboard/cooperative" passHref>
                <a
                  className={`btn-link text-xl py-2 pr-4 text-black-400 ${
                    path.toLowerCase() === "dashboard/cooperative"
                      ? isActive
                      : "hover:text-gray-500 focus:text-gray-500"
                  }`}
                >
                  Cooperative
                </a>
              </Link>
            </li> */}
            {/* <MenuCollapse title={"Article"} path="dashboard/articles">
              <Link href="/dashboard/articles/form" passHref>
                <a
                  className={`btn-link text-xl py-2 mt-2 pl-4  ${
                    path.toLowerCase() === "dashboard/articles/form"
                      ? isActive
                      : "text-black hover:text-gray-500"
                  }`}
                >
                  Article Form
                </a>
              </Link>
              <Link href="/dashboard/articles" passHref>
                <a
                  className={`btn-link text-xl py-2 mt-2 pl-4  ${
                    path.toLowerCase() === "dashboard/articles"
                      ? isActive
                      : "text-black hover:text-gray-500"
                  }`}
                >
                  Article List
                </a>
              </Link>
            </MenuCollapse> */}
            <Link href="/dashboard" passHref>
              <a
                className={`btn-link text-xl py-2 mt-2 mb-2 pl-4  ${
                  path.toLowerCase() === "dashboard"
                    ? isActive
                    : "text-black hover:text-gray-500"
                }`}
              >
                Dashboard
              </a>
            </Link>
            <MenuCollapse title={"Family"} path="dashboard/family">
              <Link href="/dashboard/family" passHref>
                <a
                  className={`btn-link text-xl py-2 mt-2 pl-4  ${
                    path.toLowerCase() === "dashboard/family"
                      ? isActive
                      : "text-black hover:text-gray-500"
                  }`}
                >
                  My Family
                </a>
              </Link>
            </MenuCollapse>
            <MenuCollapse title={"Settings"} path="dashboard/settings">
              <Link href="/dashboard/settings/edit-profile" passHref>
                <a
                  className={`btn-link text-xl py-2 mt-2 pl-4  ${
                    path.toLowerCase() === "dashboard/settings/edit-profile"
                      ? isActive
                      : "text-black hover:text-gray-500"
                  }`}
                >
                  Edit Profile
                </a>
              </Link>
              <Link href="/dashboard/settings/change-password" passHref>
                <a
                  className={`btn-link text-xl py-2 mt-2 pl-4  ${
                    path.toLowerCase() === "dashboard/settings/change-password"
                      ? isActive
                      : "text-black hover:text-gray-500"
                  }`}
                >
                  Change Password
                </a>
              </Link>
              <Link href="/dashboard/settings/change-picture" passHref>
                <a
                  className={`btn-link text-xl py-2 mt-2 pl-4  ${
                    path.toLowerCase() === "dashboard/settings/change-picture"
                      ? isActive
                      : "text-black hover:text-gray-500"
                  }`}
                >
                  Change Picture
                </a>
              </Link>
            </MenuCollapse>
          </ul>
        </div>
      </div>

      <main className="main-layout my-10">
        {/* <div className="main-layout__content">{children}</div> */}
      </main>
    </>
  );
};

export default AuthLayout;

// export async function getServerSideProps(
//   context: GetSessionParams | undefined
// ) {
//   return {
//     props: {
//       session: await getSession(context),
//     },
//   };
// }
