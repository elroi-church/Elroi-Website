import { GetServerSideProps } from "next";
import { FunctionComponent, useState } from "react";
import MainLayout from "../../core/components/commons/layouts/MainLayout";
import axios from "axios";
import { appConfig } from "../../config/config";
import { Sermon } from "../../core/features/sermon/entities/sermon.entity";
import Head from "next/head";

interface SermonProps {
  recentSermons: Sermon[];
}

export const getServerSideProps: GetServerSideProps<SermonProps> = async () => {
  const res = await axios.get(
    `${appConfig.apiUrl}/api/sermons?status=Finish&limit=6&publishStatus=Published`
  );

  const recentSermons = res.data?.data;

  console.log(res);

  return {
    props: {
      recentSermons: recentSermons,
    },
  };
};

const SermonPage: FunctionComponent<SermonProps> = ({ recentSermons }) => {
  const [sermon, setSermon] = useState(recentSermons);
  return (
    <>
      <Head>
        <title>Sermon - ERC | Elroi Church Sawangan</title>
      </Head>
      <MainLayout>
        <div className="flex flex-col md:flex-row justify-between my-20 lg:px-[200px] items-center">
          <h2 className="text-[30px] font-bold">Sermons</h2>
          <input
            className="shadow appearance-none border rounded-[20px] py-3 px-3 text-gray-700 w-[90%] md:w-1/4 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search Sermons"
          />
        </div>
        <div className="lg:px-[200px] relative">
          <img
            src="/assets/img/online/bgkend.png"
            className="rounded-lg object-fit w-[90%] md:w-full mx-auto"
            alt="Online"
          />
          <div className="absolute bottom-4 md:bottom-20 left-[8vw] md:left-[14vw] lg:bottom-10 underline-offset-4 lg:left-[16vw] text-white">
            <h2 className="font-bold text-sm md:text-3xl lg:text-4xl">
              APA YANG ADA PADAMU
            </h2>
            <p className="text-sm md:text-lg">CAROLLY YOSUA</p>
          </div>
        </div>
        <div className="my-20 lg:px-[200px] items-center">
          <h2 className="text-3xl md:text-[30px] text-center md:text-left mb-2 font-bold">
            Recent Sermons
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-5">
            {sermon?.map((sermon, idx) => {
              return (
                <div key={idx} className="mb-5">
                  <div className="flex flex-col justify-center items-center overflow-hidden rounded-[30px] w-[90%] md:w-full shadow-lg mx-auto">
                    <img
                      src={sermon.thumbnailURL}
                      className="h-auto w-full object-cover"
                      alt="Term condition"
                    />
                  </div>
                  <div className="text-black mt-4 md:text-left text-center">
                    <h2 className="font-bold">{sermon.title}</h2>
                    <p className="font-light">{sermon.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default SermonPage;
