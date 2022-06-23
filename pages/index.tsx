import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  AiFillYoutube,
  AiOutlineCalendar,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsGift } from "react-icons/bs";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import MainLayout from "../core/components/commons/layouts/MainLayout";
import GivingSection from "../core/components/giving/GivingSection";
import HomeBannerSection from "../core/components/home/HomeBannerSection";
import KidsSection from "../core/components/kids/KidsSection";
import CounselingSection from "../core/components/prayer/CounselingSection";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Home - ERC | Elroi Church Sawangan</title>
      </Head>
      <MainLayout>
        {/* Home Elroi */}
        <HomeBannerSection />
        {/* Your Welcome Here - Welcome */}
        <section className="container mx-auto my-20">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 px-3 lg:px-0">
              <h1 className="text-4xl font-bold">You`re Welcome Here!</h1>
              <p className="prose mt-5">
                Life.Church is one church meeting in multiple locations, and we
                want to help you become the person God made you to be. No matter
                where you are in your journey, you`re invited to discover your
                purpose and live it out at Life.Church.
              </p>
            </div>
            <div className="w-full lg:w-3/5 mt-5 lg:mt-0 lg:px-0 h-full">
              <div className="relative h-full w-full overflow-hidden rounded-none lg:rounded-2xl  mb-3 shadow-lg">
                <img
                  src="/assets/img/sub_home.png"
                  className="w-full object-cover"
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
                        Let`s Join With Us
                      </p>
                    </div>

                    <Link href="/auth/register" passHref>
                      <a className="uppercase py-2 lg:px-9 px-4 rounded-lg sm:mb-0 sm:mr-3 text-[10px] lg:text-sm text-white text-center font-semibold border my-auto">
                        Register Now
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Counseling */}
        <CounselingSection />

        <GivingSection />
      </MainLayout>
    </>
  );
};

export default Home;
