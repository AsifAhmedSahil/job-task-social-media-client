import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AiOutlineLike,AiOutlineSend ,AiFillLike} from 'react-icons/ai';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import Comment from '../Comment/Comment';

const Details = () => {
  const {user} = useContext(AuthContext);
  
  const {status,image,_id,Like} = useLoaderData();
  const [comments,setComments] = useState([])

  const [like,setLike] = useState(Like)

  
  

  useEffect(()=>{
    fetch("http://localhost:5000/comments")
    .then(res => res.json())
    .then(data => setComments(data))
  },[comments]);
  

  

  const handleComment = event =>{

    
    event.preventDefault();
    const form = event.target
    const comment = form.comment.value
    const email = user?.email;

    const click = {
      comment: comment,
      email: email,
      postid:_id

    }

    fetch("http://localhost:5000/comments",{
      method:"POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(click)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.acknowledged){
        toast.success("comment post")
        form.reset();
      }
    })
    .catch(err => console.log(err))
  }
    
  const handleLike = id =>{
    
    fetch(`http://localhost:5000/posts/${id}`,{
      method:"PATCH",

    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      // Like = "Like"
      setLike("Like")

    })
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto my-[100px] ">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>{status}</p>
    <div className=" flex flex-row justify-between">

      { like !== "Like" ?
        <button onClick={() => handleLike(_id)} className="mr-6"><AiOutlineLike size={30}></AiOutlineLike></button>
        : 
        <button onClick={() => handleLike(_id)} className="mr-6"><AiFillLike size={30}></AiFillLike></button>
        }

      <form onSubmit={handleComment} className="flex justify-center items-center ">
        
      <div>
      <input name='comment' type="text" placeholder="Type here" className="input mr-6 w-full max-w-xs input-bordered" />
      </div>
      <input type="submit" value="send"  className='btn btn-sm flex ml-9'/>
      </form>
    </div>
    <h1 className='font-bold text-3xl underline mt-10'>Comments</h1>
    {
      comments?.map(com => <Comment com={com} key={com._id} ></Comment>)
    }
    
    
  </div>
</div>
  )
}

export default Details