import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {

  const newBaseUrl = "https://codehelp-apis.vercel.app/api"

  const [blog, setBlog] = useState(null);
  const [relatedblogs, setRelatedBlogs] = useState([]);
  const navigation = useNavigate();
  const location = useLocation();
  const { loading, setLoading } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true)
    let url = `${newBaseUrl}/get-blog?blogId=${blogId}`;

    try {

      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);

    } catch (error) {
      console.log(error)
      setBlog(null)
      setRelatedBlogs([])
    }

    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs()

    }
  }, [location.pathname])

  return (
    <div>
      <Header></Header>
      <div>
        <button onClick={()=> navigation(-1)}>Back</button>
      </div>

      {
        loading ? <div><p>Loading...</p></div> :
        blog ? (
          <div>
            <BlogDetails post={blog}></BlogDetails>
            <h2>Related Blogs</h2>
            {
              relatedblogs.map( (post)=> (
                <div key={post.id}>
                  <BlogDetails post={post}></BlogDetails>
                </div>
              ))
            }
          </div>
        ) : ( <div><p> No Blog Found </p></div> )
      }
    </div>
  )
}

export default BlogPage
