import { Menu, Transition } from "@headlessui/react";
import { DefaultSession, Session } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { Fragment, SVGProps, useEffect, useRef, useState } from "react";
import { FaChevronDown, FaUser } from "react-icons/fa";
import { User } from "../../../features/user/models/user";

interface Props {
  profile: User;
}

const ProfileDropdown: React.FC<Props> = ({ profile }: Props) => {
  return (
    <div className="text-right text-sm text-white  font-bold rounded-md transition duration-200">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="">
            <img
              className="rounded-full border border-gray-100 shadow-sm w-12 h-12 bg-cover"
              referrerPolicy="no-referrer"
              src={
                profile?.image
                  ? profile.image
                  : "https://randomuser.me/api/portraits/women/81.jpg"
              }
              alt="user image"
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
};

export default ProfileDropdown;
