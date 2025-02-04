import React from 'react'
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";


const Card = (props) => {
    const review = props.review;
  return (
    <div className='flex flex-col md:relative '>
        <div className='absolute top-[-7rem] z-[10] mx-auto '>
            <img src={review.image}
            className='aspect-square rounded-full w-[140px] h-[140px] z-[25]'></img>
            <div className='w-[140px] h-[140px] rounded-full bg-violet-500 absolute z-[-10] top-[-6px] left-[6px]'></div>
        </div>

        <div className='text-center mt-7'>
            <p className='font-bold text-2xl tracking-wider'>{review.name}</p>
            <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
        </div>


        <div className='mx-auto text-violet-400 mt-5'>
            <FaQuoteLeft/>
        </div>

        <div className='text-center mt-4 text-slate-500'>
            {review.text}
        </div>
        
        <div className='mx-auto text-violet-400 mt-5'>
            <FaQuoteRight/>
        </div>

        
        
    </div>
  )
}

export default Card