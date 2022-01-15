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
        <div className="mx-[100px] my-[30vh] text-center">
          <div className="m-auto">
            <h2 className="font-semibold text-[50px]">TAGLINE <span className="text-primary">ONLINE</span></h2>
            <p className="text-3xl leading-loose">
              Pandemi merubah segalanya dan mengharuskan kita untuk beradaptasi.
              Ini adalah tantangan dan dunia yang baru dengan segala
              keterbatasan yang ada untuk menjangkau dunia yang besar ini. Kami
              membutuhkan anda untuk bergabung sesuai dengan ability, skill,
              calling untuk kita melakukan Kisah Para Rasul 1 ayat 8 yang
              berkata “Tetapi kamu akan menerima kuasa, kalau Roh Kudus turun ke
              atas kamu, dan kamu akan menjadi saksi-Ku di Yerusalem dan di
              seluruh Yudea dan Samaria dan sampai ke ujung bumi.”
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
