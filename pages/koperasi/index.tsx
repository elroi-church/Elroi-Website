import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import MainLayout from "../../core/components/commons/layouts/MainLayout";

const Koperasi: NextPage = () => {
  const uniqueSelling = [
    "Mendapatkan pelatihan UMKM (secara gratis atau harga khusus)",
    "Kartu Anggota Diskon (khusus barang tertentu atau harga khusus)",
    "Permodalan (untuk anggota yang aktif, syarat dan ketentuan berlaku)",
    "Sisa Hasil Usaha",
    "Membantu penjualan produk anggota",
  ];
  const ketentuanIuran = [
    "Iuran Dibayar Setiap Bulan",
    "Besaran Iuran Berpengaruh Signifikan dengan SHU",
    "Besaran Iuran Berpengaruh pada Sistem Simpan-Pinjam",
  ];
  return (
    <>
      <Head>
        <title>Koperasi - ERC | Elroi Church Sawangan</title>
      </Head>
      <MainLayout>
        <section
          className="pb-10 bg-center bg-cover"
          style={{
            backgroundImage: 'url("/assets/img/koperasi/koperasi.png")',
            height: "60vh",
          }}
        >
          <div className="container px-4 mx-auto">
            <nav className="flex justify-between items-center lg:py-6">
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
                <h2 className="text-5xl md:text-[74px] text-white font-bold font-heading">
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
        <div className="my-[80px] text-center">
          <div className="m-auto w-2/3">
            <div className="font-bold mb-4">
              <img
                src="/assets/img/koperasi/LOGO KSMS.png"
                className="w-full lg:w-[60%] m-auto"
                alt="Logo KSMS"
              />
            </div>
            <p className="text-2xl font-light mb-2 leading-loose">
              KSMS ERC singkatan dari Koperasi Sejahtera Mandiri Semesta ERC.
              lahirnya koperasi ini dari keinginan para pembentuk koperasi untuk
              membantu masyarakat dalam hal ini anggota koperasi untuk bisa
              menghasilkan income tambahan terutama pada masa covid 19 dan
              mensejahterakan anggotanya. Sesuai dengan visi dan misi KSMS ERC
              tersebut maka beberapa program meningkatkan kesejahteraan anggota
              yaitu: adanya training entrepreneur untuk menghasilkan
              pelaku-pelaku bisnis yang baru (UMKM), penjualan bahan pokok
              dengan harga terjangkau, menjadi distributor dari produk anggota,
              sistem simpan pinjam yang tidak memberatkan dan lain sebagainya.
            </p>
          </div>
        </div>
        <div className="bg-gray-100 py-[80px]">
          <div className="m-auto w-2/3 text-center">
            <h1 className="font-bold text-[50px] mb-3">
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
        </div>
        <div className="py-[80px]">
          <div className="m-auto w-[90%] md:w-2/3 text-center">
            <h1 className="font-bold text-3xl md:text-[50px] mb-3">
              UNIQUE SELLING POINT
            </h1>
            {uniqueSelling?.map((item, idx) => (
              <div className="p-5 bg-primary rounded-xl mb-5" key={idx}>
                <p className="text-2xl font-light text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="py-[80px] bg-gray-100">
          <div className="m-auto w-[90%] md:w-2/3 text-center">
            <h1 className="font-bold text-3xl md:text-[50px] mb-3">
              IURAN ANGGOTA
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 bg-primary rounded-xl bg-gray-400">
                <p className="text-2xl font-semibold text-white">SILVER</p>
                <p className="text-2xl font-semibold text-white">RP.10.000</p>
              </div>
              <div className="p-5 bg-primary rounded-xl bg-[#DAA520]">
                <p className="text-2xl font-semibold text-white">GOLD</p>
                <p className="text-2xl font-semibold text-white">RP.30.000</p>
              </div>
              <div className="p-5 bg-primary rounded-xl bg-black">
                <p className="text-2xl font-semibold text-white">PLATINUM</p>
                <p className="text-2xl font-semibold text-white">RP.50.000</p>
              </div>
            </div>
          </div>
          <div className="m-auto w-[90%] md:w-2/3 text-center mt-10">
            <h1 className="font-bold text-3xl md:text-[50px] mb-3">
              KETENTUAN IURAN
            </h1>
            {ketentuanIuran?.map((item, idx) => (
              <div
                className="p-5 outline outline-primary rounded-xl mb-5"
                key={idx}
              >
                <p className="text-2xl font-light text-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="m-auto w-[90%] md:w-2/3 my-[80px] text-center">
          <h1 className="font-bold text-3xl md:text-[50px] mb-3">STRUKTUR</h1>
          <br />
          <br />
          <div className="md:flex">
            <div className="w-full md:w-1/2">
              <div className="h-fit w-full overflow-hidden mb-3 rounded-[30px] shadow-lg">
                <img
                  src="/assets/img/koperasi/struktur.png"
                  className="w-full"
                  alt="Term condition"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 md:ml-10 my-auto text-center md:text-left">
              <h2 className="text-3xl font-semibold"> PENASIHAT</h2>
              <p className="text-xl"> Ps. M. Riza Solihin</p>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Koperasi;
