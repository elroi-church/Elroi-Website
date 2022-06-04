import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const TermConditions: NextPage<Term> = (props: Term) => {
  const { term = [], imgUrl, registerUrl } = props;

  return (
    <div>
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-1/2 mx-10 lg:mx-0 lg:ml-10">
          <h1 className="font-bold text-4xl mb-8">Terms & Conditions</h1>
          <div className="block">
            {term.length > 0 &&
              term.map((data, idx) => {
                return (
                  <p className="mb-5" key={idx}>
                    {data.title}
                  </p>
                );
              })}

            <div className="mt-6">
              <Link href={registerUrl ? registerUrl : "#"} passHref>
                <a className="block uppercase sm:inline-block py-4 px-40 rounded-[15px] mb-4 sm:mb-0 sm:mr-3 text-lg text-white text-center font-semibold leading-none border bg-primary">
                  REGISTER NOW
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 order-first lg:order-last mx-10 lg:mx-0">
          <div className="w-full overflow-hidden mb-3 rounded-xl lg:rounded-[0px] lg:rounded-l-[30px] shadow-lg">
            <img
              src={`${imgUrl}`}
              className="w-full h-96 object-cover"
              alt="Term condition"
            />
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
  registerUrl?: string;
}

export interface TermType {
  title?: string;
}
