import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import Banner from "../../core/components/commons/banner";
import MainLayout from "../../core/components/commons/layouts/MainLayout";

const Colour: NextPage = () => {
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
        <Banner title="Colour" imgUrl="/assets/img/colour/colour.png" />
        <div className="m-auto w-full px-10 my-[150px] text-center">
          <div className="flex justify-between">
            <div className="text-3xl uppercase font-semibold">my miracle</div>
            <div className="text-xl text-sky-500 font-light">See More</div>
          </div>
          <br />
          <div className="scrolling-wrapper-flexbox">
            {miracle.length &&
              miracle.map((item, idx) => {
                return (
                  <div key={idx}>
                    <div className="w-[25vw] h-[17vw] card overflow-hidden mb-3 mx-3 rounded-[30px] shadow-lg">
                      <img
                        src={`${item.imgUrl}`}
                        className="h-[100%] w-full aspect-square"
                        alt="Term condition"
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="m-auto w-full my-[150px] text-center px-10">
          <div className="flex">
            <div className="w-1/2 mr-5 my-auto text-left pl-10">
              <h2 className="text-[50px] font-semibold">
                Why <span className="text-primary">Writing ?</span>
              </h2>
              <br />
              <p className="text-3xl leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                lacus gravida lectus venenatis.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Eget lacus gravida lectus
                venenatis.
              </p>
            </div>
            <div className="w-1/2">
              <div className="h-[45vh] w-[35vw] overflow-hidden mb-3 rounded-[30px] shadow-lg mx-auto">
                <img
                  src="/assets/img/volunteer/volunter1.png"
                  className="h-[100%] w-full aspect-square"
                  alt="Term condition"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="m-auto w-full px-10 my-[150px] text-center">
          <div className="flex justify-between">
            <div className="text-3xl font-semibold">Let’s Write</div>
            <div
              className="text-xl text-sky-500 font-light hover:cursor-pointer"
              onClick={() =>
                router.push("/colour/articles", undefined, { shallow: true })
              }
            >
              See More
            </div>
          </div>
          <br />
          <div className="flex">
            <div className="mr-10 w-1/2">
              <p className="text-left text-xl leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                lacus gravida lectus venenatis.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Eget lacus gravida lectus
                venenatis.
              </p>
              <div className="mt-6">
                <a
                  className="block uppercase sm:inline-block py-4 px-20 rounded-[15px] mb-4 sm:mb-0 sm:mr-3 text-lg text-white text-center font-semibold leading-none border bg-primary"
                  href="#"
                  onClick={() =>
                    router.push("/colour/article", undefined, { shallow: true })
                  }
                >
                  MAKE YOUR ARTICLES
                </a>
              </div>
            </div>
            <div className="scrolling-wrapper-flexbox">
              {miracle.length &&
                miracle.map((item, idx) => {
                  return (
                    <div key={idx}>
                      <h2 className="text-2xl font-semibold text-left ml-2 mb-4">
                        {item.title}
                      </h2>
                      <div className="w-[25vw] h-[17vw] card overflow-hidden mb-3 mx-3 rounded-[30px] shadow-lg">
                        <img
                          src={`${item.imgUrl}`}
                          className="h-[100%] w-full aspect-square"
                          alt="Term condition"
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Colour;
