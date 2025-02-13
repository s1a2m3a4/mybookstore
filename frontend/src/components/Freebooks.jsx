import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

// import list from "../../public/list.json"
import axios from 'axios'
import Cards from './Cards';
const Freebooks = () => {
    const [book, setBook] = useState([])
    useEffect(()=>{
       const getBook=async()=>{
        try{
         const res= await axios.get("http://localhost:4001/book")
         console.log(res.data);
         const data=res.data.filter((data) => data.category === "free")
         setBook(data)
         
        }catch(error){
          console.log(error)
        }
       }
       getBook()
    },[])
    // const filterdata = list.filter((data) => data.category === "free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div>
                    <h1 className='font-semibold text-xl pb-2'>Free offered Courses</h1>
                    <p className='text-sm'>Explore our collection of free courses designed to help you grow your skills without any financial commitment. Whether you're looking to improve your career prospects, pick up a new hobby, or expand your knowledge in various fields, we offer a range of high-quality, self-paced courses that cater to different learning needs.
                    </p>
                </div>

                <div>
                    <Slider {...settings}>
                        {book.map((item) => {
                            return <Cards item={item} key={item.id} />;
                        })}
                    </Slider>

                </div>
            </div>
        </>
    )
}

export default Freebooks
