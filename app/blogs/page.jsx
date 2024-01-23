"use client";

import BlogCard from "@/components/BlogCard";
import ImageSlider from "@/components/ImageSlider";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const categories = ["motivation", "career development"];

const blogs = () => {
  const [posts, setPosts] = useState(null);
  const [allPost, setAllPost] = useState(null);
  const [selectedCategry, setSelectedCategry] = useState("");

  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      // debugger;
      const response = await fetch("/api/blogs");
      const data = await response.json();
      setPosts(data);
      setAllPost(data);
    };

    if (posts == null) {
      // debugger;
      fetchPosts();
    } else {
      // debugger;
      setImages(
        posts.map((post) => ({
          src: post.coverImg || "",
          alt: "image not found",
          title: post.title || "",
          description: post.description || "",
        }))
      );
    }
  }, [posts]);

  const handleTagClick = (category) => {
    setSelectedCategry(category);
    const regex = new RegExp(category, "i"); // 'i' flag for case-insensitive search
    const filteredResult = allPost?.filter((item) => regex.test(item.category));
    setPosts(filteredResult);
  };

  if (posts != null) {
    return (
      <div className="mx-auto bg-slate-200">
        <ImageSlider images={images} />
        <div className="feed flex flex-col items-center px-10 md:p-10 md:pt-16 sm:p-0 pt-16">
          <div className="title">
            <h3 className="text-3xl md:text-6xl text-center">
              <span className="font-thin">Stay updated with our </span>
              <span className="font-bold">Latest Blogs</span>
            </h3>
          </div>
          <div className="border-none w-full my-3 flex flex-col items-start sm:items-center ">
            <ul className="flex flex-col sm:flex-row gap-x-3">
              {categories.map((category) => (
                <p
                  onClick={() => handleTagClick(category)}
                  className={`${
                    selectedCategry == category
                      ? "border-b-blue-950 border-b-2"
                      : ""
                  } w-fit px-3 cursor-pointer text-lg`}
                >
                  {category}
                </p>
              ))}
            </ul>
          </div>
          <div className="my-8 space-y-10 grid grid-cols-1 md:grid-cols-4 md:space-y-0 gap-9">
            {posts?.map((post) => (
              <BlogCard post={post} />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default blogs;
