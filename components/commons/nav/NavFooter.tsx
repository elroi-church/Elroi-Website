import { FunctionComponent } from "react";
import Image from "next/image";

const NavFooter: FunctionComponent = () => {
  return (
    <footer className="py-5 relative w-full">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 mb-8 lg:mb-16">
          <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
            <a className="text-gray-600 text-2xl leading-none" href="#">
              <img
                className="h-8"
                src="mockup-assets/logos/shuffle-ux.svg"
                alt=""
                width="auto"
              />
            </a>
            <p className="mt-5 mb-6 max-w-xs text-gray-500 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div>
              <a className="inline-block h-6 mr-8" href="#">
                <img
                  className="mx-auto"
                  alt=""
                  src="mockup-assets/socials/facebook.svg"
                />
              </a>
              <a className="inline-block h-6 mr-8" href="#">
                <img
                  className="mx-auto"
                  alt=""
                  src="mockup-assets/socials/github.svg"
                />
              </a>
              <a className="inline-block h-6 mr-8" href="#">
                <img
                  className="mx-auto"
                  alt=""
                  src="mockup-assets/socials/instagram.svg"
                />
              </a>
              <a className="inline-block h-6 mr-8" href="#">
                <img
                  className="mx-auto"
                  alt=""
                  src="mockup-assets/socials/linkedin.svg"
                />
              </a>
              <a className="inline-block h-6" href="#">
                <img
                  className="mx-auto"
                  alt=""
                  src="mockup-assets/socials/twitter.svg"
                />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-2/3 px-4">
            <div className="flex flex-wrap justify-between">
              <div className="w-1/2 lg:w-1/4 mb-8 lg:mb-0">
                <h3 className="mb-6 text-lg font-bold font-heading">Company</h3>
                <ul className="text-sm">
                  <li className="mb-4">
                    <a className="text-gray-500 hover:text-gray-600" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-500 hover:text-gray-600" href="#">
                      Careers
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-500 hover:text-gray-600" href="#">
                      Press
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-500 hover:text-gray-600" href="#">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 lg:w-1/4 mb-8 lg:mb-0">
                <h3 className="mb-6 text-lg font-bold font-heading">Pages</h3>
                <ul className="text-sm">
                  <li className="mb-4">
                    <a className="text-gray-500 hover:text-gray-600" href="#">
                      Login
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-500 hover:text-gray-600" href="#">
                      Register
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-500 hover:text-gray-600" href="#">
                      Add list
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-500 hover:text-gray-600" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 lg:w-1/4 mb-8 lg:mb-0">
                <h3 className="mb-6 text-lg font-bold font-heading">Legal</h3>
                <ul className="text-sm">
                  <li className="mb-4">
                    <a className="text-gray-500 hover:text-gray-600" href="#">
                      Terms
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-500 hover:text-gray-600" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-500 hover:text-gray-600" href="#">
                      Team
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-500 hover:text-gray-600" href="#">
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 lg:w-1/4">
                <h3 className="mb-6 text-lg font-bold font-heading">
                  Resources
                </h3>
                <ul className="text-sm">
                  <li className="mb-4">
                    <a className="text-gray-500 hover:text-gray-600" href="#">
                      Blog
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-500 hover:text-gray-600" href="#">
                      Service
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-500 hover:text-gray-600" href="#">
                      Product
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-500 hover:text-gray-600" href="#">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-50 pt-8">
          <p className="lg:text-center text-sm text-gray-400">
            All rights reserved © Elroichurch 2022
          </p>
        </div>
      </div>
    </footer>
  );
};

export default NavFooter;
