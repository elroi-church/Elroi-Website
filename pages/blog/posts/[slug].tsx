import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../../core/components/commons/layouts/MainLayout";
import { useGetBlogPostSlugQuery } from "../../../core/features/blog/api/blog-post.api";
import { BlogPost } from "../../../core/features/blog/dtos/models/blog-post.entity";
import { ConvertHTML } from "../../../core/helpers/convert-html";
import { dateTimeFormat1 } from "../../../core/helpers/time-parser";

const Detail: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { data } = useGetBlogPostSlugQuery({
    slug: slug as string,
  });

  const [blogPost, setBlogPost] = React.useState<BlogPost>();

  React.useEffect(() => {
    if (data) {
      setBlogPost(data.data);
    }
  }, [data]);

  return (
    <MainLayout>
      <div className="w-full lg:w-1/2 mx-auto px-5">
        <h2 className="font-bold text-2xl lg:text-5xl my-10 tracking-wide ">
          {blogPost && blogPost.title}
        </h2>
        <div className="flex">
          <img
            src="/assets/img/about/aboutp.png"
            className="w-[10%] rounded-lg"
            alt="Term condition"
          />
          <div className="flex flex-col ml-3 my-auto">
            <h2 className="font-bold">{blogPost?.authorData?.fullname}</h2>

            <p>{dateTimeFormat1(blogPost?.publishedDate as string)}</p>
          </div>
        </div>
        <br />
        <hr className="border-4 rounded-lg border-black" />
        <br />
        <div>
          <img
            src={blogPost && blogPost.coverImage?.url}
            className="rounded-lg"
            alt="Term condition"
          />
        </div>
        <div
          className="prose lg:prose-xl"
          dangerouslySetInnerHTML={{
            __html: ConvertHTML.serialize(blogPost?.content),
          }}
        ></div>
      </div>
    </MainLayout>
  );
};

export default Detail;
