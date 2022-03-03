import { useRouter } from "next/router";
import React from "react";

const SideBar: React.FC = () => {
  const router = useRouter();
  const path = router.pathname.substring(1);
  const isActive =
    "lg:inline-block text-white bg-primary hover:bg-primary-darker rounded-md transition duration-400 w-[90%]";

  return (
    <div>
      <div className={`block navbar-menu w-100 max-w-sm`}>
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
                path.toLowerCase().search("ministry") !== -1 ? "mb-5" : "mb-7"
              }`}
            >
              <a
                className={`text-xl pl-28 py-2 pr-4 text-black-400 ${
                  path.toLowerCase().search("ministry") !== -1
                    ? isActive
                    : "hover:text-gray-500"
                }`}
                href="#"
                onClick={() =>
                  router.push("/dashboard/ministry/water_baptism_form", undefined, { shallow: true })
                }
              >
                Ministry
              </a>
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
                  router.push("/dashboard/koperasi/koperasi_form", undefined, { shallow: true })
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
                  router.push("/dashboard/sunshine", undefined, { shallow: true })
                }
              >
                My Sunshine
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
