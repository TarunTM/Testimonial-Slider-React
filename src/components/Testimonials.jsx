import React from 'react'
import Card from './Card.jsx';
import { FiChevronRight,FiChevronLeft } from "react-icons/fi";
import { useState } from 'react';

const Testimonials = (props) => {
    const reviews = props.reviews;
    const [index,setIndex] =useState(0);


    function leftShiftHandler(){
        if(index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        else{
            setIndex(index-1)
        }

    }

    function rightShiftHandler(){
        if(index + 1 >= reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }

    function supriseHandler(){
        const randomIndex = (Math.floor(Math.random() * reviews.length));
        setIndex(randomIndex);
    }

  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-md rounded-md'>
        <Card review={reviews[index]}/>

        <div className='flex text-3xl mt-10 mb-5 gap-3 text-violet-400 font-bold justify-center items-center'>

            <button onClick={leftShiftHandler}
                    className='cursor-pointer hover:text-violet-500'>
                <FiChevronLeft />
            </button>
            <button onClick={rightShiftHandler}
                    className='cursor-pointer hover:text-violet-500'>
                <FiChevronRight />
            </button>
    
        </div>

        <div>
            <button onClick={supriseHandler}
                    className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
                Surprise Me
            </button>
        </div>
    </div>
  )
}

export default Testimonials