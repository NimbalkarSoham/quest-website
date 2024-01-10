import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = ({ post }) => {
  return (
    
    <div className='flex flex-col p-4 bg-slate-200 border-2 border-gray-300 mx-auto rounded-lg hover:scale-105 duration-200 ease-in-out md:w-[300px]'>
      <Link href={`/blogs/${post._id}`}>
        <img src={post.coverImg} alt="not found" className='rounded-t-lg hover:brightness-75 duration-200 md:w-[500px] md:h-[200px] md:object-cover'/>
        <p className='font-extralight px-2 pt-2 font-serif'>{post.createdAt.substring(0, 10)}</p>
        <h2 className='font-bold text-lg px-2'>{post.title.substr(0,50)}..</h2>
        <p className='font-extralight px-2'>{post.description.substr(0,75)}...</p>
        <p className='font-extralight text-xs px-2'>#{post.category}</p>
      </Link>
    </div>
  )
}

export default BlogCard