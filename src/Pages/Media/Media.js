import React, { useEffect, useState } from 'react'
import PostCard from './PostCard';

const Media = () => {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        fetch("https://server-eight-psi.vercel.app/posts")
        .then(res => res.json())
        .then(data => setPosts(data));
    },[])
  return (
    <div className='grid grid-cols-1 gap-6 my-[70px] min-h-screen'>
        
        {
            posts.map(post => <PostCard  key={post._id} post={post}></PostCard>)
        }
    </div>
  )
}

export default Media