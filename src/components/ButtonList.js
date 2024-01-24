import React from 'react'
import Button from './Button'
import { btnList } from '../utils/constants'

function ButtonList() {

  return (
    <div className='flex flex-row justify-center flex-wrap gap-2 pt-4'>
      {btnList.map((name)=>{
        return <Button key={name} name={name} />
      })}
    </div>
  )
}

export default ButtonList