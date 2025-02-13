import React, { useState,useEffect } from 'react'
import Cards from './Cards'
// import list from "../../public/list.json"
import {Link} from "react-router-dom"
import axios from 'axios'

function Course() {
  const [book, setBook] = useState([])
  useEffect(()=>{
     const getBook=async()=>{
      try{
       const res= await axios.get("http://localhost:4001/book")
       console.log(res.data);
       setBook(res.data)
       
      }catch(error){
        console.log(error)
      }
     }
     getBook()
  },[])
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 sticky top-0  p-4'>
        <div className='mt-32 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>We're delighted to have <span className='text-red-500'>you Here! :)</span></h1>
          <p className='mt-12'>Welcome to our e-book store, where knowledge meets convenience! We offer a diverse collection of books across various genres to suit every reader's interest. Whether you're looking for thrilling adventure books, heartwarming romance novels, entertaining comedy stories, or insightful sci-fi tales, we have something for you. Our store also features educational and self-improvement books, helping you enhance your skills and broaden your knowledge.</p>
         <Link to="/">
         <button className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 duration-300 mt-6'>Back</button>
         </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-x-3 justify-center items-center'>
          
            {
              book.map((item) => (
                <Cards key={item.id} item={item}/>
              ))
            }
            
          
        </div>
      </div>
    </>
  )
}

export default Course
