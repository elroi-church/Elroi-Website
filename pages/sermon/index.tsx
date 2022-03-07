import { FunctionComponent, useState } from "react";
import MainLayout from "../../core/components/commons/layouts/MainLayout";

interface RecentSermonProps {
  img: string;
  title: string;
  subtitle: string;
}

const Sermon: FunctionComponent = () => {
  const [recentSermon, setRecentSermon] = useState<RecentSermonProps[]>([
    {
      img: "/assets/img/online/bgkend.png",
      title: "CAROLLY YOSUA EVANDRO",
      subtitle: "APA YANG ADA PADAMU",
    },
    {
      img: "/assets/img/sermon/cardsermon2.png",
      title: "PS. M. RIZA SOLIHIN",
      subtitle: "TUHAN TELAH MELUPAKAN AKU",
    },
    {
      img: "/assets/img/sermon/cardsermon3.png",
      title: "PS. JESSE LANTANG",
      subtitle: "NEW WINE",
    },
    {
      img: "/assets/img/sermon/cardsermon4.png",
      title: "PS. M. RIZA SOLIHIN",
      subtitle: "MEMIUTANGI KRISTUS",
    },
    {
      img: "/assets/img/sermon/cardsermon5.png",
      title: "PS. JEFFRY RAMA",
      subtitle: "STANDING FIRM",
    },
    {
      img: "/assets/img/sermon/cardsermon6.png",
      title: "PS. TIMOTHY ABRAHAM",
      subtitle: "KESEHATAN JIWA",
    },
  ]);
  return (
    <>
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
          <h2 className="text-3xl md:text-[30px] text-center md:text-left mb-2 font-bold">Recent Sermons</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3">
            {recentSermon?.map((sermon, idx) => {
              return (
                <div key={idx}>
                  <div className="flex flex-col justify-center items-center overflow-hidden rounded-[30px] w-[90%] md:w-full shadow-lg h-2/4 mx-auto">
                    <img
                      src={sermon.img}
                      className="h-full w-full aspect-square object-fit"
                      alt="Term condition"
                    />
                  </div>
                  <div className="text-black mt-4 md:text-left text-center">
                    <h2 className="font-bold">{sermon.title}</h2>
                    <p className="font-light">{sermon.subtitle}</p>
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

export default Sermon;
