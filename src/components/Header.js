import React from 'react'
import { toggleMenu, toggleTheme } from '../utils/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { ytLogo, hamburgerIcon, userProfileIcon } from '../utils/constants';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom'
import darkModeIcon from '../images/dark_mode.svg'
import lightModeIcon from '../images/light_mode.svg'
import useThemeColor from '../hooks/useThemeColor';
// style={{backgroundColor:darkMode?"black":"white"}}
function Header() {
    const dispatch = useDispatch();
    const darkMode = useSelector((store) => store.app.darkMode);
    const navigate = useNavigate();
    const themeColor = useThemeColor();
    const w_size=window.innerWidth;
    return (
        <div className={`flex flex-row items-center justify-between shadow-lg p-3 gap-2 ${themeColor}`}>
            {/* left Section */}
            <div className='flex flex-row gap-3'>
                {w_size>1000?<img className='h-7 cursor-pointer' src={hamburgerIcon} alt="error" onClick={() => { dispatch(toggleMenu()); }} />:""}
                <img className='h-7 w-16 cursor-pointer' src={ytLogo} alt="yt-logo" onClick={() => { navigate("/") }} />
            </div>
            {/* Middle Section */}
            <SearchBar />
            <div className='flex flex-row gap-5'>
                <img className="cursor-pointer h-7" style={{ filter: darkMode ? 'invert(100%)' : 'invert(0%)' }} title={darkMode ? "Light Mode" : "Dark Mode"} src={darkMode ? lightModeIcon : darkModeIcon} alt="error" onClick={() => { dispatch(toggleTheme()) }} />
                {w_size>1000?<img title='user' className='h-7' src={userProfileIcon} alt="user-icon" />:""}
            </div>
        </div>
    )
}

export default Header