import { NextPage } from "next";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Banner from "../../core/components/commons/banner";
import MainLayout from "../../core/components/commons/layouts/MainLayout";

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
      title: "KEMATIAN",
      subtitile:
        "Pelayanan kematian dimasa pandemi ini mengalami peningkatan sebanyak 300%. kami melayani tidak hanya melayani ERC Family tetapi juga jemaat lainnya",
      imgUrl: "/assets/img/pastoral/kematian.png",
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
              {index % 2 === 0 ? (
                <div className="flex flex-wrap my-5 px-5 lg:my-[70px] lg:px-[50px]">
                  <div className="w-full lg:w-1/2 my-auto text-center lg:text-right px-5">
                    <div className="h-fit w-full overflow-hidden mb-3 rounded-[30px] shadow-lg">
                      <img src={`${detail.imgUrl}`} className="w-full" alt="" />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 my-auto text-center lg:text-right flex flex-col">
                    <h2 className="font-bold text-3xl ">{detail.title}</h2>
                    <p className="my-5">{detail.subtitile}</p>
                    <a
                      className="flex justify-center lg:justify-self-end uppercase  py-4 px-12 rounded-[15px] mb-4 sm:mb-0 text-lg text-white text-center font-semibold leading-none border bg-primary"
                      href="https://wa.me/62817190197"
                    >
                      <FaWhatsapp className="mr-2 text-lg" />
                      CHAT FOR MORE INFO
                    </a>
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap my-5 px-5 lg:my-[70px] lg:px-[50px] flex-col-reverse lg:flex-row">
                  <div className="w-full lg:w-1/2 my-auto text-center lg:text-left px-5">
                    <h2 className="font-bold text-3xl">{detail.title}</h2>
                    <p className="my-5">{detail.subtitile}</p>
                    <a
                      className="flex justify-center uppercase  py-4 px-12 rounded-[15px] mb-4 sm:mb-0 text-lg text-white text-center font-semibold leading-none border bg-primary"
                      href="https://wa.me/62817190197"
                    >
                      <FaWhatsapp className="mr-2 text-lg" />
                      CHAT FOR MORE INFO
                    </a>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="h-fit w-full overflow-hidden mb-3 rounded-[30px] shadow-lg">
                      <img src={`${detail.imgUrl}`} className="w-full" alt="" />
                    </div>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </MainLayout>
    </>
  );
};

export default pastoral;
