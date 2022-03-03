import { useRouter } from "next/router";
import React, { FunctionComponent, useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import MobileNav from "./MobileNav";
import ProfileDropdown from "./ProfileDropdown";
import { AiOutlineHome } from "react-icons/ai";
import ProfileDropdownAuth from "./ProfileDropdownAuth";

// Navbar tailwind component
const NavbarAuth: FunctionComponent = () => {
  const containerImage = [
    "/assets/img/about/about1.png",
    "/assets/img/about/about2.png",
    "/assets/img/about/about3.png",
    "/assets/img/about/about4.png",
  ];

  const [openDropdown, setOpenDropdown] = useState(false);

  const { data: session } = useSession();

  useEffect(() => {
    console.log(session);
  }, [session]);

  const isActive =
    "lg:inline-block px-4 bg-primary hover:bg-primary-darker rounded-md transition duration-200";

  const router = useRouter();
  const path = router.pathname.substring(1);

  const [isOpenMenu, setIsOpenMenu] = useState(false);

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
      <nav className="relative lg:px-[70px] flex justify-between items-center bg-white shadow-lg w-full z-50 rounded-b-[35px]">
        <a className="text-3xl font-bold leading-none" href="#">
          <img
            className="h-24"
            src="/assets/img/logo_erc.png"
            alt=""
            width="auto"
          />
        </a>
        <div className="lg:hidden">
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
        </div>
        <div className="flex items-center">
          <h4>Hello, Hizqia</h4>
          <span className="pl-6">
            <ProfileDropdownAuth />
          </span>
          <AiOutlineHome className="text-5xl pl-6" />
        </div>
      </nav>
      <MobileNav isOpenMenu={isOpenMenu} menuHandler={mobileMenuHandler} />
    </>
  );
};

// Tailwind NavbarAuth Component
export default NavbarAuth;
