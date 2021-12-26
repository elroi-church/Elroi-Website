import { NextPage } from "next";
import React from "react";
import TermConditions, { TermType } from "../termConditions";

const Schedule: NextPage<PropsSchedule> = (props: PropsSchedule) => {
  const {
    titleSchedule,
    imgUrl,
    payload = [],
    bgColor = "bg-white",
    termconditions = [],
    imgUrlTerm,
  } = props;
  return (
    <div className={`${bgColor}`}>
      <h1 className="font-bold text-[50px] text-center px-[80px] py-[120px]">
        {titleSchedule}
      </h1>
      <div className="flex">
        <div className="lg:w-1/2 w-full">
          <div className="h-fit w-full overflow-hidden mb-3 rounded-r-[30px] shadow-lg">
            <img src={`${imgUrl}`} className="w-full" alt="" />
          </div>
        </div>
        <div className="w-1/2 my-auto ml-[8%]">
          {payload.length > 0 &&
            payload?.map((data, index) => {
              return (
                <div className="mt-8" key={index}>
                  <h1 className="font-bold text-4xl mb-4">{data.title}</h1>
                  <p>{data.subtitle}</p>
                </div>
              );
            })}
        </div>
      </div>
      <div className="py-[50px]"></div>
      <div className="my-[40px]">
        <TermConditions term={termconditions} imgUrl={`${imgUrlTerm}`} />
      </div>
      <div className="pb-8"></div>
    </div>
  );
};

export default Schedule;

interface PropsSchedule {
  titleSchedule?: string;
  imgUrl?: string;
  bgColor?: string;
  payload?: Array<PayloadType>;
  termconditions?: Array<TermType>;
  imgUrlTerm?: string;
}

interface PayloadType {
  title?: string;
  subtitle?: string;
}
