import React from 'react'

const PostCard = ({post}) => {
    const {status,image,user} = post
  return (
    <div className='max-w-5xl mx-auto h-[270px] w-full'>
        <div className="card lg:card-side bg-base-100 shadow-xl ">
  <figure className="w-[40%]" ><img src={image} className="h-[270px] w-full" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">Posted By: {user}</h2>
    <p>{status}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary rounded">Details</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default PostCard