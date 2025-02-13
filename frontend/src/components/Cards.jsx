import React from 'react'

function Cards({ item }) {


    return (
        <>
            <div className='mt-6 my-3'>
                <div className="card bg-base-100 w-96 shadow-xl flex flex-col hover:scale-110 duration-200 dark:bg-slate-900 dark:text-white dark: border">
                    <figure className="flex justify-center items-center h-96 overflow-hidden ">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                        />
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="cursor-pointer px-2 py-1  rounded-full border-[3px] hover:bg-red-500 hover:text-white ">${item.price}</div>
                            <div className="cursor-pointer px-2 py-1 rounded-full border-[3px] hover:bg-green-600  hover:text-white duration-200">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
