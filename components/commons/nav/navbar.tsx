import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";

// Navbar tailwind component
const Navbar: FunctionComponent = () => {
  const containerImage = [
    "/assets/img/about/about1.png",
    "/assets/img/about/about2.png",
    "/assets/img/about/about3.png",
    "/assets/img/about/about4.png",
  ];

  const isActive =
    "lg:inline-block px-4 bg-primary hover:bg-primary-darker rounded-md transition duration-200";

  const router = useRouter();
  const path = router.pathname.substring(1);
  // console.log(router.pathname.substring(1));

  return (
    <>
      <nav className="relative px-6 mx-12 flex justify-between items-center bg-white">
        <a className="text-3xl font-bold leading-none" href="#">
          <img
            className="h-20 pt-2"
            src="/assets/img/logo_erc.png"
            alt=""
            width="auto"
          />
        </a>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-orange-600 p-3">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <a
              className={`text-sm text-black-400 ${
                path.toLowerCase() === "home" || router.pathname === "/"
                  ? isActive
                  : "hover:text-gray-500"
              }`}
              href="#"
              onClick={() => router.push("/", undefined, { shallow: true })}
            >
              Home
            </a>
          </li>

          <li>
            <a
              className={`text-sm text-black-400 ${
                path.toLowerCase() === "about"
                  ? isActive
                  : "hover:text-gray-500"
              }`}
              href="javascript:void(0);"
              onClick={() =>
                router.push("/about", undefined, { shallow: true })
              }
            >
              About
            </a>
          </li>

          <li>
            <a
              className={`text-sm text-black-400 ${
                path.toLowerCase() === "sermon"
                  ? isActive
                  : "hover:text-gray-500"
              }`}
              href="javascript:void(0);"
              onClick={() =>
                router.push("/sermon", undefined, { shallow: true })
              }
            >
              Sermons
            </a>
          </li>

          <li>
            <a className="text-sm text-black-400 hover:text-gray-500" href="#">
              Ministry
            </a>
          </li>

          <li>
            <a className="text-sm text-black-400 hover:text-gray-500" href="#">
              Online
            </a>
          </li>

          <li>
            <a className="text-sm text-black-400 hover:text-gray-500" href="#">
              Koperasi
            </a>
          </li>

          <li>
            <a className="text-sm text-black-400 hover:text-gray-500" href="#">
              Colour
            </a>
          </li>
        </ul>
        <a
          className="hidden lg:inline-block py-2 px-8 text-sm text-white bg-primary hover:bg-primary-darker font-bold rounded-md transition duration-200"
          href="#"
        >
          Sign In
        </a>
      </nav>
      <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
        <nav className="relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <img
                className="h-10"
                src="atis-assets/logo/atis/atis-mono-black.svg"
                alt=""
                width="auto"
              />
            </a>
            <button className="navbar-close">
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
              <a
                className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl"
                href="#"
              >
                Sign in
              </a>
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
    </>
  );
};

// Tailwind Navbar Component
export default Navbar;
