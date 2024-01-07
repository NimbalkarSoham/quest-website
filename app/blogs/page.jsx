"use client"

import BlogCard from '@/components/BlogCard';
import ImageSlider from '@/components/ImageSlider';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


const categories = [
  "motivation",
  "career development"
]

const blogs = () => {

  const [posts, setPosts] = useState(null);

  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchPosts = async() => {
      // debugger;
      const response = await fetch('/api/blogs')
      const data = await response.json();
      setPosts(data);
    } 
  
    if(posts == null){
      // debugger;
      fetchPosts();

    } else{
      // debugger;
      setImages(
        posts.map((post) => ({
          src: post.coverImg || '',
          alt: 'image not found',
          title: post.title || '',
          description: post.description || '',
        }))
      );
    }
    
  }, [posts])


  const handleTagClick = (category) => {
    const regex = new RegExp(category, "i"); // 'i' flag for case-insensitive search
    const filteredResult = allPost?.filter(
      (item) =>
        regex.test(item.category) 
    );
    setPosts(filteredResult)
  }
  
  

  return (
    <div className='mx-auto'>
      <ImageSlider images={images} />
      <div className="feed flex flex-col px-4 sm:px-4 md:px-14 pt-16">
        <div className="title">
          <h2 className='text-6xl font-bold'>Latest Blogs</h2>
        </div>
        <div className="filters bg-slate-200 w-fit px-9 py-2 my-3 rounded-lg">
          <ul className='flex flex-row gap-3.5 text-base'>
            {categories.map((category) => (
              <p onClick={() => handleTagClick(category)} className='cursor-pointer'>{category}</p>
            ))}
          </ul>
        </div>
        <div className="feedList my-8 flex flex-wrap gap-8">
          {posts?.map((post) => (  
            <BlogCard post={post}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default blogs