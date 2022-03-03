import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import AuthLayout from "../../../core/components/commons/layouts/AuthLayout";

const OnlineAuth: FunctionComponent = () => {
  const router = useRouter();
  return (
    <AuthLayout>
      <div className="flex justify-between items-center">
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold text-left ml-2 mb-4">
            Community Of Love
          </h2>
          <div
            className="hover:cursor-pointer w-[25vw] h-[15vw] mb-3 mx-3 rounded-[30px] relative"
            onClick={() =>
              router.push("online/cool_form", undefined, {
                shallow: true,
              })
            }
          >
            <img
              src="/assets/img/card_online_dash.png"
              className="h-[100%] w-full"
              alt="Term condition"
            />
            <div className="text-3xl font-bold absolute top-[13vh] left-[5vw] text-white">
              Join e-Cool
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold text-left ml-2 mb-4">
            Volunteer
          </h2>
          <div
            className="hover:cursor-pointer w-[25vw] h-[15vw] mb-3 mx-3 rounded-[30px] relative"
            onClick={() =>
              router.push("online/volunteer_form", undefined, {
                shallow: true,
              })
            }
          >
            <img
              src="/assets/img/card_online_volunteer_dash.png"
              className="h-[100%] w-full"
              alt="Term condition"
            />
            <div className="text-3xl font-bold absolute top-[13vh] left-[5vw] text-white">
              Let’s Join With Us
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default OnlineAuth;
