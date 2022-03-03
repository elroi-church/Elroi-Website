import type { NextPage } from "next";
import MainLayout from "../core/components/commons/layouts/MainLayout";
import { BsGift } from "react-icons/bs";
import {
  AiOutlineCalendar,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <MainLayout>
        <section
          className="pb-10 bg-center bg-cover"
          style={{
            backgroundImage: 'url("/assets/img/banner_home.png")',
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
                <h2 className="text-5xl lg:text-[74px] text-white font-bold font-heading mb-1">
                  El-Roi Chruch
                </h2>
                <p className="text-white text-4xl lg:text-5xl leading-relaxed tracking-wider">
                  Sawangan
                </p>
              </div>
              <div>
                <a
                  className="block uppercase sm:inline-block py-4 px-20 rounded-[35px] mb-4 sm:mb-0 sm:mr-3 text-md lg:text-lg text-white text-center font-semibold leading-none border"
                  href="#"
                >
                  Watch Our Service Now
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="flex-col m-auto mt-4 lg:flex-row flex px-4 w-full lg:px-0 my-8 md:w-3/4 lg:w-full lg:justify-between">
          <div className="relative lg:w-1/3 w-full">
            <div className="h-48 w-full overflow-hidden mb-3 rounded-[30px] lg:rounded-[0px] lg:rounded-r-[30px] shadow-lg">
              <img
                src="/assets/img/card_home.png"
                className="w-full h-full"
                alt=""
              />
              <div className="h-full w-full absolute opacity-70"></div>
              <div className="pl-5 mb-8 w-full absolute bottom-0">
                <h1 className="text-white font-extrabold text-2xl">
                  KASIH ALLAH
                </h1>
                <p className="text-white font-extralight">
                  Apa yang terlintas di otakmu jika mendengar kata Kasih?
                </p>
              </div>
            </div>
          </div>
          <div className="relative lg:w-1/3 w-full lg:mx-4">
            <div className="h-48 w-full overflow-hidden mb-3 rounded-[30px] shadow-lg">
              <img
                src="/assets/img/card_home.png"
                className="w-full h-full"
                alt=""
              />
              <div className="h-full w-full absolute opacity-70"></div>
              <div className="pl-5 mb-8 w-full absolute bottom-0">
                <h1 className="text-white font-extrabold text-2xl">
                  IMAN YANG TEGUH
                </h1>
                <p className="text-white font-extralight">
                  Apa yang terlintas di otakmu jika mendengar kata Kasih?
                </p>
              </div>
            </div>
          </div>
          <div className="relative lg:w-1/3 w-full">
            <div className="h-48 w-full overflow-hidden mb-3 rounded-[30px] lg:rounded-[0px] lg:rounded-l-[30px] shadow-lg">
              <img
                src="/assets/img/card_home.png"
                className="w-full h-full"
                alt=""
              />
              <div className="h-full w-full absolute opacity-70"></div>
              <div className="pl-5 mb-8 w-full absolute bottom-0">
                <h1 className="text-white font-extrabold text-2xl">
                  KASIH MULA MULA
                </h1>
                <p className="text-white font-extralight">
                  Apa yang terlintas di otakmu jika mendengar kata Kasih?
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4">
          <div className="lg:flex">
            <div className="w-full lg:w-3/5 lg:mx-4 h-full">
              <h2 className="text-3xl font-bold mb-4 ml-8">
                Be Part Of ERC Family
              </h2>
              <div className="relative h-full w-full overflow-hidden mb-3 rounded-[30px] shadow-lg">
                <img
                  src="/assets/img/sub_home.png"
                  className="w-full h-full"
                  alt=""
                />
                <div className="h-full w-full absolute opacity-70"></div>
                <div className="pl-5 w-full absolute bottom-8 lg:bottom-12">
                  <div className="flex justify-between mx-2">
                    <div>
                      <h1 className="text-white font-extrabold sm:text-2xl lg:text-4xl">
                        ERC Family
                      </h1>
                      <p className="text-white font-extralight sm:text-sm lg:text-md">
                        Let’s Join With Us
                      </p>
                    </div>

                    <a
                      className="uppercase py-2 lg:px-9 px-4 rounded-lg sm:mb-0 sm:mr-3 text-[10px] lg:text-sm text-white text-center font-semibold border my-auto"
                      href="#"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
              <br />
              <h2 className="text-3xl font-bold mb-4 ml-8">Sermon</h2>
              <div className="lg:flex">
                <div
                  className="relative lg:w-1/3 w-full lg:mx-4 hover:cursor-pointer"
                  onClick={() =>
                    window.open("https://www.youtube.com/watch?v=TaAWK66v6rk")
                  }
                >
                  <div className="h-50 w-full overflow-hidden mb-3 rounded-[30px] shadow-lg">
                    <img
                      src="/assets/img/sermon1.png"
                      className="w-full"
                      alt=""
                    />
                    <div className="h-full w-full absolute opacity-70"></div>
                    <div className="left-4 mb-8 w-full absolute bottom-0">
                      <h1 className="text-white font-extrabold text-sm">
                        Joshua Antonius
                      </h1>
                    </div>
                  </div>
                </div>
                <div
                  className="relative lg:w-1/3 w-full lg:mx-4 hover:cursor-pointer"
                  onClick={() =>
                    window.open("https://www.youtube.com/watch?v=TaAWK66v6rk")
                  }
                >
                  <div className="h-50 w-full overflow-hidden mb-3 rounded-[30px] shadow-lg">
                    <img
                      src="/assets/img/sermon2.png"
                      className="w-full"
                      alt=""
                    />
                    <div className="h-full w-full absolute opacity-70"></div>
                    <div className="left-4 mb-8 w-full absolute bottom-0">
                      <h1 className="text-white font-extrabold text-sm">
                        Hizqia Chandra
                      </h1>
                    </div>
                  </div>
                </div>
                <div
                  className="relative lg:w-1/3 w-full lg:mx-4 hover:cursor-pointer"
                  onClick={() =>
                    window.open("https://www.youtube.com/watch?v=TaAWK66v6rk")
                  }
                >
                  <div className="h-50 w-full overflow-hidden mb-3 rounded-[30px] shadow-lg">
                    <img
                      src="/assets/img/sermon3.png"
                      className="w-full"
                      alt=""
                    />
                    <div className="h-full w-full absolute opacity-70"></div>
                    <div className="left-4 mb-8 w-full absolute bottom-0">
                      <h1 className="text-white font-extrabold text-sm">
                        Kezia Immanuela
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full lg:w-1/3 lg:mx-4">
              {/* section 1 */}
              <div className="mb-4 ml-8">
                <h2 className="text-3xl font-bold">Get Involved</h2>
                <h2 className="font-light">See what God can do through you.</h2>
              </div>
              <div
                className="w-full overflow-hidden mb-3 rounded-[30px] shadow-lg bg-[#F4F0F0] hover:bg-[#f0f0f0] hover:cursor-pointer py-3 px-8 sm:mr-3 text-sm text-center font-semibold my-auto flex items-center transition duration-400"
                onClick={() =>
                  router.push("/giving", undefined, { shallow: true })
                }
              >
                <BsGift className="text-3xl mr-5" />
                <p className="text-xl">Giving</p>
              </div>
              <div
                className="w-full overflow-hidden mb-3 rounded-[30px] shadow-lg bg-[#F4F0F0] hover:bg-[#f0f0f0] hover:cursor-pointer py-3 px-8 sm:mr-3 text-sm text-center font-semibold my-auto flex items-center transition duration-400"
                onClick={() => {}}
              >
                <HiOutlineUsers className="text-3xl mr-5" />
                <p className="text-xl">Volunteer</p>
              </div>
              <div
                className="w-full overflow-hidden mb-3 rounded-[30px] shadow-lg bg-[#F4F0F0] hover:bg-[#f0f0f0] hover:cursor-pointer py-3 px-8 sm:mr-3 text-sm text-center font-semibold my-auto flex items-center transition duration-400"
                onClick={() => {}}
              >
                <AiOutlineCalendar className="text-3xl mr-5" />
                <p className="text-xl">Cool</p>
              </div>
              {/* section 2 */}
              <br />
              <div className="mb-4 ml-8">
                <h2 className="text-3xl font-bold">For Your Family</h2>
                <h2 className="font-light">Be a Part Of Us</h2>
              </div>
              <div
                className="w-full overflow-hidden mb-3 rounded-[30px] shadow-lg bg-[#F4F0F0] hover:bg-[#f0f0f0] hover:cursor-pointer py-3 px-8 sm:mr-3 text-sm text-center font-semibold my-auto flex items-center transition duration-400"
                onClick={() => {
                  window.open("https://www.instagram.com/elroi_kidschurch");
                }}
              >
                <img
                  src="/assets/img/Logo_KC.png"
                  className="w-[60px] -ml-6"
                  alt=""
                />
                <p className="text-xl">Kids Church</p>
              </div>
              <div
                className="w-full overflow-hidden mb-3 rounded-[30px] shadow-lg bg-[#F4F0F0] hover:bg-[#f0f0f0] hover:cursor-pointer py-3 px-8 sm:mr-3 text-sm text-center font-semibold my-auto flex items-center transition duration-400"
                onClick={() => {
                  window.open("https://www.instagram.com/drp_2.32");
                }}
              >
                <img
                  src="/assets/img/logo_drp.png"
                  className="w-[40px] mr-3 -ml-4"
                  alt=""
                />
                <p className="text-xl">DRP 2.32 (Youth)</p>
              </div>
              <div
                className="w-full overflow-hidden mb-3 rounded-[30px] shadow-lg bg-[#F4F0F0] hover:bg-[#f0f0f0] hover:cursor-pointer py-3 px-8 sm:mr-3 text-sm text-center font-semibold my-auto flex items-center transition duration-400"
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/drp_outstanding_teens"
                  );
                }}
              >
                <img
                  src="/assets/img/logo_drp2.png"
                  className="w-[40px] mr-3 -ml-4"
                  alt=""
                />
                <p className="text-xl">DRP 2.32 Outstanding Teens</p>
              </div>
              <div
                className="w-full overflow-hidden mb-3 rounded-[30px] shadow-lg bg-[#F4F0F0] hover:bg-[#f0f0f0] hover:cursor-pointer py-3 px-8 sm:mr-3 text-sm text-center font-semibold my-auto flex items-center transition duration-400"
                onClick={() => {
                  window.open("https://www.instagram.com/thesignificantwomen_");
                }}
              >
                <img
                  src="/assets/img/LOGO_TSW.png"
                  className="w-[40px] mr-3 -ml-4"
                  alt=""
                />
                <p className="text-xl">The Signification Woman</p>
              </div>
              {/* section 3 */}
              <br />
              <div className="mb-4 ml-8">
                <h2 className="text-3xl font-bold">Stay Connected</h2>
              </div>
              <div
                className="w-full overflow-hidden mb-3 rounded-[30px] shadow-lg bg-[#F4F0F0] hover:bg-[#f0f0f0] hover:cursor-pointer py-3 px-8 sm:mr-3 text-sm text-center font-semibold my-auto flex items-center transition duration-400"
                onClick={() => {
                  window.open(
                    "https://www.youtube.com/channel/UCKJVc_tWtCVJLtV0gz0A1fg"
                  );
                }}
              >
                <AiFillYoutube className="text-3xl mr-8" />
                <p className="text-xl">Youtube</p>
              </div>
              <div
                className="w-full overflow-hidden mb-3 rounded-[30px] shadow-lg bg-[#F4F0F0] hover:bg-[#f0f0f0] hover:cursor-pointer py-3 px-8 sm:mr-3 text-sm text-center font-semibold my-auto flex items-center transition duration-400"
                onClick={() => {
                  window.open("https://www.instagram.com/ercsawangan");
                }}
              >
                <AiOutlineInstagram className="text-3xl mr-8" />
                <p className="text-xl">Instagram</p>
              </div>
              <div
                className="w-full overflow-hidden mb-3 rounded-[30px] shadow-lg bg-[#F4F0F0] hover:bg-[#f0f0f0] hover:cursor-pointer py-3 px-8 sm:mr-3 text-sm text-center font-semibold my-auto flex items-center transition duration-400"
                onClick={() => {
                  window.open(
                    "https://www.facebook.com/search/top?q=erc%20sawangan"
                  );
                }}
              >
                <FaFacebook className="text-3xl mr-8" />
                <p className="text-xl">Facebook</p>
              </div>
              <div
                className="w-full overflow-hidden mb-3 rounded-[30px] shadow-lg bg-[#F4F0F0] hover:bg-[#f0f0f0] hover:cursor-pointer py-3 px-8 sm:mr-3 text-sm text-center font-semibold my-auto flex items-center transition duration-400"
                onClick={() => {
                  window.open("https://www.tiktok.com/@drp_2.32");
                }}
              >
                <FaTiktok className="text-3xl mr-8" />
                <p className="text-xl">Tiktok</p>
              </div>
              <div
                className="w-full overflow-hidden mb-3 relative rounded-[30px] shadow-lg bg-[#F4F0F0] hover:bg-[#f0f0f0] hover:cursor-pointer py-3 px-8 sm:mr-3 text-sm text-center font-semibold my-auto flex items-center transition duration-400"
                onClick={() => {}}
              >
                <img
                  src="/assets/img/rcti.png"
                  className="w-[54px] -ml-[0.8rem] mr-6"
                  alt=""
                />
                <p className="text-xl">RCTI +</p>
              </div>
            </div>
          </div>
        </section>
        <br />
      </MainLayout>
    </>
  );
};

export default Home;
