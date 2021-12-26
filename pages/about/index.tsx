import React, { FunctionComponent } from "react";
import MainLayout from "../../core/components/commons/layouts/MainLayout";
import Navbar from "../../core/components/commons/nav/navbar";

const index: FunctionComponent = () => {
  const containerImage = [
    "/assets/img/about/about1.png",
    "/assets/img/about/about2.png",
    "/assets/img/about/about3.png",
    "/assets/img/about/about4.png",
  ];

  return (
    <>
      <MainLayout>
        <section className="w-full">
          <div className="px-4 mx-auto w-full">
            <div className="flex flex-wrap -mx-4 -mb-4">
              {containerImage?.map((container) => {
                return (
                  <>
                    <div className="w-1/4">
                      <div className="flex flex-wrap mb-4">
                        <div className="w-full mb-8">
                          <a href="#">
                            <img
                              className="h-80 w-full mx-auto object-cover object-cover"
                              src={container}
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="container w-full mx-auto text-center">
            <h1 className="text-4xl font-bold">
              History Of <span className="text-orange-400">ERC Sawangan </span>
            </h1>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center -mx-4 mb-16">
              <div className="w-full lg:w-2/5">
                <div className="text-left lg:max-w-xs">
                  <p className="text-lg text-gray-500 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque massa nibh, pulvinar vitae aliquet nec,
                    accumsan aliquet orci.
                  </p>
                </div>
              </div>
              <div className="order-first lg:order-last w-full lg:w-3/5 px-4 mb-8 lg:mb-0">
                <div className="h-96">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src="/assets/img/about/about_section.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center -mx-4 mb-16">
              <div className="w-full lg:w-3/5 px-4 mb-8 lg:mb-0">
                <div className="h-96">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src="/assets/img/about/about_section.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full lg:w-2/5 px-4">
                <div className="text-left lg:max-w-xs lg:ml-auto">
                  <p className="text-lg text-gray-500 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque massa nibh, pulvinar vitae aliquet nec,
                    accumsan aliquet orci.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center -mx-4 mb-12">
              <div className="w-full lg:w-2/5 px-4">
                <div className="text-left lg:max-w-xs">
                  <p className="text-lg text-gray-500 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque massa nibh, pulvinar vitae aliquet nec,
                    accumsan aliquet orci.
                  </p>
                </div>
              </div>
              <div className="order-first lg:order-last w-full lg:w-3/5 px-4 mb-8 lg:mb-0">
                <div className="h-96">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src="/assets/img/about/about_section.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center -mx-4 mb-20">
              <div className="w-full lg:w-3/5 px-4 mb-8 lg:mb-0">
                <div className="h-96">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src="/assets/img/about/about_section.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full lg:w-2/5 px-4">
                <div className="text-left lg:max-w-xs lg:ml-auto">
                  <p className="text-lg text-gray-500 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque massa nibh, pulvinar vitae aliquet nec,
                    accumsan aliquet orci.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default index;
