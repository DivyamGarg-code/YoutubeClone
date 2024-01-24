import React, { useEffect, useState } from 'react'
import VideoCard, { AdVideoCard } from './VideoCard'
import { YT_Videos_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { addVideoList } from '../utils/appSlice';
import Shimmer from './Shimmer.js';

function VideoContainer() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const videoList = useSelector((store) => store.app.videoList);
  // const [videos, setVideos] = useState(null)
  const getVideos = async () => {
    const data = await fetch(YT_Videos_URL);
    const json = await data.json();
    console.log(json);
    // setVideos(json.items);
    setLoading(false);
    dispatch(addVideoList(json.items));

  }
  useEffect(() => {
    if (videoList.length === 0) {
      getVideos();
    }
  }, []);

  if (videoList.length === 0 && loading) {
    return <Shimmer />
  }
  return (
    videoList.length !== 0 && <div className='flex gap-6 justify-center flex-wrap'>
      <AdVideoCard info={videoList[0]} />
      {videoList.map((video) => {
        return <Link key={video.id} to={`/watch?v=${video.id}`} className='h-fit w-fit'><VideoCard info={video} /></Link>
      })}
    </div>
  )
}

export default VideoContainer