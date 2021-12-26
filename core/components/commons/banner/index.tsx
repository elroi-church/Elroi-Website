import { NextPage } from "next";
import React from "react";

const Banner: NextPage<PropsBanner> = (props: PropsBanner) => {
  const { title, imgUrl } = props;
  return (
    <>
      <section
        className="pb-10 bg-center bg-cover"
        style={{
          backgroundImage: `url("${imgUrl}")`,
          height: '60vh'
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
                {title}
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;

interface PropsBanner {
  title: string;
  imgUrl: string;
}
