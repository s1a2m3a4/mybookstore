// import React from 'react'


// function Banner() {
//     return (
//         <>
//             <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
//                 <div className='w-full order-2 md:order-1 md:w-1/2 mt-`12 md:mt-32'>
//                     <div className='space-y-8 '>
//                         <h1 className='text-4xl font-bold '>Books are the keys to knowledge, imagination, <span className='text-red-500'>and new worlds</span></h1>
//                         <p className='text-lg'>📚 Discover a world of books at your fingertips! Whether you're a passionate reader, a student, or just looking for your next great read, Book Haven has something for everyone.</p>

//                         <label className="input input-bordered flex items-center gap-2 mt-0 w-full md:w-1/2" >
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 viewBox="0 0 16 16"
//                                 fill="currentColor"
//                                 className="h-4 w-4 opacity-70">
//                                 <path
//                                     d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
//                                 <path
//                                     d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
//                             </svg>
//                             <input type="text" className="grow" placeholder="Email" />
//                         </label>
                       
//                     </div>
//                     <button className='btn mt-6 btn-info' >Secondry</button>

//                 </div>
//                 <div className=' order-1 w-full md:w-1/2 flex justify-center items-center'>
//                 <img className='w-full md:w-[500px] h-auto object-cover  mt-10 md:mt-28 ' src="banner.jpg" alt="" />
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Banner

import React, { useState } from 'react';

function Banner() {
    const [email, setEmail] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleButtonClick = () => {
        if (email) {
            alert(`Email entered: ${email}`);
            console.log("Email entered:", email);
        } else {
            alert("Please enter an email address.");
        }
    };

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
                <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
                    <div className='space-y-8'>
                        <h1 className='text-4xl font-bold'>Books are the keys to knowledge, imagination, <span className='text-red-500'>and new worlds</span></h1>
                        <p className='text-lg'>📚 Discover a world of books at your fingertips! Whether you're a passionate reader, a student, or just looking for your next great read, Book Haven has something for everyone.</p>

                        <label className="input input-bordered flex items-center gap-2 mt-0 w-full md:w-1/2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input 
                                type="text" 
                                className="grow" 
                                placeholder="Email" 
                                value={email} 
                                onChange={handleEmailChange} 
                            />
                        </label>
                    </div>
                    <button className='btn mt-6 btn-info' onClick={handleButtonClick}>Get started</button>
                </div>
                <div className='order-1 w-full md:w-1/2 flex justify-center items-center'>
                    <img className='w-full md:w-[500px] h-auto object-cover mt-10 md:mt-28' src="banner.jpg" alt="Banner" />
                </div>
            </div>
        </>
    );
}

export default Banner;
