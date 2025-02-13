// import React from 'react'
// import { Link } from 'react-router-dom'
// import {useForm} from "react-hook-form"

// function Login() {
//     const{
//         register,
//         handleSubmit,
//         formState:{errors},
//     }=useForm();
//     const onSubmit=(data)=>console.log(data);
    
//     return (
//         <div>
//             <dialog id="my_modal_3" className="modal">
//                 <div className="modal-box text-black">
//                     <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
//                         <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">✕</Link>
//                         </form>
                    
//                     <h3 className="font-bold text-lg text-black">Login</h3>

//                    <div className='mt-5 space-y-2'>
//                     <span>Email</span>
//                     <br />
//                     <input type="email" placeholder='enter your email' className='w-80 px-3 py-1 border rounded-md'
//                     {...register("email",{required:true})}/>
//                     {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
//                    </div>

//                    <div className='mt-5 space-y-2'>
//                     <span>Password</span>
//                     <br />
//                     <input type="password" placeholder='enter your password' className='w-80 px-3 py-1 border rounded-md' 
//                     {...register("password",{required:true})}/>
//                     <br />
//                     {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
//                    </div>
                  
//                     <div className='flex justify-around mt-5'>
//                         <button type='submit' className='bg-green-700 text-white rounded-md py-1 px-3 hover:bg-green-500'>Login</button>
//                         <p>Not registered?{""} <Link to="/signup" className='text-red-600 underline cursor-pointer'>Signup</Link>{""}</p>
//                     </div>
                    
//                 </div>
//             </dialog>
//         </div>
    
//     )
// }

// export default Login

// ...............

import React from 'react'
import { Link } from 'react-router-dom'
import {useForm} from "react-hook-form"
import axios from "axios"

function Login() {
    const{
        register,
        handleSubmit,
        formState:{errors},
    }=useForm();
    const onSubmit=async(data)=>{
        const userinfo={
            email:data.email,
            password:data.password,
       }

       await axios.post("http://localhost:4001/user/login",userinfo)
       .then((res)=>{
          console.log(res.data);
          if(res.data){
            alert("loggedin successfully");
            document.getElementById("my_modal_3").close();
            window.location.reload()
          }
          localStorage.setItem("Users",JSON.stringify(res.data))
          
       }).catch((error)=>{
          if(error.response){
           console.log(error)
           alert("error:" + error.response.data.message)
          }
       })

    }
    
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box text-black">
                    
                        {/* <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">✕</Link> */}
                        <button onClick={() => document.getElementById("my_modal_3").close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">✕</button>

                    
                    <h3 className="font-bold text-lg text-black">Login</h3>
                    <form  onSubmit={handleSubmit(onSubmit)}>
                   <div className='mt-5 space-y-2'>
                    <span>Email</span>
                    <br />
                    <input type="email" placeholder='enter your email' className='w-80 px-3 py-1 border rounded-md'
                    {...register("email",{required:true})}/>
                    <br />
                    {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                   </div>

                   <div className='mt-5 space-y-2'>
                    <span>Password</span>
                    <br />
                    <input type="password" placeholder='enter your password' className='w-80 px-3 py-1 border rounded-md' 
                    {...register("password",{required:true})}/>
                    <br />
                    {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                   </div>
                  
                    <div className='flex justify-around mt-5'>
                        <button type='submit' className='bg-green-700 text-white rounded-md py-1 px-3 hover:bg-green-500'>Login</button>
                    </div>
                  </form>    
                        <p>Not registered?{""} <Link to="/signup" className='text-red-600 underline cursor-pointer'>Signup</Link>{""}</p>
                    </div>
                    
            
            </dialog>
        </div>
    
    );
}

export default Login

