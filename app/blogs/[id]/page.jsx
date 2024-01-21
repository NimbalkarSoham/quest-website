"use client";
import React, { useEffect, useState } from "react";

const Blog = ({ params }) => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(`/api/blogs/${params.id}`, {
        method: "GET",
      });
      const data = await response.json();
      setBlog(data);
      document.getElementById("content").innerHTML = data?.content;
    };

    if (blog == null) {
      fetchBlog();
    }
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-200">
      <div className="w-full">
        <div className="relative h-[550px] w-full overflow-hidden">
          <div className={`absolute inset-0`}>
            <img
              src={blog?.coverImg}
              alt={"not found"}
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 gradient-overlay"></div>
            <div className="absolute inset-0 flex flex-col justify-end w-fit pb-14 pl-10 pr-20">
              <div className="text-white text-left w-fit font-extrabold text-5xl p-2">
                {blog?.title}
              </div>
              <div className="text-white text-left p-3 w-fit font-extralight text-2xl">
                {blog?.description}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="content"
        className="flex flex-col items-center w-3/4 justify-center pt-9 pb-12 bg-white px-14 my-4 rounded-md"
      ></div>
    </div>
  );
};

export default Blog;
