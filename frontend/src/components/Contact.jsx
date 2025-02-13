// // import React from 'react'
// // import { Link } from 'react-router-dom'
// // import { useForm } from "react-hook-form"

// // function Contact() {
// //     const{
// //         register,
// //         handleSubmit,
// //         formState:{errors},
// //         }=useForm();
// //        const onSubmit=(data)=>console.log(data);
// //     return (
// //         <>
// //             <div>
// //             <dialog id="my_modal_3" className="modal" open>

// //                     <div className="modal-box text-black">

// //                         <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">✕</Link>


// //                         <h3 className="font-bold text-lg text-black text-center">Contact Us</h3>
// //                         <form onSubmit={handleSubmit(onSubmit)}>
// //                             <div className='mt-5 space-y-2'>
// //                                 <span>Name</span>
// //                                 <br />
// //                                 <input type="text" placeholder='enter your name' className='w-80 px-3 py-1 border rounded-md'
// //                                     {...register("name", { required: true })} />
// //                                 <br />
// //                                 {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
// //                             </div>

// //                             <div className='mt-5 space-y-2'>
// //                                 <span>Email</span>
// //                                 <br />
// //                                 <input type="email" placeholder='enter your email' className='w-80 px-3 py-1 border rounded-md'
// //                                     {...register("email", { required: true })} />
// //                                 <br />
// //                                 {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
// //                             </div>

// //                             <div className='mt-5 space-y-2'>
// //                                 <span>Message</span>
// //                                 <br />
// //                                 <textarea name="message" rows="4" cols="50" placeholder="Enter your message here..."  className='w-80 px-3 py-1 border rounded-md'
// //                                     {...register("message", { required: true })} />
// //                                 <br />
                    
// //                             </div>

// //                             <div className='flex justify-around mt-5'>
// //                                 <button type='submit' className='bg-blue-700 text-white rounded-md py-1 px-3 hover:bg-blue-500'>Submit</button>
// //                             </div>
// //                         </form>
                      
// //                     </div>


// //                 </dialog>
// //             </div>
// //      </>
// //          );
// // }


// // export default Contact

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";

// function Contact() {
//     const {
//         register,
//         handleSubmit,
//         reset,
//         formState: { errors },
//     } = useForm();

//     const [loading, setLoading] = useState(false);

//     const onSubmit = async (data) => {
//         setLoading(true);
//         try {
//             const response = await fetch("http://localhost:4001/contact", { // Update if needed
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(data),
//             });

//             if (response.ok) {
//                 alert("Message sent successfully!");
//                 reset(); // Clear form fields
//             } else {
//                 alert("Failed to send message. Try again!");
//             }
//         } catch (error) {
//             console.error("Error sending message:", error);
//             alert("Error sending message.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <dialog id="my_modal_3" className="modal" open>
//                 <div className="modal-box text-black">
//                     <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">
//                         ✕
//                     </Link>

//                     <h3 className="font-bold text-lg text-black text-center">Contact Us</h3>
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         <div className="mt-5 space-y-2">
//                             <span>Name</span>
//                             <br />
//                             <input
//                                 type="text"
//                                 placeholder="Enter your name"
//                                 className="w-80 px-3 py-1 border rounded-md"
//                                 {...register("name", { required: "Name is required" })}
//                             />
//                             <br />
//                             {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
//                         </div>

//                         <div className="mt-5 space-y-2">
//                             <span>Email</span>
//                             <br />
//                             <input
//                                 type="email"
//                                 placeholder="Enter your email"
//                                 className="w-80 px-3 py-1 border rounded-md"
//                                 {...register("email", { required: "Email is required" })}
//                             />
//                             <br />
//                             {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
//                         </div>

//                         <div className="mt-5 space-y-2">
//                             <span>Message</span>
//                             <br />
//                             <textarea
//                                 name="message"
//                                 rows="4"
//                                 cols="50"
//                                 placeholder="Enter your message here..."
//                                 className="w-80 px-3 py-1 border rounded-md"
//                                 {...register("message", { required: "Message is required" })}
//                             />
//                             <br />
//                             {errors.message && <span className="text-sm text-red-500">{errors.message.message}</span>}
//                         </div>

//                         <div className="flex justify-around mt-5">
//                             <button
//                                 type="submit"
//                                 className="bg-blue-700 text-white rounded-md py-1 px-3 hover:bg-blue-500"
//                                 disabled={loading}
//                             >
//                                 {loading ? "Sending..." : "Submit"}
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </dialog>
//         </div>
//     );
// }

// export default Contact;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser"; // Import EmailJS

function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);

        const serviceId = "service_fj1o71j"; // Replace with your actual EmailJS Service ID
        const templateId = "template_g1nanya"; // Replace with your EmailJS Template ID
        const publicKey = "KqjtJTPG-tWxgiQBP"; // Replace with your EmailJS Public Key

        const templateParams = {
            name: data.name,
            email: data.email,
            message: data.message,
        };

        try {
            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            alert("Message sent successfully!");
            reset();
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Failed to send message. Try again!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal" open>
                <div className="modal-box text-black">
                    <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">
                        ✕
                    </Link>

                    <h3 className="font-bold text-lg text-black text-center">Contact Us</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mt-5 space-y-2">
                            <span>Name</span>
                            <br />
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-80 px-3 py-1 border rounded-md"
                                {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
                        </div>

                        <div className="mt-5 space-y-2">
                            <span>Email</span>
                            <br />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-80 px-3 py-1 border rounded-md"
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
                        </div>

                        <div className="mt-5 space-y-2">
                            <span>Message</span>
                            <br />
                            <textarea
                                rows="4"
                                placeholder="Enter your message here..."
                                className="w-80 px-3 py-1 border rounded-md"
                                {...register("message", { required: "Message is required" })}
                            />
                            {errors.message && <span className="text-sm text-red-500">{errors.message.message}</span>}
                        </div>

                        <div className="flex justify-around mt-5">
                            <button
                                type="submit"
                                className="bg-blue-700 text-white rounded-md py-1 px-3 hover:bg-blue-500"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Submit"}
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Contact;
