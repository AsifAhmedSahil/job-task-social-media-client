import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { AiOutlineLike,AiOutlineSend } from 'react-icons/ai';

const Details = () => {
    const {status,image} = useLoaderData();
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto my-[100px] ">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className=" flex flex-row justify-between">
      <button className="mr-6"><AiOutlineLike size={30}></AiOutlineLike></button>
      <input name='comment' type="text" placeholder="Type here" className="input mr-6 w-full max-w-xs input-bordered" />
      <button className="mr-6"><AiOutlineSend size={30}></AiOutlineSend></button>
    </div>
  </div>
</div>
  )
}

export default Details