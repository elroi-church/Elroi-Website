import React, { FunctionComponent } from "react";
import MainLayout from "../../core/components/commons/layouts/MainLayout";
import Navbar from "../../core/components/commons/nav/navbar";

const index: FunctionComponent = () => {
  const containerImage = [
    "/assets/img/about/about1.png",
    "/assets/img/about/about2.png",
    "/assets/img/about/about3.png",
    "/assets/img/about/about4.png",
  ];

  const listAbout = [
    {
      id: 1,
      img: "/assets/img/about/about_section.png",
      desc: "GBI ERC Sawangan was founded in mid 1993 by the late Ps. Soewito Njotorahardjo and Ps. Mariana A. Njotorahardjo whom we are more familiarly with as Uncle Nyo and Aunt Mariana to shepherd the residents of “Kasih Agape Nursing Home” and the Young Generations in Bojongsari, and Sawangan and that subsequently has brought forth GBI RAYON 9 which is currently being shepherded by Ps. Jongky T.M Mth.",
    },
    {
      id: 2,
      img: "/assets/img/about/about_section2.png",
      desc: "There are a lot of spiritual life journey experiences that we look up to, high discipline as well as opportunity and trust given for us to grow in our ministry. Nurtures and upbringings push us ahead to keep going on in our holiness, faithfulness, and obedience accordant with the motto of our Ps. Nyo KST which is “Holy, Faithful and Obedient.”",
    },
    {
      id: 3,
      img: "/assets/img/about/about_section3.png",
      desc: "Uncle Njo’s discipline emanated from his longing that his children can be as successful as they can be in the future and that has not been a vain dream as it’s proven that the next three generations; Ps. Niko Njotorahardjo, Ps. Billy Njotorahardjo & Bryan Njotorahardjo and their countless family members, as well as their spiritual families have served and become God’s wonderful vessels, and that’s all for God’s glory alone.",
    },
    {
      id: 4,
      img: "/assets/img/about/about_section4.png",
      desc: "Uncle Njo was called home in his 81 in February 13th 2006, followed by Aunt Mariana in May 30th 2011 in her 85. They were married for more than 60 years and both of their life Values in Christianity are perceived as an epitome of a deep well that never runs dry, pouring an endless living life for us to remember.",
    },
  ];

  return (
    <>
      <MainLayout>
        <section className="w-full">
          <div className="px-4 mx-auto w-full">
            <div className="flex flex-wrap -mx-4 -mb-4">
              {containerImage?.map((container) => {
                return (
                  <>
                    <div className="w-1/4">
                      <div className="flex flex-wrap mb-4">
                        <div className="w-full mb-8">
                          <a href="#">
                            <img
                              className="h-80 w-full mx-auto object-cover object-cover"
                              src={container}
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="container w-full mx-auto text-center mt-4">
            <h1 className="text-4xl font-bold">
              History Of <span className="text-orange-400">ERC Sawangan </span>
            </h1>
          </div>
        </section>
        <section className="py-20 w-full">
          <div className="flex flex-wrap items-center mb-16 w-full">
            {listAbout?.map((about, idx) => {
              return (
                <div
                  key={idx}
                  className="w-full flex flex-wrap mb-10 lg:mb-[8rem]"
                >
                  {idx % 2 !== 0 ? (
                    <>
                      <div className="w-full lg:w-2/3 px-[20px] lg:px-0 lg:pl-10 order-last lg:order-first">
                        <div className="indent-24 lg:indent-0 text-justify lg:text-right mr-0 lg:mr-10">
                          <p className="text-lg text-gray-500 leading-loose lg:text-2xl lg:leading-[3rem]">
                            {about.desc}
                          </p>
                        </div>
                      </div>
                      <div className="w-full order-first lg:order-last lg:w-1/3 mb-8 lg:mb-0">
                        <img
                          className="w-1/2 lg:w-full h-full m-auto lg:m-0 rounded-[20px] lg:rounded-[0px] lg:rounded-l-xl"
                          src={about.img}
                          alt=""
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
                        <img
                          className="w-1/2 lg:w-full h-full m-auto lg:m-0 rounded-[20px] lg:rounded-[0px] lg:rounded-r-xl"
                          src={about.img}
                          alt=""
                        />
                      </div>
                      <div className="w-full lg:w-2/3 px-[20px] lg:px-0 lg:pr-10">
                        <div className="indent-24 lg:indent-0 text-justify lg:text-left ml-0 lg:ml-10">
                          <p className="text-lg text-gray-500 leading-loose lg:text-2xl lg:leading-[3rem]">
                            {about.desc}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </section>
        <section className="py-20 bg-gray-100 text-center">
          <h1 className="font-bold text-4xl mb-3">
            <span className="text-primary">VISI MISI</span> GBI SAWANGAN
          </h1>
          <br />
          <br />
          <div className="w-2/3 m-auto">
            <p className="leading-loose lg:text-3xl lg:leading-[3rem] mb-3">
              Lukas 1 : (17) dan ia akan berjalan mendahului Tuhan dalam roh dan
              kuasa Elia untuk membuat hati bapa-bapa berbalik kepada
              anak-anaknya dan hati orang-orang durhaka kepada pikiran
              orang-orang benar dan dengan demikian menyiapkan bagi Tuhan suatu
              umat yang layak bagi-Nya.
            </p>
            <p className="leading-loose lg:text-3xl lg:leading-[3rem] mb-3">
              Berdasarkan Lukas 1 : 17 tugas gereja membawa banyak orang yang
              belum percaya menjadi percaya kepada Kristus juga sekaligus
              memjadikan orang percaya menjadi lebih sungguh untuk menjadi
              Mempelai Kristus di era normal baru dengan kekuatan tatap muka
              (onsite) juga tatap layar (online).
            </p>
            <p className="leading-loose lg:text-3xl lg:leading-[3rem] mb-3">
              Gereja GBI ERC Sawangan rindu & berusaha sungguh-sungguh untuk
              menjadi berkat, menjangkau dan memuridkan generasi terakhir ini
              sebagai Gereja Lokal dan juga Gereja Global dengan menggunakan
              semua platform digital untuk kemuliaanNya di era Pentakosta ke 3
              dengan kekuatan Generasi Yeremia yang cinta Tuhan habis-habisan
              memenangkan banyak jiwa di era terakhir menjelang kedatangan Tuhan
              ke 2 kali.
            </p>
          </div>
        </section>
        <section>
          <div className="m-auto w-2/3 my-[80px] text-center">
            <h1 className="font-bold text-4xl mb-3">
              MEET THE <span className="text-primary">PASTOR</span>
            </h1>
            <br />
            <br />
            <div className="lg:flex">
              <div className="w-full lg:w-1/2">
                <div className="h-fit w-full overflow-hidden mb-3 rounded-[30px] shadow-lg">
                  <img
                    src="/assets/img/about/meetpastor.png"
                    className="w-full"
                    alt="Meet Pastor"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 ml-10 my-auto text-left">
                <h2 className="text-3xl font-semibold"> Senior Pastor</h2>
                <p className="text-xl"> Ps. M. Riza Solihin</p>
                <p className="text-xl"> Ps. Elsa Imelda</p>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default index;
