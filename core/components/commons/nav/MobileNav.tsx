import { Transition } from "@headlessui/react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";

interface Props {
  isOpenMenu: boolean;
  menuHandler: () => void;
}

const MobileNav: React.FC<Props> = ({ isOpenMenu, menuHandler }) => {
  const router = useRouter();
  const path = router.pathname.substring(1);

  const isActive =
    "lg:inline-block px-4 bg-primary hover:bg-primary-darker rounded-md transition duration-200";

  const { data: session } = useSession();

  useEffect(() => {
    console.log(session);
  }, [session]);

  const menuButtonHandler = (): void => {
    menuHandler();
  };

  return (
    <Transition
      show={isOpenMenu}
      enter="transition-opacity duration-300 ease-in"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300 ease-out"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={`block navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50 `}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
        <nav className="relative flex flex-col py-6 px-6 h-full w-full bg-white border-r rounded-r-xl overflow-y-auto">
          <div className="flex items-center mb-2">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <img
                className="w-16"
                src="/assets/img/logo_erc.png"
                alt=""
                width="auto"
              />
            </a>
            <button className="navbar-close" onClick={menuButtonHandler}>
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
              <li>
                <a
                  className="text-sm text-black-400 hover:text-gray-500"
                  href="#"
                >
                  Home
                </a>
              </li>

              <li>
                <a className="text-sm text-black-400" href="#">
                  About
                </a>
              </li>

              <li>
                <a
                  className={`text-sm text-black-400 ${
                    path.toLowerCase() === "sermon" ?? isActive
                  }`}
                  href="#"
                >
                  Sermons
                </a>
              </li>

              <li>
                <a
                  className="text-sm text-black-400 hover:text-gray-500"
                  href="#"
                >
                  Ministry
                </a>
              </li>

              <li>
                <a
                  className="text-sm text-black-400 hover:text-gray-500"
                  href="#"
                >
                  Online
                </a>
              </li>

              <li>
                <a
                  className="text-sm text-black-400 hover:text-gray-500"
                  href="#"
                >
                  Koperasi
                </a>
              </li>

              <li>
                <a
                  className="text-sm text-black-400 hover:text-gray-500"
                  href="#"
                >
                  Colour
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              {session && session.user ? (
                <a
                  className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold  bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl"
                  onClick={() => signOut()}
                >
                  Sign Out
                </a>
              ) : (
                <a
                  className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold  bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl"
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
    </Transition>
  );
};

export default MobileNav;
