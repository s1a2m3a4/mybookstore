import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import {useForm} from "react-hook-form"
import axios from "axios";

function Signup() {
     const{
            register,
            handleSubmit,
            formState:{errors},
        }=useForm();

        const onSubmit=async (data)=>{
            const userinfo={
                fullname:data.fullname,
                email:data.email,
                password:data.password,
           }

           await axios.post("http://localhost:4001/user/signup",userinfo)
           .then((res)=>{
              console.log(res.data);
              if(res.data){
                alert("signup successfully")
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
   <>
      <div className='flex h-screen items-center justify-center  '>  
        <div  className="w-[600px]">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">✕</Link>
                   
                    <h3 className="font-bold text-lg text-black">Signup</h3>

                    <div className='mt-5 space-y-2'>
                    <span>Name</span>
                    <br />
                    <input type="text" placeholder='enter your name' className='w-80 px-3 py-1 border rounded-md text-black'
                    {...register("fullname",{required:true})} />
                    <br />
                    {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                   </div>

                   <div className='mt-5 space-y-2'>
                    <span>Email</span>
                    <br />
                    <input type="email" placeholder='enter your email' className='w-80 px-3 py-1 border rounded-md text-black'
                    {...register("email",{required:true})}
                     />
                     <br />
                     {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                   </div>

                   <div className='mt-5 space-y-2'>
                    <span>Password</span>
                    <br />
                    <input type="password" placeholder='enter your password' className='w-80 px-3 py-1 border rounded-md text-black' {...register("password",{required:true})} />
                    <br />
                    {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                   </div>
                  
                    <div className='flex justify-around mt-5'>
                        <button className='bg-green-700 text-white rounded-md py-1 px-3 hover:bg-green-500'>Signup</button>
                        <p>Have account?{""} <button className='text-red-600 underline cursor-pointer' onClick={()=> document.getElementById("my_modal_3").showModal()}>Login</button>{""}
                        <Login/>
                        </p>
                    </div>
                    </form>
                </div>
            </div>
        </div>
   </>
  )
}

export default Signup
