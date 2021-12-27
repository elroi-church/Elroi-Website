import { NextPage } from "next";
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import Banner from "../../core/components/commons/banner";
import MainLayout from "../../core/components/commons/layouts/MainLayout";

const etc: NextPage = () => {
  const detail = [
    {
      title: "NAILS ART",
      subtitile:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh malesuada viverra adipiscing mauris etiam nunc ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh malesuada viverra adipiscing mauris etiam nunc ut.",
      imgUrl: "/assets/img/etc/etc1.png",
    },
    {
      title: "COACHING CLINIC (FATHERING)",
      subtitile:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh malesuada viverra adipiscing mauris etiam nunc ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh malesuada viverra adipiscing mauris etiam nunc ut.",
      imgUrl: "/assets/img/etc/etc2.png",
    },
    {
      title: "SOCIAL MEDIA WORKSHOP",
      subtitile:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh malesuada viverra adipiscing mauris etiam nunc ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh malesuada viverra adipiscing mauris etiam nunc ut.",
      imgUrl: "/assets/img/etc/etc3.png",
    },
  ];

  return (
    <>
      <MainLayout>
        <Banner
          title="El-Roi Training Center"
          imgUrl="/assets/img/etc/etc.png"
        />
        <div className="mt-2 px-5 lg:mt-10 lg:mx-[40px] flex flex-col lg:flex-row">
          <div className="w-full flex justify-center lg:w-1/3">
            <img
              src="/assets/img/etc/LOGO_ETC_BARU.png"
              className="object-cover"
              alt=""
            />
          </div>
          <div className="w-full lg:w-1/3 my-auto px-2">
            <h2 className="font-bold text-xl">WHO WE ARE</h2>
            <br />
            <p className="font-light mb-3 lg:mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              curabitur amet,massa mi nec, pellentesque.
            </p>
          </div>
          <div className="w-full lg:w-1/3 my-auto">
            <h2 className="font-bold text-xl">WHO WE ARE</h2>
            <br />
            <button
              className="overflow-hidden mb-3 rounded-[30px] shadow-lg bg-[#F4F0F0] hover:bg-[#f0f0f0] hover:cursor-pointer py-3 px-5  sm:mr-3 text-sm text-center font-semibold my-auto flex items-center transition duration-400"
              onClick={() => {
                window.open("https://www.instagram.com/etc_sawangan");
              }}
            >
              <AiOutlineInstagram className="text-3xl mr-3" />
              <p className="text-xl">@etc_sawangan</p>
            </button>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="font-bold mx-auto text-3xl text-center">
            WHAT WE’VE DONE
          </h2>
          {detail?.map((detail, index) => {
            return (
              <>
                <div className="flex flex-col lg:flex-row mx-2 my-5 lg:my-[70px] lg:mx-[50px]">
                  {index % 2 === 1 ? (
                    <div className="flex flex-col lg:flex-row">
                      <div className="w-full lg:w-1/2">
                        <div className="h-fit w-full overflow-hidden mb-3 rounded-[30px] shadow-lg">
                          <img
                            src={`${detail.imgUrl}`}
                            className="object-cover w-full"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-1/2 my-auto mx-2 lg:ml-[8%] text-left">
                        <h2 className="font-bold text-3xl">{detail.title}</h2>
                        <p className="my-5">{detail.subtitile}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col-reverse lg:flex-row">
                      <div className="w-full lg:w-1/2 my-auto lg:mr-[8%] mx-2 text-left lg:text-right">
                        <h2 className="font-bold text-3xl">{detail.title}</h2>
                        <p className="my-5">{detail.subtitile}</p>
                      </div>
                      <div className="w-full lg:w-1/2">
                        <div className="h-fit w-full overflow-hidden mb-3 rounded-[30px] shadow-lg">
                          <img
                            src={`${detail.imgUrl}`}
                            className="object-cover w-full"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </MainLayout>
    </>
  );
};

export default etc;
