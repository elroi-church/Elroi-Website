import { NextPage } from "next";
import React from "react";

const TermConditions: NextPage<Term> = (props: Term) => {
  const { term = [], imgUrl } = props;

  return (
    <div>
      <div className="flex">
        <div className="w-1/2 ml-10">
          <h1 className="font-bold text-4xl mb-8">Terms & Conditions</h1>
          <div className="block">
            {term.length > 0 &&
              term.map((data) => {
                return <p>{data.title}</p>;
              })}

            <div className="mt-6">
              <a
                className="block uppercase sm:inline-block py-4 px-40 rounded-[15px] mb-4 sm:mb-0 sm:mr-3 text-lg text-white text-center font-semibold leading-none border bg-primary"
                href="#"
              >
                REGISTER NOW
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="h-fit w-full overflow-hidden mb-3 rounded-l-[30px] shadow-lg">
            <img src={`${imgUrl}`} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermConditions;

interface Term {
  imgUrl?: string;
  term: Array<TermType>;
}

export interface TermType {
  title?: string;
}
