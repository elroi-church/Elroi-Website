import type { NextPage } from "next";
import MainLayout from "../components/commons/layouts/MainLayout";

const Home: NextPage = () => {
  return (
    <>
      <MainLayout>
        <section
          className="pb-10 bg-top bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url("/assets/img/banner_home.png")',
          }}
        >
          <div className="container px-4 mx-auto">
            <nav className="flex justify-between items-center py-6">
              <a
                className="text-3xl text-white font-semibold leading-none"
                href="#"
              >
                <img
                  className="h-10"
                  src="metis-assets/logos/metis/metis-light-name.svg"
                  alt=""
                  width="auto"
                />
              </a>
            </nav>
            <div className="py-20 md:py-26 text-center">
              <div className="max-w-3xl mx-auto mb-5">
                <h2 className="text-[74px] text-white font-bold font-heading -mb-5">
                  El-Roi Chruch
                </h2>
                <p className="text-white text-2xl leading-relaxed tracking-wider">
                  Sawangan
                </p>
              </div>
              <div>
                <a
                  className="block uppercase sm:inline-block py-4 px-20 rounded-[35px] mb-4 sm:mb-0 sm:mr-3 text-lg text-white text-center font-semibold leading-none border"
                  href="#"
                >
                  Watch Our Service Now
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-20">
          <div className="container px-4 mx-auto mb-10 lg:mb-0">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-wrap lg:h-96 sm:max-w-md">
                <div className="flex mb-2 items-center justify-center">
                  <a className="text-xs text-gray-200" href="#">
                    Home
                  </a>
                  <svg
                    className="w-3 h-3 mx-1 text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <a className="text-xs text-gray-200" href="#">
                    Blog
                  </a>
                  <svg
                    className="w-3 h-3 mx-1 text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <a className="text-xs text-gray-200" href="#">
                    Article
                  </a>
                </div>
                <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading">
                  Lorem ipsum dolor sit amet consectutar domor at elis
                </h2>
                <div className="flex items-center justify-center">
                  <div className="mr-6">
                    <img
                      className="w-16 h-16 object-cover rounded-full"
                      src="mockup-assets/images/gray-300-avatar.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-heading">
                      Danny Bailey
                    </h3>
                    <p className="text-lg text-gray-500">February 26, 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:absolute lg:top-0 lg:mt-20 lg:pl-8 lg:right-0 lg:w-1/2 h-96">
            <img
              className="h-full w-full ml-auto object-cover lg:rounded-l-xl"
              src="mockup-assets/images/gray-500-horizontal.png"
              alt=""
            />
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default Home;
