import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import {
  FaArrowAltCircleLeft,
  FaArrowLeft,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaLongArrowAltLeft,
} from "react-icons/fa";
import Banner from "../../core/components/commons/banner";
import MainLayout from "../../core/components/commons/layouts/MainLayout";
import { useGetAllBlogCategoryQuery } from "../../core/features/blog/api/blog-category.api";
import { useGetAllBlogPostQuery } from "../../core/features/blog/api/blog-post.api";
import { BlogCategory } from "../../core/features/blog/dtos/models/blog-category.entity";
import { BlogPost } from "../../core/features/blog/dtos/models/blog-post.entity";

const Blog: NextPage = () => {
  const router = useRouter();

  function generatePageNumbers(count: number, current: number): number[] {
    var shownPages = 3;
    var result: number[] = [];

    if (count <= shownPages) {
      for (var i = 1; i <= count; i++) {
        result.push(i);
      }
    }
    if (count > shownPages) {
      if (current <= Math.floor(shownPages / 2)) {
        for (var i = 1; i <= shownPages; i++) {
          result.push(i);
        }
      }
      if (
        current > Math.floor(shownPages / 2) &&
        current < count - Math.floor(shownPages / 2)
      ) {
        for (
          var i = current - Math.floor(shownPages / 2);
          i <= current + Math.floor(shownPages / 2);
          i++
        ) {
          result.push(i);
        }
      }
      if (current >= count - Math.floor(shownPages / 2)) {
        for (var i = count - shownPages + 1; i <= count; i++) {
          result.push(i);
        }
      }
    }

    return result;
  }

  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(3);
  const [totalData, setTotalData] = React.useState(0);

  const [nextPage, setNextPage] = React.useState(0);
  const [prevPage, setPrevPage] = React.useState(0);
  const [hasNextPage, setHasNextPage] = React.useState(false);
  const [hasPrevPage, setHasPrevPage] = React.useState(false);
  const [lastPage, setLastPage] = React.useState(0);
  const [pageNumbers, setPageNumbers] = React.useState<number[]>([]);

  const [blogPosts, setBlogPosts] = React.useState<BlogPost[]>([]);
  const [blogCategories, setBlogCategories] = React.useState<BlogCategory[]>(
    []
  );

  const { data } = useGetAllBlogPostQuery(
    {
      page: currentPage,
      limit: pageSize,
      status: "Published",
    },
    {
      skip: false,
      refetchOnMountOrArgChange: true,
    }
  );

  const { data: blogCategoryData } = useGetAllBlogCategoryQuery(
    {
      status: "Published",
    },
    {
      skip: false,
      refetchOnMountOrArgChange: true,
    }
  );

  useEffect(() => {
    if (data) {
      setBlogPosts(data.data);
      setTotalData(data.total);
      setLastPage(data.lastPage);
      setHasNextPage(data.hasNextPage);
      setHasPrevPage(data.hasPrevPage);
      setNextPage(data.nextPage);
      setPrevPage(data.prevPage);
    }
  }, [data]);

  useEffect(() => {
    if (blogCategoryData) {
      setBlogCategories(blogCategoryData.data);
    }
  }, [blogCategoryData]);

  useEffect(() => {
    if (router.query.page) {
      setCurrentPage(Number(router.query.page));
    }
  }, [router.query.page]);

  useEffect(() => {
    setPageNumbers(generatePageNumbers(lastPage, currentPage));
  }, [currentPage, lastPage, totalData]);

  return (
    <>
      <Head>
        <title>Blog - ERC | Elroi Church Sawangan</title>
      </Head>
      <MainLayout>
        <Banner title="The Rainbow" imgUrl="/assets/img/colour/colour.png" />
        <section className="py-24 bg-white">
          <div className="container px-4 mx-auto">
            <div className="mb-8 md:mb-16 md:max-w-5xl">
              <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-yellow-500 bg-yellow-100 font-medium uppercase rounded-full shadow-sm">
                Blog
              </span>
              <h3 className="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter">
                Our mission is to make knowledge and news accessible for
                everyone.
              </h3>
              <p className="text-lg md:text-xl text-coolGray-500 font-medium">
                With our integrated CRM, project management, collaboration and
                invoicing capabilities, you can manage your business in one
                secure platform.
              </p>
            </div>
            <ul className="flex flex-wrap mb-8 -mx-2 text-center">
              <li className="w-full md:w-auto px-2">
                <a
                  className="inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-coolGray-400 hover:text-yellow-500 hover:bg-yellow-200 font-bold rounded-md hover:shadow-sm"
                  href="#"
                >
                  All Categories
                </a>
              </li>

              {blogCategories.map((category) => (
                <li className="w-full md:w-auto px-2" key={category._id}>
                  <a
                    className="inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-coolGray-400 hover:text-yellow-500 hover:bg-yellow-200 font-bold rounded-md hover:shadow-sm"
                    href="#"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center -mx-4 mb-12 md:mb-16">
              {blogPosts.map((blogPost, index) => (
                <div
                  className="flex flex-wrap w-full xl:w-1/3 px-4 mb-8 md:-mx-4"
                  key={index}
                >
                  <div className="w-full md:px-4">
                    <Link href={`blog/posts/${blogPost.slug}`} passHref>
                      <a className="inline-block mb-6 md:mb-0 overflow-hidden rounded-md">
                        <img
                          src={blogPost.coverImage?.url}
                          alt={`${blogPost.title} - image`}
                          className="object-cover"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="flex flex-col justify-around w-full md:flex-1 md:px-4">
                    <Link href={`blog/posts/${blogPost.slug}`} passHref>
                      <a className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline">
                        {blogPost.title}
                      </a>
                    </Link>
                    <Link href={`blog/posts/${blogPost.slug}`} passHref>
                      <a className="inline-flex items-center text-base md:text-lg text-yellow-500 hover:text-yellow-600 font-semibold">
                        <span className="mr-3">Read Post</span>
                        <FaArrowRight />
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mx-auto max-w-max bg-white border border-coolGray-100 rounded-md shadow-lg">
              {/* <Link passHref href={`/blog?page=${prevPage}`}>
                <a className="inline-flex items-center justify-center w-11 h-11 text-coolGray-300 hover:text-coolGray-400 font-medium border-r border-coolGray-100">
                  <FaChevronLeft />
                </a>
              </Link> */}
              <PaginationArrowButton
                active={hasPrevPage}
                page={prevPage}
                onClick={() => setCurrentPage(nextPage)}
              >
                <FaChevronLeft />
              </PaginationArrowButton>
              {pageNumbers.map((pageNumber) => (
                <PaginationButton
                  key={pageNumber}
                  page={pageNumber}
                  active={pageNumber == currentPage}
                  onClick={() => setCurrentPage(pageNumber)}
                />
              ))}
              <PaginationArrowButton
                active={hasNextPage}
                page={nextPage}
                onClick={() => setCurrentPage(nextPage)}
              >
                <FaChevronRight />
              </PaginationArrowButton>
              {/* <Link passHref href={`blog?page=${nextPage}`}>
                <a className="inline-flex items-center justify-center w-11 h-11 text-coolGray-300 hover:text-coolGray-400 font-medium">
                  <FaChevronRight />
                </a>
              </Link> */}
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
};

const PaginationArrowButton = ({
  page,
  active,
  onClick,
  children,
}: {
  page: number;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <>
      {active ? (
        <Link passHref href={`/blog?page=${page}`}>
          <a
            className={`inline-flex items-center justify-center w-11 h-11 text-coolGray-300 hover:text-coolGray-400 font-medium ${
              active ? "" : "bg-gray-300"
            }`}
            onClick={onClick}
          >
            {children}
          </a>
        </Link>
      ) : (
        <span
          className={`inline-flex items-center justify-center w-11 h-11 text-coolGray-300 hover:text-coolGray-400 font-medium cursor-not-allowed ${"bg-gray-300"}`}
        >
          {children}
        </span>
      )}
    </>
  );
};

const PaginationButton = ({ page, active, onClick }) => {
  return (
    <Link href={`blog?page=${page}`} passHref>
      <a
        className={`inline-flex items-center justify-center w-11 h-11 text-coolGray-300 hover:text-coolGray-400 font-medium border-r border-coolGray-100 ${
          active ? "bg-primary text-white" : ""
        }`}
        href="#"
        onClick={onClick}
      >
        {page}
      </a>
    </Link>
  );
};

export default Blog;
