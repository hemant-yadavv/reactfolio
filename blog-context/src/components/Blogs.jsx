import React, { useContext } from 'react'
import Spinner from './Spinner';
import Card from './Card';
import {AppContext} from '../context/AppContext'
import BlogDetails from './BlogDetails';

const Blogs = () => {
  // consume
  const { posts, loading } = useContext(AppContext);

  return (
    <div className='w-11/12 h-screen max-w-[670px] py-8 flex flex-col gap-y-7 mt-[80px] mb-[100px] justify-center items-center'>
      {
        loading ? (<Spinner />) :
          (
            posts.length === 0 ?
              (<div>
                <p>No Post Found</p>
              </div>) :
              (posts.map( (post)=> (
                <BlogDetails key={post.id} post={post}/>
              )))
          )
      }
    </div>
  )
}

export default Blogs
