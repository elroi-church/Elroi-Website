import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import Banner from "../../../core/components/commons/banner";
import MainLayout from "../../../core/components/commons/layouts/MainLayout";

const ColourArticle: NextPage = () => {
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
        <Banner title="The Rainbow" imgUrl="/assets/img/colour/colour.png" />
        <div className="m-10">
          <h2 className="font-semibold text-[40px] py-10 text-center">Artikel</h2>
          <div className="grid xs:grid-cols-12 md:grid-cols-4">
            {miracle.length &&
              miracle.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="relative hover:cursor-pointer"
                    onClick={() =>
                      router.push(`/colour/articles/${idx}`, undefined, {
                        shallow: true,
                      })
                    }
                  >
                    {/* <h2 className="text-2xl font-semibold text-left ml-2 mb-4">
                      {item.title}
                    </h2> */}
                    <div className="xs:w-[100%] xs:h-fit md:w-[20vw] md:h-[17vw] card overflow-hidden my-10 rounded-[30px] shadow-lg">
                      <div className="absolute bottom-[55px] left-5 text-white">
                        <h2 className="text-xl font-bold">Running Home</h2>
                        <p className="font-light">Hizqia Chandra</p>
                      </div>
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
      </MainLayout>
    </>
  );
};

export default ColourArticle;
