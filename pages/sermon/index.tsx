import { FunctionComponent } from "react";
import MainLayout from "../../core/components/commons/layouts/MainLayout";

const Sermon: FunctionComponent = () => {
  return (
    <>
      <MainLayout>
        <div className="flex justify-between my-20 px-[200px] items-center">
          <h2 className="text-[30px] font-bold">Sermons</h2>
          <input
            className="shadow appearance-none border rounded-[20px] py-3 px-3 text-gray-700 w-1/4 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search Sermons"
          />
        </div>
        <div className="relativ">
          <img
            src="/assets/img/online/bgkend.png"
            className="rounded-lg object-fit mx-auto"
            alt="Online"
          />
          <div className="absolute bottom-20 left-[15%] text-white">
            <h2 className="font-bold text-3xl">APA YANG ADA PADAMU</h2>
            <p>CAROLLY YOSUA</p>
          </div>
        </div>
        <div className="my-20 px-[200px] items-center">
          <h2 className="text-[30px] mb-2 font-bold">Recent Sermons</h2>

          <div className="scrolling-wrapper-flexbox">
            <div className="w-[25vw] h-[17vw] card overflow-hidden mb-3 mx-3 rounded-[30px] shadow-lg relative">
              <img
                src="/assets/img/online/bgkend.png"
                className="h-[100%] w-full aspect-square"
                alt="Term condition"
              />
              <div className="absolute bottom-4 flex flex-col left-5 text-white"> 
                <h2 className="font-bold">CAROLLY YOSUA EVANDRO</h2>
                <p className="font-light">APA YANG ADA PADAMU</p>
              </div>
            </div>
            <div className="w-[25vw] h-[17vw] card overflow-hidden mb-3 mx-3 rounded-[30px] shadow-lg relative">
              <img
                src="/assets/img/online/bgkend.png"
                className="h-[100%] w-full aspect-square"
                alt="Term condition"
              />
              <div className="absolute bottom-4 flex flex-col left-5 text-white"> 
                <h2 className="font-bold">CAROLLY YOSUA EVANDRO</h2>
                <p className="font-light">APA YANG ADA PADAMU</p>
              </div>
            </div>
            <div className="w-[25vw] h-[17vw] card overflow-hidden mb-3 mx-3 rounded-[30px] shadow-lg relative">
              <img
                src="/assets/img/online/bgkend.png"
                className="h-[100%] w-full aspect-square"
                alt="Term condition"
              />
              <div className="absolute bottom-4 flex flex-col left-5 text-white"> 
                <h2 className="font-bold">CAROLLY YOSUA EVANDRO</h2>
                <p className="font-light">APA YANG ADA PADAMU</p>
              </div>
            </div>
            <div className="w-[25vw] h-[17vw] card overflow-hidden mb-3 mx-3 rounded-[30px] shadow-lg relative">
              <img
                src="/assets/img/online/bgkend.png"
                className="h-[100%] w-full aspect-square"
                alt="Term condition"
              />
              <div className="absolute bottom-4 flex flex-col left-5 text-white"> 
                <h2 className="font-bold">CAROLLY YOSUA EVANDRO</h2>
                <p className="font-light">APA YANG ADA PADAMU</p>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Sermon;
