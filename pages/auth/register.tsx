import type { NextPage } from "next";
import { useRouter } from "next/router";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import MainLayout from "../../components/commons/layouts/MainLayout";

const Register: NextPage = () => {
  const router = useRouter();

  return (
    // Tailwind Register
    <>
      <MainLayout>
        <section
          className="pb-10 bg-center bg-cover flex justify-center items-center"
          style={{
            backgroundImage: `url("/assets/img/loginbg.png")`,
            height: "100vh",
          }}
        >
          <div className="mt-[70px] w-full">
            <div className="w-1/2 mx-auto">
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  {/* <h2 className="font-bold text-3xl text-center">Log In</h2> */}
                  <img
                    className="h-[150px] mx-auto"
                    src="/assets/img/logo_erc.png"
                    alt=""
                    width="auto"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="firstname"
                  >
                    First Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded-[20px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="firstname"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="lastname"
                  >
                    Last Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded-[20px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="lastname"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="shadow appearance-none border rounded-[20px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="Email Address"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded-[20px] w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                  />
                  {/* <p className="text-red-500 text-xs italic">
                    Please choose a password.
                  </p> */}
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-primary hover:bg-primary-darker text-white font-bold py-2 px-4 rounded-[20px] focus:outline-none focus:shadow-outline w-2/3 mx-auto"
                    type="button"
                  >
                    Sign Up
                  </button>
                </div>
                <br />
                <div className="flex items-center flex-col">
                  <p className="font-light">
                    Already Account ?
                    <span
                      className="font-semibold hover:cursor-pointer ml-2"
                      onClick={() =>
                        router.push("/auth/login", undefined, { shallow: true })
                      }
                    >
                      Sign In
                    </span>
                  </p>
                  <br />
                </div>
              </form>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default Register;
