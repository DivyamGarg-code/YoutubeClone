import React from 'react'
import "./shimmer.css";

const Shimmer = () => {
    return (
        <div className='flex justify-center items-center opacity-[0.7] p-4'>
            <div className='flex flex-row justify-center items-center gap-5 flex-wrap'>
                <div className='w-[200px] h-[300px] rounded-md shimming-effect'></div>
                <div className='w-[200px] h-[300px] rounded-md shimming-effect'></div>
                <div className='w-[200px] h-[300px] rounded-md shimming-effect'></div>
                <div className='w-[200px] h-[300px] rounded-md shimming-effect'></div>
                <div className='w-[200px] h-[300px] rounded-md shimming-effect'></div>
                <div className='w-[200px] h-[300px] rounded-md shimming-effect'></div>
                <div className='w-[200px] h-[300px] rounded-md shimming-effect'></div>
                <div className='w-[200px] h-[300px] rounded-md shimming-effect'></div>
                <div className='w-[200px] h-[300px] rounded-md shimming-effect'></div>
                <div className='w-[200px] h-[300px] rounded-md shimming-effect'></div>
                <div className='w-[200px] h-[300px] rounded-md shimming-effect'></div>
                <div className='w-[200px] h-[300px] rounded-md shimming-effect'></div>
            </div>
        </div>
    )
}
export const ShimmerWatchResults = () => {
    return (
        <div className='flex w-full opacity-[0.7] p-4'>
            <div className='flex w-full flex-col gap-5'>
                <div className='w-full h-[200px] rounded-md shimming-effect'></div>
                <div className='w-full h-[200px] rounded-md shimming-effect'></div>
                <div className='w-full h-[200px] rounded-md shimming-effect'></div>
            </div>
        </div>
    )
}

export default Shimmer
