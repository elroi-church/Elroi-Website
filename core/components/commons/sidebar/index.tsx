import { useRouter } from "next/router";
import React from "react";

const SideBar: React.FC = () => {
  const router = useRouter();
  const path = router.pathname.substring(1);
  const isActive =
    "lg:inline-block text-white bg-primary hover:bg-primary-darker rounded-md transition duration-400";

  return (
    <div>
      <div className={`block navbar-menu w-100 max-w-sm`}>
        <nav className="relative flex flex-col py-6 h-full w-fullborder-r rounded-r-xl overflow-y-auto">
          <ul>
            <li className={`${path.toLowerCase() === "dashboard" ? 'mb-5' : 'mb-7'}`}>
              <a
                className={`text-xl pl-28 py-2 pr-4 text-black-400 ${
                  path.toLowerCase() === "dashboard"
                    ? isActive
                    : "hover:text-gray-500"
                }`}
                href="#"
                onClick={() => router.push("dashboard", undefined, { shallow: true })}
              >
                Dashboard
              </a>
            </li>
            <li className={`${path.toLowerCase() === "sunshine" ? 'mb-5' : 'mb-7'}`}>
              <a
                className={`text-xl pl-28 py-2 pr-4 text-black-400 ${
                  path.toLowerCase() === "sunshine"
                    ? isActive
                    : "hover:text-gray-500"
                }`}
                href="#"
                onClick={() => router.push("sunshine", undefined, { shallow: true })}
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
