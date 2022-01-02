import { NextPage } from "next";
import React from "react";
import Banner from "../../core/components/commons/banner";
import MainLayout from "../../core/components/commons/layouts/MainLayout";

const cool: NextPage = () => {
  return (
    <>
      <MainLayout>
        <Banner
          title="e-COMMUNITY OF LOVE"
          imgUrl="/assets/img/online/cool.png"
        />
        <div className="m-20 flex">
          <div className="w-1/2">
            <img
              src="/assets/img/online/cool2.png"
              className="h-[100%] w-full rounded-lg"
              alt="Term condition"
            />
          </div>
          <div className="w-1/2 my-auto ml-20 text-center">
            <p className="text-[40px] tracking-wide">e-cool setiap Sabtu jam 7 malam</p>
            <br />
            <div className="text-center w-full">
              <a
                className="block uppercase sm:inline-block py-4 px-20 rounded-[15px] mb-4 sm:mb-0 sm:mr-3 text-lg text-white text-center font-semibold leading-none border bg-primary"
                href="#"
                onClick={() => {}}
              >
                REGISTER NOW
              </a>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default cool;
