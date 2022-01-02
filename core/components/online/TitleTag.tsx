import { NextPage } from "next";
import React from "react";

const TitleTag: NextPage<TitleTagType> = (props) => {
  const { title, subtitle, time, url } = props;
  return (
    <div className="text-left">
      <h2 className="font-bold mb-2 text-xl">{title}</h2>
      <p className="mb-2">{time}</p>
      <div className="flex">
        <div className="w-2/3 bg-primary rounded-xl py-2 px-5">{subtitle}</div>
        <div className="ml-4 py-1 px-6 font-bold self-center outline rounded-lg outline-primary">WATCH NOW</div>
      </div>
      <br />
    </div>
  );
};

export default TitleTag;

interface TitleTagType {
  title: string;
  subtitle: string;
  time: string;
  url?: string;
}
