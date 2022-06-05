import { Menu, Transition } from "@headlessui/react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { Fragment, SVGProps, useEffect, useRef, useState } from "react";
import { FaChevronDown, FaUser } from "react-icons/fa";

export default function ProfileDropdown() {
  return (
    <div className="text-right hidden lg:inline-block text-sm text-white bg-primary hover:bg-primary-darker font-bold rounded-md transition duration-200">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <FaUser className="w-3 h-3 mt-1 mr-2 text-white hover:text-gray-300" />
            Profile
            <FaChevronDown
              className="w-3 h-3 mt-1 ml-2 -mr-1 text-white hover:text-gray-300"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <Link href={"/dashboard"} passHref>
                    <a
                      className={`${
                        active ? "bg-primary-light text-white" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      My Profile
                    </a>
                  </Link>
                )}
              </Menu.Item>
            </div>

            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className="group flex lg:inline-block py-2 w-full text-sm text-white bg-primary hover:bg-primary-darker font-bold rounded-md transition duration-200"
                    onClick={() => signOut()}
                    // className={`${
                    //   active ? "bg-violet-500 text-white" : "text-gray-900"
                    // } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {/* {active ? (
                      <DeleteActiveIcon
                        className="w-5 h-5 mr-2 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <DeleteInactiveIcon
                        className="w-5 h-5 mr-2 text-violet-400"
                        aria-hidden="true"
                      />
                    )} */}
                    Sign Out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
