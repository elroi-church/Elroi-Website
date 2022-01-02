import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import MainLayout from "../../core/components/commons/layouts/MainLayout";
import CardBtn from "../../core/components/online/CardBtn";
import TitleTag from "../../core/components/online/TitleTag";

const Online: NextPage = () => {
  const [state, setstate] = useState("weekdays");
  const router = useRouter();

  const weekdays = [
    {
      title: "ERC FAMILY TALK",
      subtitle: "Sikap Hati Yang Baru - Ka Yonas",
      time: "Monday, 15 Desember 2021 | 08.30 AM",
      url: "",
    },
    {
      title: "THE SIGNIFICANT WOMAN",
      subtitle: "Main Atas Bukan Bawah  - PS.M.Riza Solihin",
      time: "Thursday, 19 Desember 2021 | 08.30 AM",
      url: "",
    },
  ];
  const weekend = [
    {
      title: "ERC KIDS CHURCH",
      subtitle: "Sikap Hati Yang Baru - Ka Yonas",
      time: "08.30 AM",
      url: "",
    },
    {
      title: "ERC GENERAL SERVICE",
      subtitle: "Main Atas Bukan Bawah  - PS.M.Riza Solihin",
      time: "06.00 AM | 10.00 AM",
      url: "",
    },
  ];

  const card = [
    {
      title: "GIVE ONLINE",
      titlebtn: "LET’S GIVE",
      subtitle:
        "Kita memberi karena Tuhan sudah terlebih dahulu memberi kepada kita",
      url: "",
      bg: "",
    },
    {
      title: "CONNECT WITH PEOPLE",
      titlebtn: "JOIN NOW",
      subtitle:
        "Tuhan telah menetaplan kita untuk tidak hidup sendiri. Melalui Cool Online kamu bisa membangun hubungan dengan orang lain & bertumbuh dalam iman bersama",
      url: "",
      bg: "",
    },
  ];

  return (
    <MainLayout>
      <div className="px-[60px] mb-10 mt-[40px]">
        <div className="bg-primary flex p-[20px] rounded-[25px]">
          <div className="w-1/3 text-center my-auto">
            <h4
              className="hover:cursor-pointer"
              onClick={() =>
                router.push("/online/about", undefined, { shallow: true })
              }
            >
              About Online
            </h4>
          </div>
          <div className="w-[40px] text-center my-auto">
            <hr className="rotate-90" />
          </div>
          <div className="w-1/3 text-center my-auto">
            <h4
              className="hover:cursor-pointer"
              onClick={() =>
                router.push("/online/cool", undefined, { shallow: true })
              }
            >
              eCool
            </h4>
          </div>
          <div className="w-[40px] text-center my-auto">
            <hr className="rotate-90" />
          </div>
          <div className="w-1/3 text-center my-auto">
            <h4
              className="hover:cursor-pointer"
              onClick={() =>
                router.push("/online/volunteer", undefined, { shallow: true })
              }
            >
              Volunteer
            </h4>
          </div>
        </div>
      </div>
      <div className="px-[60px] relative">
        <img
          src={`${
            state === "weekend"
              ? "/assets/img/online/bgkend.png"
              : "/assets/img/online/bgdays.png"
          }`}
          className="rounded-lg object-fit mx-auto"
          alt="Online"
        />
        <p className="text-white font-bold text-3xl w-1/2 left-[100px] bottom-5 absolute">
          {`${
            state === "weekend"
              ? "Join Our Sunday Service & Sermon From This Past Weekend"
              : "Join Our Sunday Service & Sermon From This Past Weekend"
          }`}
        </p>
      </div>
      <div className="px-[60px] text-center mt-[40px]">
        <p className="font-bold text-[50px]">
          What’s Going On <span className="text-primary">this Week</span>
        </p>
        <div className="flex justify-center mt-10">
          <p
            className={`block uppercase sm:inline-block px-4 rounded-[15px] sm:mb-0 sm:mr-3 text-lg text-center leading-none ${
              state === "weekdays" ? "" : "text-gray-400"
            } hover:cursor-pointer`}
            onClick={() => setstate("weekdays")}
          >
            Weekdays
          </p>
          <span className="text-3xl -mt-[10px]">|</span>
          <p
            className={`block uppercase sm:inline-block px-4 rounded-[15px] sm:mb-0 sm:mr-3 text-lg text-center leading-none ${
              state === "weekend" ? "" : "text-gray-400"
            } hover:cursor-pointer`}
            onClick={() => setstate("weekend")}
          >
            Weekend
          </p>
        </div>
        <div className="w-full">
          {state === "weekend" ? (
            <>
              <div className="mt-10">
                <div className="text-[30px] font-bold">
                  <span className="text-primary">SUNDAY</span> SERVICE
                </div>
              </div>
              <div className="mt-10 w-1/2 mx-auto">
                {weekend &&
                  weekend.map((item) => {
                    return (
                      <>
                        <TitleTag
                          title={item.title}
                          subtitle={item.subtitle}
                          time={item.time}
                          url={item.url}
                        />
                      </>
                    );
                  })}
              </div>
            </>
          ) : (
            <>
              <div className="mt-10 w-1/2 mx-auto">
                {weekdays &&
                  weekdays.map((item) => {
                    return (
                      <>
                        <TitleTag
                          title={item.title}
                          subtitle={item.subtitle}
                          time={item.time}
                          url={item.url}
                        />
                      </>
                    );
                  })}
              </div>
            </>
          )}
        </div>
        <div className="mt-10 w-full px-[20px] flex grid grid-cols-2 gap-8">
          {card &&
            card?.map((item, idx) => {
              return (
                <div key={idx}>
                  <CardBtn
                    title={item.title}
                    subtitle={item.subtitle}
                    titlebtn={item.titlebtn}
                    bg={item.bg}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <div className="bg-black w-full text-white px-[200px] text-center leading-loose pt-20 mt-[100px] mx-auto">
        <h2 className="font-bold text-3xl mb-2">KIDS CHURCH</h2>
        <p>
          Kami menyediakan Ibadah Online setiap Minggu jam 8.30 pagi yang
          kreatif dan penuh dengan Firman. Tidak hanya itu, kami juga rindu
          anak-anak dapat berdoa, pujian dan penyembahan bersama melalui
          aplikasi Zoom yang dilakukan setiap hari Sabtu 21 Januari 2021
        </p>
        <div className="bg-white text-black hover:bg-primary hover:text-white duration-300 rounded-[20px] hover:cursor-pointer px-10 py-2 text-center font-bold w-1/2 mt-5 mx-auto">
          JOIN US NOW
        </div>
        {/* <div className="pb-20"></div> */}
        <div className="w-1/2 mx-auto flex justify-center">
          <img src="/assets/img/online/kids2.png" className="" alt="Online" />
          <img src="/assets/img/online/kids1.png" className="" alt="Online" />
        </div>
      </div>
      <div className="bg-black w-full text-white text-center leading-loose mx-auto relative">
        <div className="flex">
          <img
            src="/assets/img/online/youthdrp.png"
            className="w-1/4"
            alt="Online"
          />
          <img
            src="/assets/img/online/youthdrp.png"
            className="w-1/4"
            alt="Online"
          />
          <img
            src="/assets/img/online/youthdrp.png"
            className="w-1/4"
            alt="Online"
          />
          <img
            src="/assets/img/online/youthdrp.png"
            className="w-1/4"
            alt="Online"
          />
        </div>
        <div className="absolute bottom-20 px-[250px]">
          <h2 className="font-bold text-3xl mb-2">DRP 2.32 YOUTH </h2>
          <br />
          <p>
            Kami juga menyediakan Ibadah DRP2.32 (Disciples Revival Project)
            secara Onsite dan Online, Ibadah Onsite dan Online setiap Minggu jam
            12 siang yang diisi dengan anak2 muda yang haus akan Tuhan.
          </p>
          <br />
          <div className="flex">
            <div className="bg-white text-black hover:bg-primary hover:text-white duration-300 rounded-[20px] hover:cursor-pointer px-10 py-2 text-center font-bold w-1/2 mt-5 mx-auto mr-10">
              JOIN US NOW
            </div>
            <div className="outline outline-white text-white hover:outline-primary hover:bg-primary duration-300 rounded-[20px] hover:cursor-pointer px-10 py-2 text-center font-bold w-1/2 mt-5 mx-auto">
              CONTACT ME
            </div>
          </div>
          <div className="pb-20"></div>
        </div>
        {/* <div className="w-1/2 mx-auto flex">
          <img src="/assets/img/online/kids2.png" className="" alt="Online" />
          <img src="/assets/img/online/kids1.png" className="" alt="Online" />
        </div> */}
      </div>
      <div className="bg-black w-full text-white text-center leading-loose mx-auto relative">
        <div className="flex">
          <img
            src="/assets/img/online/bgdrp.png"
            className="w-full"
            alt="Online"
          />
        </div>
        <div className="absolute bottom-20 px-[250px]">
          <h2 className="font-bold text-3xl mb-2">
            DRP 2.32 OUTSTANDING TEENS
          </h2>
          <br />
          <p>
            DOT (DRP Outstanding Teens) adalah Ibadah anak-anak remaja usia
            12-16 Tahun yang penuh dengan sukacita dan Ibadah DOT saat ini
            melalui aplikasi Zoom yang dilakukan setiap hari Kamis di Minggu
            ketiga pukul 16.00 sore.
          </p>
          <br />
          <div className="flex">
            <div className="bg-white text-black hover:bg-primary hover:text-white duration-300 rounded-[20px] hover:cursor-pointer px-10 py-2 text-center font-bold w-1/2 mt-5 mx-auto mr-10">
              JOIN US NOW
            </div>
            <div className="outline outline-white text-white hover:outline-primary hover:bg-primary duration-300 rounded-[20px] hover:cursor-pointer px-10 py-2 text-center font-bold w-1/2 mt-5 mx-auto">
              CONTACT ME
            </div>
          </div>
          <div className="pb-20"></div>
        </div>
        {/* <div className="w-1/2 mx-auto flex">
          <img src="/assets/img/online/kids2.png" className="" alt="Online" />
          <img src="/assets/img/online/kids1.png" className="" alt="Online" />
        </div> */}
      </div>
      <div className="bg-black w-full text-white text-center leading-loose mx-auto relative">
        <div className="flex">
          <img
            src="/assets/img/online/bgdays.png"
            className="w-full opacity-40"
            alt="Online"
          />
        </div>
        <div className="absolute bottom-40 px-[250px]">
          <h2 className="font-bold text-3xl mb-2">THE SIGNIFICANT WOMEN</h2>
          <p>
            The Significant Women adalah Ibadah untuk para wanita yang ingin
            bertumbuh di dalam Kristus,. Ibadah ini diadakan Setiap Minggu ke 4
            jam 6 sore melalui platform Youtube ERC SAWANGAN.
          </p>
          <div className="bg-white text-black hover:bg-primary hover:text-white duration-300 rounded-[20px] hover:cursor-pointer px-10 py-2 text-center font-bold w-1/2 mt-5 mx-auto">
            JOIN US NOW
          </div>
          <div className="pb-20"></div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Online;
