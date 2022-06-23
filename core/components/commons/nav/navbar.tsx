import { useRouter } from "next/router";
import React, { FunctionComponent, useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import MobileNav from "./MobileNav";
import ProfileDropdown from "./ProfileDropdown";
import Link from "next/link";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { toggleModal } from "../../../features/commons/modalSlice";

// Navbar tailwind component
const Navbar: FunctionComponent = () => {
  const containerImage = [
    "/assets/img/about/about1.png",
    "/assets/img/about/about2.png",
    "/assets/img/about/about3.png",
    "/assets/img/about/about4.png",
  ];

  const [openDropdown, setOpenDropdown] = useState(false);

  const { data: session } = useSession();

  const isActive =
    "lg:inline-block px-4 bg-primary hover:bg-primary-darker rounded-md transition duration-200";

  const router = useRouter();
  const path = router.pathname.substring(1);

  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.isOpen);

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function onToggleModal() {
    dispatch(toggleModal());
  }

  const mobileMenuHandler = (): string => {
    if (isOpenMenu) {
      setIsOpenMenu(false);
      return "hidden";
    } else {
      setIsOpenMenu(true);
      return "block";
    }
  };
  // console.log(router.pathname.substring(1));

  return (
    <>
      <nav className="relative lg:px-[60px] flex justify-between items-center bg-white shadow-lg w-full z-30">
        <Link href={`/`} passHref>
          <a className="text-3xl font-bold leading-none">
            <img
              className="h-28 pt-2"
              src="/assets/img/logo_erc.png"
              alt=""
              width="auto"
            />
          </a>
        </Link>
        {/* <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-orange-600 p-3"
            onClick={mobileMenuHandler}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div> */}
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <Link href="/" passHref>
              <a
                className={`text-sm text-black-400 ${
                  path.toLowerCase() === "home" ||
                  router.pathname === "/" ||
                  path.toLowerCase() === "giving"
                    ? isActive
                    : "hover:text-gray-500"
                }`}
              >
                Home
              </a>
            </Link>
          </li>

          <li>
            <Link href="/about" passHref>
              <a
                className={`text-sm text-black-400 ${
                  path.toLowerCase() === "about"
                    ? isActive
                    : "hover:text-gray-500"
                }`}
              >
                About
              </a>
            </Link>
          </li>

          <li>
            <Link href="/sermon" passHref>
              <a
                className={`text-sm text-black-400 ${
                  path.toLowerCase() === "sermon"
                    ? isActive
                    : "hover:text-gray-500"
                }`}
              >
                Sermons
              </a>
            </Link>
          </li>

          {/* <li>
            <a
              className="text-sm text-black-400 hover:text-gray-500"
              href="#"
              onClick={() =>
                router.push("/ministry/baptism", undefined, { shallow: true })
              }
            >
              Ministry
            </a>
          </li> */}

          <li>
            <div
              onClick={() => setOpenDropdown(!openDropdown)}
              className="relative"
            >
              <button
                onClick={() => setOpenDropdown(!openDropdown)}
                className={`text-sm text-black-400 ${
                  path.toLowerCase().search("ministry") !== -1
                    ? isActive
                    : "hover:text-gray-500"
                }`}
              >
                <span>Ministry</span>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className={`${
                    openDropdown ? "rotate-180" : "rotate-0"
                  } inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1`}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              {openDropdown && (
                <>
                  <div className="absolute left-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-64">
                    <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
                      <Link href="/ministry/baptism" passHref>
                        <a
                          className={`block px-4 py-2 mt-2 text-sm rounded-lg dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline ${
                            path.toLowerCase().search("ministry/baptism") !== -1
                              ? isActive + " w-full"
                              : "hover:bg-primary hover:text-gray-500 bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-primary-600"
                          }`}
                        >
                          Water Baptism
                        </a>
                      </Link>
                      <Link href="/ministry/pastoral" passHref>
                        <a
                          className={`block px-4 py-2 mt-2 text-sm rounded-lg  dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline ${
                            path.toLowerCase().search("ministry/pastoral") !==
                            -1
                              ? isActive + " w-full"
                              : "hover:bg-primary hover:text-gray-500 bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-primary-600"
                          }`}
                          href="#"
                          onClick={() =>
                            router.push("/ministry/pastoral", undefined, {
                              shallow: true,
                            })
                          }
                        >
                          Pastoral
                        </a>
                      </Link>
                      <Link href="/ministry/child-dedication" passHref>
                        <a
                          className={`block px-4 py-2 mt-2 text-sm rounded-lg  dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline ${
                            path
                              .toLowerCase()
                              .search("ministry/child-dedication") !== -1
                              ? isActive + " w-full"
                              : "hover:bg-primary hover:text-gray-500 bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-primary-600"
                          }`}
                        >
                          Child Dedication
                        </a>
                      </Link>
                      <Link href="/ministry/prayer-counseling" passHref>
                        <a
                          className={`block px-4 py-2 mt-2 text-sm rounded-lg  dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline ${
                            path
                              .toLowerCase()
                              .search("ministry/prayer_counseling") !== -1
                              ? isActive + " w-full"
                              : "hover:bg-primary hover:text-gray-500 bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-primary-600"
                          }`}
                        >
                          Prayer And Counseling
                        </a>
                      </Link>
                      <Link href="/ministry/etc" passHref>
                        <a
                          className={`block px-4 py-2 mt-2 text-sm rounded-lg  dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline ${
                            path.toLowerCase().search("ministry/etc") !== -1
                              ? isActive + " w-full"
                              : "hover:bg-primary hover:text-gray-500 bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-primary-600"
                          }`}
                        >
                          ETC
                        </a>
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </li>

          <li>
            <Link href="/online" passHref>
              <a
                className={`text-sm text-black-400 ${
                  path.toLowerCase().search("online") !== -1
                    ? isActive
                    : "hover:text-gray-500"
                }`}
              >
                Online
              </a>
            </Link>
          </li>

          <li>
            <Link href="/koperasi" passHref>
              <a
                className={`text-sm text-black-400 ${
                  path.toLowerCase().search("koperasi") !== -1
                    ? isActive
                    : "hover:text-gray-500"
                }`}
              >
                Koperasi
              </a>
            </Link>
          </li>

          <li>
            <Link href="/blog" passHref>
              <a
                className={`text-sm text-black-400 ${
                  path.toLowerCase().search("blog") !== -1
                    ? isActive
                    : "hover:text-gray-500"
                }`}
              >
                Blog
              </a>
            </Link>
          </li>
        </ul>
        <div className="flex flex-row">
          {session && session.user ? (
            <ProfileDropdown session={session} />
          ) : (
            <Link href="/auth/login" passHref>
              <a className="hidden lg:inline-block py-2 px-8 text-sm text-white bg-primary hover:bg-primary-darker font-bold rounded-md transition duration-200">
                Sign In
              </a>
            </Link>
          )}
          <div
            className="ml-2 mr-3 flex flex-row items-center"
            onClick={mobileMenuHandler}
          >
            {isOpen ? (
              <AiOutlineClose className="transform transition-all" size={18} />
            ) : (
              <AiOutlineMenu className="transform transition-all" size={18} />
            )}
          </div>
        </div>
      </nav>
      <MobileNav isOpenMenu={isOpenMenu} menuHandler={mobileMenuHandler} />
    </>
  );
};

// Tailwind Navbar Component
export default Navbar;
