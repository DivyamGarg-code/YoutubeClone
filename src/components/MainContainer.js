import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

function MainContainer() {
  return (
    <div className='flex flex-col gap-6 items-center w-full'>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer