import { NextPage } from "next";
import React from "react";
import Banner from "../../components/commons/banner";
import MainLayout from "../../components/commons/layouts/MainLayout";

const pastoral: NextPage = () => {
  const detail = [
    {
      title: "KUNJUNGAN",
      subtitile:
        "ERC Sawangan tetap melakukan kunjungan walaupun di masa pandemi ini namun tetap mematuhi protokol kesehatan",
      imgUrl: "/assets/img/pastoral/kunjungan.png",
    },
    {
      title: "PERNIKAHAN",
      subtitile:
        "Pelayanan pernikahan tetap dilakukan sesuai dengan peraturan pemerintah yaitu maksimal 30 orang termasuk yang melayani",
      imgUrl: "/assets/img/pastoral/pernikahan.png",
    },
    {
      title: "KUNJUNGAN",
      subtitile:
        "ERC Sawangan tetap melakukan kunjungan walaupun di masa pandemi ini namun tetap mematuhi protokol kesehatan",
      imgUrl: "/assets/img/pastoral/kunjungan.png",
    },
  ];

  return (
    <>
      <MainLayout>
        <Banner
          title="Pastoral Ministry "
          imgUrl="/assets/img/pastoral/pastoral.png"
        />
        {detail?.map((detail, index) => {
          return (
            <>
              <div className="flex my-[70px] mx-[50px]">
                {index % 2 === 0 ? (
                  <>
                    <div className="lg:w-1/2 w-full">
                      <div className="h-fit w-full overflow-hidden mb-3 rounded-[30px] shadow-lg">
                        <img src={`${detail.imgUrl}`} className="w-full" alt=""/>
                      </div>
                    </div>
                    <div className="w-1/2 my-auto ml-[8%] text-right">
                      <h2 className="font-bold text-3xl">{detail.title}</h2>
                      <p className="my-5">{detail.subtitile}</p>
                      <a
                        className="block uppercase sm:inline-block py-4 px-10 rounded-[15px] mb-4 sm:mb-0 sm:mr-3 text-lg text-white text-center font-semibold leading-none border bg-primary"
                        href="#"
                      >
                        CHAT FOR MORE INFO
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2 my-auto mr-[8%] text-left">
                      <h2 className="font-bold text-3xl">{detail.title}</h2>
                      <p className="my-5">{detail.subtitile}</p>
                      <a
                        className="block uppercase sm:inline-block py-4 px-10 rounded-[15px] mb-4 sm:mb-0 sm:mr-3 text-lg text-white text-center font-semibold leading-none border bg-primary"
                        href="#"
                      >
                        CHAT FOR MORE INFO
                      </a>
                    </div>
                    <div className="lg:w-1/2 w-full">
                      <div className="h-fit w-full overflow-hidden mb-3 rounded-[30px] shadow-lg">
                        <img src={`${detail.imgUrl}`} className="w-full" alt=""/>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </>
          );
        })}
      </MainLayout>
    </>
  );
};

export default pastoral;
