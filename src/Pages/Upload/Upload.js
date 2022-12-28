import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider'



const Upload = () => {

    const {user} = useContext(AuthContext)

    const imageHostKey = process.env.REACT_APP_image_bb
    

    const handlePost = event =>{
        event.preventDefault();
        const form = event.target;
        const status = form.status.value;
        const image = form.image.files[0];
        // const image = form.image[0];
        
        const formData = new FormData();
        formData.append("image",image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url,{
            method:"POST",
            body:formData
          })
          .then(res => res.json())
          .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url)
                const post ={
                    status:status,
                    image:imgData.data.url,
                    user:user?.email
                }

                // save database
                fetch("http://localhost:5000/posts",{
                    method:"POST",
                    headers:{
                      "content-type": "application/json",
                      
                    },
                    body:JSON.stringify(post)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success("post successful! 🙂 ")
                })
            }
          })
    
        // console.log(image,status);

        const post ={
            status:status,
            image:image
        }
    
    }
    
  return (
    <div className='text-center my-10 py-10  max-w-xl mx-auto'>
        <h2 className='text-xl font-semibold my-6'>Whats on your mind?</h2>
        <form onSubmit={handlePost}>
        
        <input type="text" name='status' className="textarea textarea-warning w-[80%]" placeholder="Status..."></input>
        
       
        <div>
        <input type="file" name="image" />
        </div>
        <input className='btn btn-success' type="submit" value='submit' />
        </form>
    </div>
  )
}

export default Upload