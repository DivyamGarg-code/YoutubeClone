import React from 'react'
import { useCardColor } from '../hooks/useThemeColor';
// import { Link } from 'react-router-dom';

function VideoCard({info}) {
  // console.log(info);
  const cardColor=useCardColor();
  const {snippet,statistics}=info;
  const {channelTitle,title,thumbnails}=snippet;
  // console.log(channelTitle,title,thumbnails,statistics);  
  return (
    <div className={`w-[300px] rounded-lg shadow-lg p-2 ${cardColor}`}>
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul className='flex flex-col gap-2'>
        <li className='font-bold text-[18px]'>{title}</li>
        <li className='text-gray-700'>Channel Name : {channelTitle}</li>
        <li className='text-gray-500 text-xs'>{statistics.viewCount} Views</li>
      </ul>
    </div>
  )
} 

export default VideoCard

export const AdVideoCard=({info})=>{
  return (
    <div className='border border-gray-500 rounded-lg'>
      <VideoCard info={info}/>
    </div>
  )
}

export const SearchedVideoCard=({info})=>{
  console.log(info);
  const {snippet}=info;
  const {channelTitle,title,description,channelId,thumbnails}=snippet;
  const cardColor=useCardColor();
  // console.log(channelTitle,title,thumbnails,description,channelId);  
  return (
    <div className={`w-[full] rounded-lg shadow-lg p-2 flex flex-col items-center gap-3 ${cardColor} md:flex-row items-center`}>
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul className='flex flex-col gap-1 text-center md:text-start'>
        <li className='font-bold text-2xl'>{title}</li>
        <li className='text-gray-500'>Channel Name : {channelTitle}</li>
        <li className='pr-4'>{description}</li>
      </ul>
    </div>
  )
}