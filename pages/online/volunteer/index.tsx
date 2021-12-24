import { NextPage } from "next";
import React, { useState } from "react";
import Banner from "../../../components/commons/banner";
import MainLayout from "../../../components/commons/layouts/MainLayout";

const index: NextPage = () => {
  const [state, setstate] = useState("online");

  const detail = [
    {
      title: "USHER MINISTRY",
      subtitle: ["1. Youtube Admin"],
      imgUrl: "/assets/img/volunteer/volunter1.png",
    },
    {
      title: "CREATIVE TEAM",
      subtitle: ["1. Copy Writer"],
      imgUrl: "/assets/img/volunteer/volunter2.png",
    },
  ];
  return (
    <>
      <MainLayout>
        <Banner
          title="Volunteers"
          imgUrl="/assets/img/volunteer/volunter.png"
        />
        <div className="my-[100px] mx-[40px]">
          <h2 className="font-bold text-3xl text-center">
            Be a Part Of <span className="text-primary">ERC Sawangan</span>
          </h2>
          <div className="flex justify-center mt-10">
            <p
              className={`block uppercase sm:inline-block px-4 rounded-[15px] sm:mb-0 sm:mr-3 text-lg text-center leading-none ${
                state === "online" ? "" : "text-gray-400"
              } hover:cursor-pointer`}
              onClick={() => setstate("online")}
            >
              Online
            </p>
            <span className="text-3xl -mt-[10px]">|</span>
            <p
              className={`block uppercase sm:inline-block px-4 rounded-[15px] sm:mb-0 sm:mr-3 text-lg text-center leading-none ${
                state === "offline" ? "" : "text-gray-400"
              } hover:cursor-pointer`}
              onClick={() => setstate("offline")}
            >
              Offline
            </p>
          </div>
        </div>
        {detail?.map((detail, index) => {
          return (
            <>
              {index % 2 === 0 ? (
                <>
                  <div className="flex my-[70px] px-[50px] bg-gray-200 py-[50px]">
                    <div className="w-[60vw] mx-auto flex">
                      <div className="lg:w-1/2 w-full">
                        <div className="h-fit w-full overflow-hidden mb-3 rounded-[30px] shadow-lg">
                          <img src={`${detail.imgUrl}`} className="w-full" />
                        </div>
                      </div>
                      <div className="w-1/2 my-auto ml-[8%] text-left">
                        <h2 className="font-bold text-3xl">{detail.title}</h2>
                        {detail.subtitle?.map((subtitle) => {
                          return (
                            <>
                              <p className="my-5">{subtitle}</p>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex my-[70px] px-[50px] py-[50px]">
                    <div className="w-[60vw] mx-auto flex">
                      <div className="w-1/2 my-auto mr-[8%] text-right">
                        <h2 className="font-bold text-3xl">{detail.title}</h2>
                        {detail.subtitle?.map((subtitle) => {
                          return (
                            <>
                              <p className="my-5">{subtitle}</p>
                            </>
                          );
                        })}
                      </div>
                      <div className="lg:w-1/2 w-full">
                        <div className="h-fit w-full overflow-hidden mb-3 rounded-[30px] shadow-lg">
                          <img src={`${detail.imgUrl}`} className="w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          );
        })}
      </MainLayout>
    </>
  );
};

export default index;
