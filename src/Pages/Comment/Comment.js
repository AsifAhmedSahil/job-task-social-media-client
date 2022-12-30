import React from 'react'

const Comment = ({com}) => {
    const {comment,email} = com;
    
  return (
    <div className='m-5 p-2 bg-green-500 text-white'>
        <h1 className='text-sm'>Posted By: {email}</h1>
        {comment}
        </div>
  )
}

export default Comment