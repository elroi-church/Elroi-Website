import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import Banner from "../../../core/components/commons/banner";
import MainLayout from "../../../core/components/commons/layouts/MainLayout";

const ColourDetail: NextPage = () => {
  const router = useRouter();
  const miracle = [
    {
      imgUrl: "/assets/img/colour/miracle.png",
      routeTo: "",
      title: "Running Home",
    },
    {
      imgUrl: "/assets/img/colour/miracle.png",
      routeTo: "",
      title: "Running Man",
    },
    {
      imgUrl: "/assets/img/colour/miracle.png",
      routeTo: "",
      title: "Running Run",
    },
    {
      imgUrl: "/assets/img/colour/miracle.png",
      routeTo: "",
      title: "Running Golf",
    },
    {
      imgUrl: "/assets/img/colour/miracle.png",
      routeTo: "",
      title: "Running Pagi",
    },
  ];

  return (
    <>
      <MainLayout>
        <div className="m-10">
          <div className="grid">
            {miracle.length &&
              miracle.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="relative hover:cursor-pointer w-100"
                    onClick={() =>
                      router.push(`/colour/detail/${idx}`, undefined, {
                        shallow: true,
                      })
                    }
                  >
                    {/* <h2 className="text-2xl font-semibold text-left ml-2 mb-4">
                      {item.title}
                    </h2> */}
                    <div className="w-[100%] h-[40vw] card overflow-hidden my-10 rounded-[30px] shadow-lg">
                      <div className="absolute bottom-[85px] left-5 text-white">
                        <h2 className="text-3xl font-bold uppercase">ALLAH MENYEMBUHKAN PENYAKITKU</h2>
                        <p className="font-light text-xl">Ibu Kusra Kisnanti</p>
                      </div>
                      <img
                        src={`${item.imgUrl}`}
                        className="h-[100%] object-cover w-full aspect-square"
                        alt="Term condition"
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default ColourDetail;
