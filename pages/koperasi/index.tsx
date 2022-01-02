import { NextPage } from "next";
import React from "react";
import MainLayout from "../../core/components/commons/layouts/MainLayout";

const Koperasi: NextPage = () => {
  return (
    <>
      <MainLayout>
        <section
          className="pb-10 bg-center bg-cover"
          style={{
            backgroundImage: 'url("/assets/img/koperasi/koperasi.png")',
            height: "60vh",
          }}
        >
          <div className="container px-4 mx-auto">
            <nav className="flex justify-between items-center py-6">
              <a
                className="text-3xl text-white font-semibold leading-none"
                href="#"
              >
                <img
                  className="h-10"
                  src="metis-assets/logos/metis/metis-light-name.svg"
                  alt=""
                  width="auto"
                />
              </a>
            </nav>
            <div className="py-20 md:py-26 text-center">
              <div className="max-w-3xl mx-auto mb-5">
                <h2 className="text-[74px] text-white font-bold font-heading -mb-5">
                  Koperasi ERC KSMS
                </h2>
                <p className="text-white font-light text-2xl leading-relaxed tracking-wider">
                  Sejahtera Mandiri Semesta
                </p>
              </div>
              <div>
                <a
                  className="block sm:inline-block py-2 px-20 rounded-[10px] mb-4 sm:mb-0 sm:mr-3 text-lg text-white text-center leading-none border"
                  href="#"
                >
                  Join Us
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="m-auto w-1/2 my-[80px] text-center">
          <h1 className="font-bold text-[30px] mb-3">
            VISI & <span className="text-primary">MISI</span>
          </h1>
          <p className="text-2xl font-light mb-2">
            1. Pengentasan Kemiskinan & Meningkatkan Kesejahteraan Jemaat
          </p>
          <p className="text-2xl font-light mb-2">
            2. Melatih & Memperlengkapi jemaat menjadi Entrepreneur
          </p>
          <p className="text-2xl font-light mb-2">
            3. Menciptakan Lapangan Kerja untuk Jemaat
          </p>
        </div>
        <div className="m-auto w-full py-[80px] text-center bg-gray-100">
          <h1 className="font-bold text-[30px] mb-3">MANFAAT</h1>
          <p className="text-2xl font-light mb-2">
            1. Pengentasan Kemiskinan & Meningkatkan Kesejahteraan Jemaat
          </p>
          <p className="text-2xl font-light mb-2">
            2. Melatih & Memperlengkapi jemaat menjadi Entrepreneur
          </p>
          <p className="text-2xl font-light mb-2">
            3. Menciptakan Lapangan Kerja untuk Jemaat
          </p>
        </div>
        <div className="m-auto w-1/2 my-[80px] text-center">
          <h1 className="font-bold text-[30px] mb-3">STRUKTUR</h1>
          <br />
          <br />
          <div className="flex">
            <div className="w-1/2">
              <div className="h-fit w-full overflow-hidden mb-3 rounded-[30px] shadow-lg">
                <img
                  src="/assets/img/volunteer/volunter1.png"
                  className="w-full"
                  alt="Term condition"
                />
              </div>
            </div>
            <div className="w-1/2 ml-5 my-auto text-left">
                <h2 className="text-3xl font-semibold"> PENASEHAT</h2>
                <p className="text-xl"> Ps. M. Riza Solihin</p>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Koperasi;
