import React, { createContext, useState } from 'react'
import {baseUrl} from '../baseUrl'
import { useNavigate } from 'react-router-dom';


//Three Steps of Context API
// 1. Create Context
// 2. Providing of Context to children
// 3. Consuming of Context


// create a context
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate()

    // data filling

    async function fetchBlogsPosts(page=1,tag=null,category){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;

        if(tag) {
            url += `&tag=${tag}`;
        }

        if(category){
            url += `&category=${category}`;
        }

        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data)
            setPage(data.page)
            setPosts(data.posts)
            setTotalPages(data.totalPages);
        } catch (error) {
            console.log(error)
            setPage(1)
            setPosts([])
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        navigate({search : `?page=${page}`});
        setPage(page);
        // fetchBlogsPosts(page);
    }

    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogsPosts,
        handlePageChange
    };

    // Providing of Context to children
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}