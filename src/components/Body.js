import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import useThemeColor from '../hooks/useThemeColor';

function Body() {
    const themeColor = useThemeColor();
    return (
        <div className={`${themeColor} min-h-[100vh]` }>
            <Header />
            <div className={`flex flex-row gap-2 `}>
                <Sidebar />
                <Outlet />
            </div>
        </div>
    )
}

export default Body

