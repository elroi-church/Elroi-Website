import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import AuthLayout from "../../core/components/commons/layouts/AuthLayout";

const Sunshine: FunctionComponent = () => {
  const router = useRouter();
  return (
    <AuthLayout>
      <div className="flex justify-between items-center">
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold text-left ml-2 mb-4">
            FORM LET’S WRITE
          </h2>
          <div
            className="hover:cursor-pointer w-[25vw] h-[15vw] mb-3 mx-3 rounded-[30px] relative"
            onClick={() =>
              router.push("sunshine/article_form", undefined, {
                shallow: true,
              })
            }
          >
            <img
              src="/assets/img/make_article.png"
              className="h-[100%] w-full"
              alt="Term condition"
            />
            <div className="text-3xl font-bold absolute top-[13vh] left-[5vw] text-white">
              Make Your Articles
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold text-left ml-2 mb-4">
            My Sunshine
          </h2>
          <div
            className="hover:cursor-pointer w-[25vw] h-[15vw] mb-3 mx-3 rounded-[30px] relative"
            onClick={() =>
              router.push("sunshine/sunshine_form", undefined, {
                shallow: true,
              })
            }
          >
            <img
              src="/assets/img/card_sunshine.png"
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

export default Sunshine;
