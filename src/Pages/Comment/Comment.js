import React from 'react'

const Comment = ({com,posts}) => {
    // const {comment,email,postid} = com;
    const {comment,email} = com;
    // const {_id} = posts

    // console.log(_id)
    
  return (
    <div className='m-5 p-2 bg-green-500 text-white'>
        <h1 className='text-sm'>Posted By: {email}</h1>
        {/* {
          postid == _id && {comment}
        } */}
        {comment}
        </div>
  )
}

export default Comment