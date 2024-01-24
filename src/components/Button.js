import React from 'react'
import {useNavigate} from 'react-router-dom'

function Button({name}) {
  const navigate=useNavigate();
  return (
    <button className='px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300' onClick={()=>{navigate(`/search_results?search_query=${name}`);}}>{name}</button>
  )
}

export default Button