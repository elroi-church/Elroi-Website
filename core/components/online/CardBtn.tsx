import { NextPage } from "next";
import React from "react";

const CardBtn: NextPage<CardBtnType> = (props) => {
  const { title, subtitle, bg, url, titlebtn, cb } = props;
  return (
    // <div
    //   className="relative bg-gray-100 p-10 rounded-xl text-left mt-20 h-[45vh]"
    //   style={{
    //     backgroundImage: `url("${bg}")`,
    //     opacity: 0.7,
    //     objectFit: "contain",
    //   }}
    // >
    <div className="relative bg-gray-100 p-10 rounded-xl text-left mt-20 h-[45vh]">
      {bg && (
        <img
          src={bg}
          className="rounded-lg h-full absolute left-0 top-0 opacity-40"
          alt="Online"
        />
      )}
      <div className="absolute bottom-0 left-0 px-10 pb-8">
        <h2 className="font-bold text-2xl mt-2">{title}</h2>
        <p className="mt-2">{subtitle}</p>

        <div className="bg-primary rounded-lg hover:cursor-pointer px-10 py-2 text-center font-bold w-1/2 mt-2">
          {titlebtn}
        </div>
      </div>
    </div>
  );
};

export default CardBtn;

interface CardBtnType {
  bg?: string;
  title: string;
  subtitle: string;
  url?: string;
  titlebtn?: string;
  cb?: Function;
}
