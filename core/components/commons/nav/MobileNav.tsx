import { Transition } from "@headlessui/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";

interface Props {
  isOpenMenu: boolean;
  menuHandler: () => void;
}

interface MenuItemProps {
  href: string;
  label: string;
  description?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, description, href }) => {
  return (
    <li className="py-2 border-b hover:bg-slate-100">
      <Link href={href} passHref>
        <a>
          <div className="px-5">
            <h2 className="text-lg font-bold text-primary">{label}</h2>
            {description && <p>{description}</p>}
          </div>
        </a>
      </Link>
    </li>
  );
};

const MobileNav: React.FC<Props> = ({ isOpenMenu, menuHandler }) => {
  const router = useRouter();
  const path = router.pathname.substring(1);

  const isActive =
    "lg:inline-block px-4 bg-primary hover:bg-primary-darker rounded-md transition duration-200";

  const nonActive = "lg:inline-block px-4 rounded-md transition duration-200";

  const { data: session } = useSession();

  // useEffect(() => {
  //   console.log(session);
  // }, [session]);

  const menuButtonHandler = (): void => {
    menuHandler();
  };

  return (
    <div
      className={`navbar-menu fixed top-0 left-0 bottom-0 w-full z-50 transition-all ${
        isOpenMenu ? "block" : "hidden"
      }`}
    >
      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
      <nav className="relative flex flex-col py-6 h-full w-full bg-white border-r rounded-r-xl overflow-y-auto">
        <div className="flex items-center mb-2">
          <a className="mr-auto text-3xl font-bold leading-none" href="#">
            <img
              className="w-32 object-cover"
              src="/assets/img/logo_erc.png"
              alt=""
              width="auto"
            />
          </a>
          <button className="navbar-close mr-3" onClick={menuButtonHandler}>
            <svg
              className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div>
          <ul>
            <MenuItem label={"Home"} href={"/"} />
            <MenuItem label={"About"} href={"/about"} />
            <MenuItem label={"Services"} href={"/services"} />
            <MenuItem label={"Koperasi"} href={"/koperasi"} />

            <h2 className="px-5 py-5 text-2xl font-bold">
              Ways to get Involved
            </h2>

            <MenuItem label={"Kids"} href={"/kids"} />
            <MenuItem label={"DOT"} href={"/dot"} />
            <MenuItem label={"DRP232"} href={"/drp"} />
            <MenuItem
              label={"The Signification Woman"}
              href={"/the-signification-woman"}
            />
            <MenuItem
              label={"Community of Love"}
              href={"/the-signification-woman"}
            />
            <MenuItem label={"Serving Opportunities"} href={"/volunteer"} />
          </ul>
        </div>
        <div className="mt-auto">
          <div className="pt-6">
            {session && session.user ? (
              <a
                className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold  bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl hover:cursor-pointer"
                onClick={() => signOut()}
              >
                Sign Out
              </a>
            ) : (
              <a
                className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold  bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl hover:cursor-pointer"
                onClick={() =>
                  router.push("/auth/login", undefined, {
                    shallow: true,
                  })
                }
              >
                Sign In
              </a>
            )}
          </div>
          <p className="my-4 text-xs text-center text-gray-400">
            <span>© 2020 All rights reserved.</span>
          </p>
          <div className="text-center">
            <a className="inline-block px-1" href="#">
              <img src="atis-assets/social/facebook.svg" alt="" />
            </a>
            <a className="inline-block px-1" href="#">
              <img src="atis-assets/social/twitter.svg" alt="" />
            </a>
            <a className="inline-block px-1" href="#">
              <img src="atis-assets/social/instagram.svg" alt="" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
