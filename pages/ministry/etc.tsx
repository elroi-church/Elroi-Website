import { NextPage } from "next";
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import Banner from "../../core/components/commons/banner";
import MainLayout from "../../core/components/commons/layouts/MainLayout";

const etc: NextPage = () => {
  const detail = [
    {
      title: "NAILS ART",
      subtitle:
        "Workshop Nail Art diadakan pada tahun 2018 bersama Dhirani Hartono founder dari @berbienails Peserta diajarkan mengenal alat-alat untuk menghias kuku, bagaimana dasar-dasar menggunakan cat kuku, jenis-jenis cat dan hiasan kuku, tips dan juga trick dalam menghias kuku. Peserta bebas bertanya kepada pengajar tentang cara membuat Nail Art. tidak lama berselang setelah workshop, beberapa peserta berhasil membuka jasa menghias kuku.",
      imgUrl: "/assets/img/etc/etc1.png",
    },
    {
      title: "ZOOM BASIC",
      subtitle:
        "Semenjak pandemi berbagai pertemuan gereja dilakukan secara online, salah satunya melalui aplikasi zoom, namun masih banyak jemaat sawangan dan sekitarnya belum fasih memakai aplikasi Zoom. inilah awal mula Zoom Basic Class di buat. Peserta diajarkan mengenal tools yang ada dan bagaimana cara menggunakannya. Mulai dari membuat gmail, mengganti profile picture, mengganti nama, mengganti background video sampai share screen. Pengajaran diberikan secara perlahan dan penuh dengan praktek agar jemaat mudah memahami materi khususnya sebagai seorang participants dalam sebuah online event.",
      imgUrl: "/assets/img/etc/zoom.png",
    },
    {
      title: "SOCIAL MEDIA WORKSHOP",
      subtitle:
        "Dalam workshop ini peserta diajarkan bagaimana memproduksi konten untuk kebutuhan gereja khususnya di Instagram. Peserta diberikan edukasi dasar mengenai bagaimana algoritma instagram bekerja, bagaimana membuat sistem untuk sebuah social media team & apa saja peran yg dibutuhkan, bagaimana membuat copywriting yang baik untuk postingan instagram, tools apa saja yg dapat digunakan oleh seorang content creator, pengetahuan dasar SEO serta tips & trick lainnya.",
      imgUrl: "/assets/img/etc/etc3.png",
    },
    {
      title: "ETC x DARASH DANCE",
      subtitle:
        "Guna memperlengkapi pelayan penari dan anak muda yang gemar menari dari segi skill, ETC berkolaborasi dengan penari profesional yang bergereja ditempat lain. Dance coach yang dipilih mengajar koreografi dengan warna yang baru bagi penari di El Roi Church. Sebagai output dari kelas tersebut, koreografi yang dipelajari telah dimodifikasi dengan kreativitas Darash Dance Crew sehingga berkembang menjadi koreo-koreo lain untuk kebutuhan ibadah mingguan sampai special performance.",
      imgUrl: "/assets/img/etc/darashdance.png",
    },
    {
      title: "MAKE UP CLASS",
      subtitle:
        "ETC memperlengkapi para wanita di El Roi Church yang merupakan seorang make up enthusiast, dan para pelayan jemaat khususnya penari & pelayan musik mimbar agar dapat merias diri dengan cara yang benar. ETC bertemu dengan seorang Make Up Artist profesional yang mau membagikan keahliannya. Wanita yang akrab di sapa ci Yufi (@yuficarolin.mua) secara rutin selama beberapa tahun mengajar & berkontribusi bagi El Roi Church. Melalui Make Up Workshop ini beberapa diantara peserta bukan hanya menjadi pandai merias diri, mereka juga berhasil membuka jasa rias wajah hingga saat ini.",
      imgUrl: "/assets/img/etc/makup_etc.png",
    },
  ];

  return (
    <>
      <MainLayout>
        <Banner
          title="El-Roi Training Center"
          imgUrl="/assets/img/etc/main_etc.png"
        />
        <div className="mt-2 px-4 lg:mt-10  lg:mx-[40px] flex flex-col lg:flex-col justify-center">
          <div className="w-full flex justify-center">
            <img
              src="/assets/img/etc/LOGO_ETC_BARU.png"
              className="object-cover"
              alt=""
            />
          </div>
          <div className="w-full justify-center my-auto px-2 mr-0 lg:mr-4">
            <h2 className="font-bold text-4xl text-center">WHO WE ARE</h2>
            <br />
            <p className="font-light text-2xl mb-2 lg:mb-0 text-justify indent-20">
              El Roi Training Center merupakan sebuah wadah yang membantu jemaat
              mengembangkan talenta yang Tuhan titipkan. El Roi Training Center
              membangun jembatan antara keahlian dengan kesempatan dengan cara
              memperlengkapi jemaat agar menjadi pribadi yang lebih baik. Jemaat
              yang memiliki persiapan matang untuk menghadapi dunia, baik dari
              segi hard skill ataupun soft skill. Harapannya ETC mampu mendorong
              setiap potensi jemaat agar makin berkualitas. Seiring meningkatnya
              kualitas yang dimiliki, meningkatkan pula kualitas hidup jemaat,
              agar nama Tuhan dipermuliakan dalam segala hasil yang dikerjakan.
            </p>
          </div>
          <div className="w-full justify-center my-auto mt-10 lg:mt-10">
            <h2 className="font-bold text-4xl mb-5 text-center">FOLLOW US</h2>
            <div className="flex justify-center">
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
        </div>
        <div className="mt-10">
          <h2 className="font-bold mx-auto text-4xl text-center">
            UP COMING CLASS
          </h2>
          <div className="my-5 lg:my-[70px]">
            <div className="w-full xl:w-3/4 m-auto px-5 lg:px-10 relative">
              <div className="h-fit w-full overflow-hidden mb-3 rounded-[30px] shadow-lg">
                <img
                  src="/assets/img/etc/secondmain_etc.png"
                  className="object-cover w-full"
                  alt=""
                />
              </div>
              <div className="absolute text-white left-[75px] bottom-[40px]">
                <h2 className="font-semibold text-xl md:text-3xl">
                  DANCE CLASS
                </h2>
                <p className="text-xl md:text-3xl font-thin">
                  Senin 20 Oktober 2022
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="font-bold mx-auto text-4xl text-center">
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
                        <h2 className="font-semibold text-3xl">
                          {detail.title}
                        </h2>
                        <p className="my-5 text-xl  lg:text-2xl font-light leading-9">
                          {detail.subtitle}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col-reverse lg:flex-row">
                      <div className="w-full lg:w-1/2 my-auto lg:mr-[8%] mx-2 text-left lg:text-right">
                        <h2 className="font-semibold text-3xl">
                          {detail.title}
                        </h2>
                        <p className="my-5 text-xl lg:text-2xl font-light leading-9">
                          {detail.subtitle}
                        </p>
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
