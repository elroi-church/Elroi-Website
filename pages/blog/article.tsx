import { NextPage } from "next";
import React from "react";
import Banner from "../../core/components/commons/banner";
import MainLayout from "../../core/components/commons/layouts/MainLayout";

const ColourArticle: NextPage = () => {
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
        <div className="bg-gray-100 m-10 p-10">
          <h2 className="font-semibold text-4xl text-center">
            Make Your Articles
          </h2>
          <form className=" px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-left  text-gray-700 text-sm mb-2"
                htmlFor="judulartikel"
              >
                Judul Artikel
              </label>
              <input
                className="appearance-none rounded-[10px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                id="judulartikel"
                type="text"
                placeholder="Judul Artikel"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-left  text-gray-700 text-sm mb-2"
                htmlFor="tempaltgl"
              >
                Tempat, Tanggal
              </label>
              <input
                className="appearance-none  rounded-[10px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                id="tempaltgl"
                type="text"
                placeholder="Tempat, Tanggal"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-left  text-gray-700 text-sm mb-2"
                htmlFor="partikel"
              >
                Pembuat Artikel
              </label>
              <input
                className="appearance-none  rounded-[10px] border-gray border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                id="partikel"
                type="text"
                placeholder="Pembuat Artikel"
              />
            </div>
            <div className="mb-4">
              <label className="block text-left  text-gray-700 text-sm mb-2">
                Pembuka
              </label>
              <textarea
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transitionease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlTextarea1"
                rows={3}
                placeholder="Pembuka"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-left  text-gray-700 text-sm mb-2">
                Isi Artikel
              </label>
              <textarea
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transitionease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlTextarea1"
                rows={3}
                placeholder="Isi Artikel"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-left  text-gray-700 text-sm mb-2">
                Penutup
              </label>
              <textarea
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transitionease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlTextarea1"
                rows={3}
                placeholder="Penutup"
              ></textarea>
            </div>
          </form>
          <div className="w-full text-center">
            <a
              className="block uppercase sm:inline-block py-3 px-10 m-auto rounded-[15px] mb-4 sm:mb-0 sm:mr-3 text-lg text-black text-center font-semibold leading-none border border-primary border-2 bg-transparent hover:bg-primary hover:border-transparent hover:text-white"
              href="#"
            >
              <div className="flex text-center w-full m-auto justify-center">
                MAKE YOUR ARTICLES
              </div>
            </a>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default ColourArticle;
