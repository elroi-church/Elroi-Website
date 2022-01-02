import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../../core/components/commons/layouts/MainLayout";

const Detail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <MainLayout>
      <div className="w-1/2 mx-auto">
        <h2 className="font-bold text-[50px] my-10 tracking-wide ">
          What is the Difference Between a UI/UX Designer and a Product
          Designer?
        </h2>
        <div className="flex">
          <img
            src="/assets/img/about/aboutp.png"
            className="w-[10%] rounded-lg"
            alt="Term condition"
          />
          <div className="flex flex-col ml-3 my-auto">
            <h2 className="font-bold">Ash M</h2>
            <p>1 January 2022</p>
          </div>
        </div>
        <br />
        <br />
        <hr className="border-4 rounded-lg border-black" />
        <br />
        <br />
        <p className="leading-loose text-xl">
          When we hear terms like UI/UX Design or Product Design, the only thing
          we’re sure about is designing what a user/customer sees and interacts
          with whatever you’re offering. However, these two are really broad
          terms from business perspective.
        </p>
        <br />
        <br />
        <div>
          <img
            src="/assets/img/colour/bgdetail.png"
            className="rounded-lg"
            alt="Term condition"
          />
          <p className="text-center mt-5">My Portofolio Website Design </p>
        </div>
        <br />
        <br />
        <h2 className="font-bold text-3xl">User Interface Design</h2>
        <br />
        <p className="leading-loose">
          UI — User Interface Design is specifically about designing the screens
          of your mobile app, website, dashboard, whatsoever. This includes
          higher end graphics and graphically fascinating creatives. In short,
          UI is all what we see on a particular screen including all those
          images, icons, fonts, animations, effects, etc. You can make a UI
          better by choosing better illustrations, pixel perfect images,
          appealing fonts and beautiful color palettes.
        </p>
      </div>
    </MainLayout>
  );
};

export default Detail;
