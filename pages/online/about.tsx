import { NextPage } from "next";
import React from "react";
import Banner from "../../core/components/commons/banner";
import MainLayout from "../../core/components/commons/layouts/MainLayout";

const cool: NextPage = () => {
  return (
    <>
      <MainLayout>
        <Banner
          title="WELCOME TO ERC ONLINE"
          imgUrl="/assets/img/about/about.png"
        />
        <div className="mx-[80px] my-[30vh] text-center">
          <div className="w-1/2 m-auto">
            <h2 className="font-semibold text-[40px]">TAGLINE ONLINE</h2>
            <p className="text-xl">
              No Matter Where You Are, You Are Our Family and You Can
            </p>
          </div>
        </div>
        <div className="my-20 flex">
          <div className="w-1/3">
            <img
              src="/assets/img/about/aboutp.png"
              className="h-[100%] rounded-r-lg"
              alt="Term condition"
            />
          </div>
          <div className="w-2/3 my-auto ml-20">
            <p className="text-[40px] tracking-wide font-bold">
              GLOBAL CHURCH PASTOR
            </p>
            <br />
            <p className="text-3xl font-semibold tracking-wide">
              Kezia Hanni Imanuela
            </p>
            <p className="text-xl tracking-wide">
              Email: gbisawangan@elroichurch.com
            </p>
            <br />

            <a
              className="block uppercase sm:inline-block py-4 px-20 rounded-[15px] mb-4 sm:mb-0 sm:mr-3 text-lg text-white text-center font-semibold leading-none border bg-primary"
              href="#"
              onClick={() => {}}
            >
              CONTACT NOW
            </a>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default cool;
