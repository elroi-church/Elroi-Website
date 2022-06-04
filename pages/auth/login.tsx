import type { NextPage } from "next";
import MainLayout from "../../core/components/commons/layouts/MainLayout";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useRouter } from "next/router";
import { getCsrfToken, getProviders, signIn } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const Login: NextPage = () => {
  const router = useRouter();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const onSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signIn("credentials", {
      username: state.username,
      password: state.password,
    });
  };

  return (
    // Tailwind Login Form
    <>
      <Head>
        <title>Elroi Church Sawangan - Login</title>
      </Head>
      <MainLayout>
        <section
          className="pb-10 bg-center bg-cover flex justify-center items-center"
          style={{
            backgroundImage: `url("/assets/img/loginbg.png")`,
            height: "100%",
          }}
        >
          <div className="mt-[70px] w-full">
            <div className="w-full lg:w-1/2 px-5 mx-auto">
              <form
                className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4"
                onSubmit={onSubmitLogin}
              >
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
                    htmlFor="username"
                  >
                    Username or Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded-[20px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    onChange={(e) =>
                      setState({ ...state, username: e.target.value })
                    }
                    placeholder="Username"
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
                    onChange={(e) =>
                      setState({ ...state, password: e.target.value })
                    }
                    placeholder="******************"
                  />
                  {/* <p className="text-red-500 text-xs italic">
                    Please choose a password.
                  </p> */}
                </div>
                <div className="text-right mb-8">
                  <a
                    className="inline-block align-baseline font-semibold text-sm text-blue-500 hover:text-blue-800 text-right"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-primary hover:bg-primary-darker text-white font-bold py-2 px-4 rounded-[20px] focus:outline-none focus:shadow-outline w-2/3 mx-auto"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
                <br />
                <div className="flex items-center flex-col">
                  <p className="font-light">
                    Don’t have an Account ?
                    <Link href="/auth/register" passHref>
                      <a
                        className="font-semibold hover:cursor-pointer ml-2"
                        onClick={() =>
                          router.push("/auth/register", undefined, {
                            shallow: true,
                          })
                        }
                      >
                        Sign Up
                      </a>
                    </Link>
                  </p>
                  <br />
                  <div className="font-light w-full flex items-center justify-center">
                    <div className="border mr-2 border-black w-1/4"></div>
                    <span className="font-light hover:cursor-pointer">
                      Or login with
                    </span>
                    <div className="border ml-2 border-black w-1/4"></div>
                  </div>
                  <br />
                  <div className="flex w-1/4 justify-between">
                    <FcGoogle
                      className="text-4xl hover:cursor-pointer"
                      onClick={() => signIn("google")}
                    />
                    &nbsp;
                    <FaFacebook className="text-4xl hover:cursor-pointer" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default Login;
