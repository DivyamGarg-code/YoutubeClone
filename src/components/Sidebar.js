import React from 'react'
import { useSelector } from 'react-redux'

function Sidebar() {
    const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
    return (
        isMenuOpen && <div className='p-6 shadow-lg flex flex-col gap-3 flex-shrink-0 w-[200px]'>
            <div>
                {/* <h1 className='font-bold'>Subscriptions</h1> */}
                <ul>
                    <li>Home</li>
                    <li>Shorts</li>
                    <li>Videos</li>
                    <li>Live</li>
                </ul>
            </div>
            <div>
                <h1 className='font-bold'>Subscriptions</h1>
                <ul>
                    <li>Music</li>
                    <li>Sports</li>
                    <li>Gaming</li>
                    <li>Movies</li>
                </ul>
            </div>
            <div>
                <h1 className='font-bold'>Watch Later</h1>
                <ul>
                    <li>Music</li>
                    <li>Sports</li>
                    <li>Gaming</li>
                    <li>Movies</li>
                </ul>
            </div>



        </div>
    )
}

export default Sidebar