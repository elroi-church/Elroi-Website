import { useRouter } from "next/router";
import React, { useState } from "react";

const SideBar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const router = useRouter();
  const path = router.pathname.substring(1);
  const isActive =
    "lg:inline-block text-white bg-primary hover:bg-primary-darker rounded-md transition duration-400 w-full";

  return (
    <div>
      <div className={`block navbar-menu w-100 max-w-sm pr-4`}>
        <nav className="relative flex flex-col py-6 h-full w-fullborder-r rounded-r-xl overflow-y-auto">
          <ul>
            <li
              className={`${
                path.toLowerCase() === "dashboard" ? "mb-5" : "mb-7"
              }`}
            >
              <a
                className={`text-xl pl-28 py-2 pr-4 text-black-400 ${
                  path.toLowerCase() === "dashboard"
                    ? isActive
                    : "hover:text-gray-500"
                }`}
                href="#"
                onClick={() =>
                  router.push("/dashboard", undefined, { shallow: true })
                }
              >
                Dashboard
              </a>
            </li>
            <li
              className={`${
                path.toLowerCase() === "dashboard/history" ? "mb-5" : "mb-7"
              }`}
            >
              <a
                className={`text-xl pl-28 py-2 pr-4 text-black-400 ${
                  path.toLowerCase() === "dashboard/history"
                    ? isActive
                    : "hover:text-gray-500"
                }`}
                href="#"
                onClick={() =>
                  router.push("/dashboard/history", undefined, { shallow: true })
                }
              >
                History
              </a>
            </li>
            <li
              className={`${
                path.toLowerCase().search("ministry") !== -1 ? "mb-5" : "mb-7"
              }`}
            >
              <div
                onClick={() => setOpenDropdown(!openDropdown)}
                className={`relative text-xl pl-28 py-2 pr-4 text-black-400 ${
                  path.toLowerCase().search("ministry") !== -1
                    ? isActive
                    : "hover:text-gray-500"
                }`}
              >
                <button onClick={() => setOpenDropdown(!openDropdown)}>
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
              </div>
            </li>
            <li
              className={`${
                path.toLowerCase().search("online") !== -1 ? "mb-5" : "mb-7"
              }`}
            >
              <a
                className={`text-xl pl-28 py-2 pr-4 text-black-400 ${
                  path.toLowerCase().search("online") !== -1
                    ? isActive
                    : "hover:text-gray-500"
                }`}
                href="#"
                onClick={() =>
                  router.push("/dashboard/online", undefined, { shallow: true })
                }
              >
                Online
              </a>
            </li>
            <li
              className={`${
                path.toLowerCase().search("koperasi") !== -1 ? "mb-5" : "mb-7"
              }`}
            >
              <a
                className={`text-xl pl-28 py-2 pr-4 text-black-400 ${
                  path.toLowerCase().search("koperasi") !== -1
                    ? isActive
                    : "hover:text-gray-500"
                }`}
                href="#"
                onClick={() =>
                  router.push("/dashboard/koperasi/koperasi_form", undefined, {
                    shallow: true,
                  })
                }
              >
                Koperasi
              </a>
            </li>
            <li
              className={`${
                path.toLowerCase().search("sunshine") !== -1 ? "mb-5" : "mb-7"
              }`}
            >
              <a
                className={`text-xl pl-28 py-2 pr-4 text-black-400 ${
                  path.toLowerCase().search("sunshine") !== -1
                    ? isActive
                    : "hover:text-gray-500"
                }`}
                href="#"
                onClick={() =>
                  router.push("/dashboard/sunshine", undefined, {
                    shallow: true,
                  })
                }
              >
                My Sunshine
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {openDropdown && (
        <>
          <div className="absolute left-[19vw] top-[29vh] w-full mt-2 z-50 rounded-md shadow-lg md:w-64">
            <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
              <a
                className={`block px-4 py-2 mt-2 mb-4 text-sm rounded-lg dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline ${
                  path.toLowerCase().search("ministry/water_baptism_form") !==
                  -1
                    ? isActive + " w-full"
                    : "hover:bg-primary hover:text-gray-500 bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-primary-600"
                }`}
                href="#"
                onClick={() =>
                  router.push(
                    "/dashboard/ministry/water_baptism_form",
                    undefined,
                    {
                      shallow: true,
                    }
                  )
                }
              >
                Water Baptism
              </a>
              <a
                className={`block px-4 py-2 mt-2 text-sm rounded-lg  dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline ${
                  path.toLowerCase().search("ministry/child_dedication") !== -1
                    ? isActive + " w-full"
                    : "hover:bg-primary hover:text-gray-500 bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-primary-600"
                }`}
                href="#"
                onClick={() =>
                  router.push(
                    "/dashboard/ministry/child_dedication_form",
                    undefined,
                    {
                      shallow: true,
                    }
                  )
                }
              >
                Child Dedication
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
