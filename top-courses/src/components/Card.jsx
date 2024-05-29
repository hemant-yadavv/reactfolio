import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import { toast } from 'react-toastify';

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      // phle se like hua pada hai
      setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
      toast.warning("Like Removed");
    }
    else {
      // phle se like nahi hai ye course
      // insert karna h ye course liked course me
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      }
      else {
        // non empty 
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully")
    }
  }

  return (
    <div className='w-[300px] bg-slate-700  bg-opacity-80 rounded-md overflow-hidden'>

      <div className='relative'>
        <img src={course.image.url} alt='' />

        <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
          <button onClick={clickHandler}>
            {
              !likedCourses.includes(course.id) ?
                (<FcLikePlaceholder fontSize="1.75rem" />) :
                (<FcLike fontSize="1.75rem" />)
            }
          </button>
        </div>
      </div>

      <div className='p-4'>
        <p className='text-white text-lg font-semibold leading-6'>{course.title}</p>
        <p className='mt-2 text-white'>
          {
            course.description.length > 100 ?
              (course.description.substr(0, 100)) + "..." :
              (course.description)
          }
        </p>
      </div>

    </div>
  )
}

export default Card