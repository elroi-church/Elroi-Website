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
    registerUrl,
  } = props;
  return (
    <div className={`${bgColor}`}>
      <h1 className="font-bold text-[50px] text-center px-[80px] py-[120px]">
        {titleSchedule}
      </h1>
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-1/2 mx-10 lg:mx-0">
          <div className="h-fit w-full overflow-hidden lg:mb-3 rounded-xl lg:rounded-[0px] lg:rounded-r-[30px] shadow-lg">
            <img src={`${imgUrl}`} className="w-full h-96 object-fill" alt="" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 my-auto lg:ml-[8%] flex lg:block justify-around lg:justify-start">
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
        <TermConditions
          term={termconditions}
          imgUrl={`${imgUrlTerm}`}
          registerUrl={registerUrl}
        />
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
  registerUrl?: string;
}

interface PayloadType {
  title?: string;
  subtitle?: string;
}
