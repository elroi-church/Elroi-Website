import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import MainLayout from "../../core/components/commons/layouts/MainLayout";
import DrpGrowWithUs from "../../core/components/drp/DrpGrowWithUs";
import kidsCss from "../../styles/kids.module.css";

const Kids: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kids Church - ERC | Elroi Church Sawangan</title>
      </Head>
      <MainLayout>
        {/* Kids Speakers */}

        <section className="bg-black min-h-screen py-10">
          <DrpGrowWithUs />

          <section
            className="py-24 text-white"
            style={{
              backgroundImage: `url('flex-ui-assets/elements/pattern-white.svg')`,
              backgroundPosition: "center",
            }}
          ></section>

          <section className="py-20 flex justify-center">
            <h2 className="text-6xl font-extrabold italic text-center text-white drop-shadow-xl">
              KIDS CHURCH ACTIVITIES
            </h2>
          </section>
          <section className="py-24 md:py-32  overflow-hidden">
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap lg:items-center -mx-4">
                <div className="w-full md:w-2/5 px-4 mb-16 md:mb-0">
                  <div className="relative mx-auto md:ml-0 max-w-max ">
                    <img
                      src="/assets/kids/parenting_education.jpeg"
                      className="rounded-xl drop-shadow-xl shadow-xl"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full md:w-3/5 px-4">
                  <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-yellow-500 bg-yellow-100 font-medium uppercase rounded-full shadow-sm">
                    Features
                  </span>
                  <h1 className="mb-8 text-4xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter text-white">
                    Parenting Education
                  </h1>
                  <p className="mb-6 text-lg md:text-xl text-coolGray-500 font-medium text-white">
                    With our integrated CRM, project management, collaboration
                    and invoicing capabilities, you can manage every aspect of
                    your business in one secure platform.
                  </p>
                  <a
                    className="inline-block py-4 px-5 w-full md:w-auto text-base leading-4 text-yellow-50 bg-yellow-500 hover:bg-yellow-600 font-medium text-center focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 rounded-md shadow-sm"
                    href="#"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section>
          <section className="py-20 flex justify-center">
            <h2 className="text-6xl font-extrabold italic text-center text-black drop-shadow-xl uppercase">
              Kids Event
            </h2>
          </section>

          {/* <section className="py-20 flex justify-center">
          <h2 className="text-6xl font-extrabold italic text-center text-black drop-shadow-xl uppercase">
            Kids Blog
          </h2>
        </section> */}

          <section className="relative py-24 bg-white">
            <div className="absolute top-0 left-0 w-full h-full"></div>
            <div className="container relative z-10 px-4 mx-auto">
              <div className="md:max-w-5xl mx-auto mb-8 md:mb-16 text-center">
                <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-yellow-500 bg-yellow-100 font-medium uppercase rounded-full shadow-sm">
                  Blog
                </span>
                <h3 className="mb-4 text-3xl md:text-6xl font-extrabold italic text-center text-black drop-shadow-xl uppercase">
                  Kids Blog
                </h3>
                <p className="mb-10 text-lg md:text-xl text-coolGray-500 font-medium">
                  With our integrated CRM, project management, collaboration and
                  invoicing capabilities, you can manage your business in one
                  secure platform.
                </p>
                <div className="relative mx-auto md:w-80">
                  <img
                    className="absolute top-1/2 left-4 transform -translate-y-1/2"
                    src="flex-ui-assets/elements/blog/search.svg"
                    alt=""
                  />
                  <input
                    className="w-full py-3 pl-12 pr-4 text-coolGray-900 leading-tight placeholder-coolGray-500 border border-coolGray-200 rounded-lg shadow-xsm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                    type="text"
                    placeholder="Search"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-4 mb-12 md:mb-20">
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <a className="block mb-6 overflow-hidden rounded-md" href="#">
                    <img
                      className="w-full"
                      src="flex-ui-assets/images/blog/effect.jpg"
                      alt=""
                    />
                  </a>
                  <div className="mb-4">
                    <a
                      className="inline-block py-1 px-3 text-xs leading-5 text-yellow-500 hover:text-yellow-600 font-medium uppercase bg-yellow-100 hover:bg-yellow-200 rounded-full shadow-sm"
                      href="#"
                    >
                      Technology
                    </a>
                  </div>
                  <p className="mb-2 text-coolGray-500 font-medium">
                    John Doe • 19 Jan 2022
                  </p>
                  <a
                    className="inline-block mb-4 text-2xl md:text-3xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline"
                    href="#"
                  >
                    A small business is only as good as its tools and it is
                    totally true.
                  </a>
                  <a
                    className="inline-flex items-center text-base md:text-lg text-yellow-500 hover:text-yellow-600 font-semibold"
                    href="#"
                  >
                    <span className="mr-3">Read Post</span>
                    <svg
                      width="8"
                      height="10"
                      viewBox="0 0 8 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <a className="block mb-6 overflow-hidden rounded-md" href="#">
                    <img
                      className="w-full"
                      src="flex-ui-assets/images/blog/work.jpg"
                      alt=""
                    />
                  </a>
                  <div className="mb-4">
                    <a
                      className="inline-block py-1 px-3 text-xs leading-5 text-yellow-500 hover:text-yellow-600 font-medium uppercase bg-yellow-100 hover:bg-yellow-200 rounded-full shadow-sm"
                      href="#"
                    >
                      Development
                    </a>
                  </div>
                  <p className="mb-2 text-coolGray-500 font-medium">
                    John Doe • 19 Jan 2022
                  </p>
                  <a
                    className="inline-block mb-4 text-2xl md:text-3xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline"
                    href="#"
                  >
                    A small business is only as good as its tools and it is
                    totally true.
                  </a>
                  <a
                    className="inline-flex items-center text-base md:text-lg text-yellow-500 hover:text-yellow-600 font-semibold"
                    href="#"
                  >
                    <span className="mr-3">Read Post</span>
                    <svg
                      width="8"
                      height="10"
                      viewBox="0 0 8 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <a className="block mb-6 overflow-hidden rounded-md" href="#">
                    <img
                      className="w-full"
                      src="flex-ui-assets/images/blog/work2.jpg"
                      alt=""
                    />
                  </a>
                  <div className="mb-4">
                    <a
                      className="inline-block py-1 px-3 text-xs leading-5 text-yellow-500 hover:text-yellow-600 font-medium uppercase bg-yellow-100 hover:bg-yellow-200 rounded-full shadow-sm"
                      href="#"
                    >
                      Marketing
                    </a>
                  </div>
                  <p className="mb-2 text-coolGray-500 font-medium">
                    John Doe • 19 Jan 2022
                  </p>
                  <a
                    className="inline-block mb-4 text-2xl md:text-3xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline"
                    href="#"
                  >
                    A small business is only as good as its tools and it is
                    totally true.
                  </a>
                  <a
                    className="inline-flex items-center text-base md:text-lg text-yellow-500 hover:text-yellow-600 font-semibold"
                    href="#"
                  >
                    <span className="mr-3">Read Post</span>
                    <svg
                      width="8"
                      height="10"
                      viewBox="0 0 8 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <a className="block mb-6 overflow-hidden rounded-md" href="#">
                    <img
                      className="w-full"
                      src="flex-ui-assets/images/blog/effect2.jpg"
                      alt=""
                    />
                  </a>
                  <div className="mb-4">
                    <a
                      className="inline-block py-1 px-3 text-xs leading-5 text-yellow-500 hover:text-yellow-600 font-medium uppercase bg-yellow-100 hover:bg-yellow-200 rounded-full shadow-sm"
                      href="#"
                    >
                      Start-up
                    </a>
                  </div>
                  <p className="mb-2 text-coolGray-500 font-medium">
                    John Doe • 19 Jan 2022
                  </p>
                  <a
                    className="inline-block mb-4 text-2xl md:text-3xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline"
                    href="#"
                  >
                    A small business is only as good as its tools and it is
                    totally true.
                  </a>
                  <a
                    className="inline-flex items-center text-base md:text-lg text-yellow-500 hover:text-yellow-600 font-semibold"
                    href="#"
                  >
                    <span className="mr-3">Read Post</span>
                    <svg
                      width="8"
                      height="10"
                      viewBox="0 0 8 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                  <a className="block mb-6 overflow-hidden rounded-md" href="#">
                    <img
                      className="w-full"
                      src="flex-ui-assets/images/blog/learn.jpg"
                      alt=""
                    />
                  </a>
                  <div className="mb-4">
                    <a
                      className="inline-block py-1 px-3 text-xs leading-5 text-yellow-500 hover:text-yellow-600 font-medium uppercase bg-yellow-100 hover:bg-yellow-200 rounded-full shadow-sm"
                      href="#"
                    >
                      Article
                    </a>
                  </div>
                  <p className="mb-2 text-coolGray-500 font-medium">
                    John Doe • 19 Jan 2022
                  </p>
                  <a
                    className="inline-block mb-4 text-2xl md:text-3xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline"
                    href="#"
                  >
                    A small business is only as good as its tools and it is
                    totally true.
                  </a>
                  <a
                    className="inline-flex items-center text-base md:text-lg text-yellow-500 hover:text-yellow-600 font-semibold"
                    href="#"
                  >
                    <span className="mr-3">Read Post</span>
                    <svg
                      width="8"
                      height="10"
                      viewBox="0 0 8 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <a className="block mb-6 overflow-hidden rounded-md" href="#">
                    <img
                      className="w-full"
                      src="flex-ui-assets/images/blog/macbook.jpg"
                      alt=""
                    />
                  </a>
                  <div className="mb-4">
                    <a
                      className="inline-block py-1 px-3 text-xs leading-5 text-yellow-500 hover:text-yellow-600 font-medium uppercase bg-yellow-100 hover:bg-yellow-200 rounded-full shadow-sm"
                      href="#"
                    >
                      Podcast
                    </a>
                  </div>
                  <p className="mb-2 text-coolGray-500 font-medium">
                    John Doe • 19 Jan 2022
                  </p>
                  <a
                    className="inline-block mb-4 text-2xl md:text-3xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline"
                    href="#"
                  >
                    A small business is only as good as its tools and it is
                    totally true.
                  </a>
                  <a
                    className="inline-flex items-center text-base md:text-lg text-yellow-500 hover:text-yellow-600 font-semibold"
                    href="#"
                  >
                    <span className="mr-3">Read Post</span>
                    <svg
                      width="8"
                      height="10"
                      viewBox="0 0 8 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <a
                className="flex items-center justify-center py-2 px-4 mx-auto text-sm leading-5 text-yellow-50 font-medium bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 md:max-w-max rounded-md"
                href="#"
              >
                <span className="mr-3">View more</span>
                <svg
                  className="text-yellow-50"
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7583 4.40833C10.6809 4.33023 10.5887 4.26823 10.4871 4.22592C10.3856 4.18362 10.2767 4.16183 10.1667 4.16183C10.0567 4.16183 9.94773 4.18362 9.84619 4.22592C9.74464 4.26823 9.65247 4.33023 9.575 4.40833L6.83333 7.15833V0.833333C6.83333 0.61232 6.74554 0.400358 6.58926 0.244078C6.43297 0.0877975 6.22101 0 6 0C5.77899 0 5.56702 0.0877975 5.41074 0.244078C5.25446 0.400358 5.16667 0.61232 5.16667 0.833333V7.15833L2.425 4.40833C2.26808 4.25141 2.05525 4.16326 1.83333 4.16326C1.61141 4.16326 1.39859 4.25141 1.24167 4.40833C1.08475 4.56525 0.99659 4.77808 0.99659 5C0.99659 5.22192 1.08475 5.43475 1.24167 5.59167L5.40833 9.75833C5.48759 9.8342 5.58104 9.89367 5.68333 9.93333C5.78308 9.97742 5.89094 10.0002 6 10.0002C6.10906 10.0002 6.21692 9.97742 6.31667 9.93333C6.41896 9.89367 6.51241 9.8342 6.59167 9.75833L10.7583 5.59167C10.8364 5.5142 10.8984 5.42203 10.9407 5.32048C10.9831 5.21893 11.0048 5.11001 11.0048 5C11.0048 4.88999 10.9831 4.78107 10.9407 4.67952C10.8984 4.57797 10.8364 4.4858 10.7583 4.40833Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
          </section>
        </section>

        {/* <div className="bg-black w-full text-white px-[200px] text-center leading-loose pt-20 mt-[100px] mx-auto">
        <h2 className="font-bold text-3xl mb-2">KIDS CHURCH</h2>
        <p>
          Kami menyediakan Ibadah Online setiap Minggu jam 8.30 pagi yang
          kreatif dan penuh dengan Firman. Tidak hanya itu, kami juga rindu
          anak-anak dapat berdoa, pujian dan penyembahan bersama melalui
          aplikasi Zoom yang dilakukan setiap hari Sabtu 21 Januari 2021
        </p>
        <div className="bg-white text-black hover:bg-primary hover:text-white duration-300 rounded-[20px] hover:cursor-pointer px-10 py-2 text-center font-bold w-1/2 mt-5 mx-auto">
          JOIN US NOW
        </div>

        <div className="w-1/2 mx-auto flex justify-center">
          <img src="/assets/img/online/kids2.png" className="" alt="Online" />
          <img src="/assets/img/online/kids1.png" className="" alt="Online" />
        </div>
      </div> */}

        {/* <div className="bg-black w-full text-white text-center leading-loose mx-auto relative">
        <div className="flex">
          <img
            src="/assets/img/online/bgdrp.png"
            className="w-full"
            alt="Online"
          />
        </div>
        <div className="absolute bottom-20 px-[250px]">
          <h2 className="font-bold text-3xl mb-2">
            DRP 2.32 OUTSTANDING TEENS
          </h2>
          <br />
          <p>
            DOT (DRP Outstanding Teens) adalah Ibadah anak-anak remaja usia
            12-16 Tahun yang penuh dengan sukacita dan Ibadah DOT saat ini
            melalui aplikasi Zoom yang dilakukan setiap hari Kamis di Minggu
            ketiga pukul 16.00 sore.
          </p>
          <br />
          <div className="flex">
            <div className="bg-white text-black hover:bg-primary hover:text-white duration-300 rounded-[20px] hover:cursor-pointer px-10 py-2 text-center font-bold w-1/2 mt-5 mx-auto mr-10">
              JOIN US NOW
            </div>
            <div className="outline outline-white text-white hover:outline-primary hover:bg-primary duration-300 rounded-[20px] hover:cursor-pointer px-10 py-2 text-center font-bold w-1/2 mt-5 mx-auto">
              CONTACT ME
            </div>
          </div>
          <div className="pb-20"></div>
        </div>
      </div> */}
        {/* <div className="bg-black w-full text-white text-center leading-loose mx-auto relative">
        <div className="flex">
          <img
            src="/assets/img/online/bgdays.png"
            className="w-full opacity-40"
            alt="Online"
          />
        </div>
        <div className="absolute bottom-40 px-[250px]">
          <h2 className="font-bold text-3xl mb-2">THE SIGNIFICANT WOMEN</h2>
          <p>
            The Significant Women adalah Ibadah untuk para wanita yang ingin
            bertumbuh di dalam Kristus,. Ibadah ini diadakan Setiap Minggu ke 4
            jam 6 sore melalui platform Youtube ERC SAWANGAN.
          </p>
          <div className="bg-white text-black hover:bg-primary hover:text-white duration-300 rounded-[20px] hover:cursor-pointer px-10 py-2 text-center font-bold w-1/2 mt-5 mx-auto">
            JOIN US NOW
          </div>
          <div className="pb-20"></div>
        </div>
      </div> */}
      </MainLayout>
    </>
  );
};

export default Kids;
