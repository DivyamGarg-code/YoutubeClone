import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { YT_Search_URL, searchIcon } from '../utils/constants';
import { addSearchQuery } from '../utils/searchSlice';
import { useNavigate } from 'react-router-dom';
import useThemeColor from '../hooks/useThemeColor';

function SearchBar() {
    const themeColor=useThemeColor();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const getSearchList = useSelector((store) => store.search.cachedResult);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const dispatch = useDispatch();
    // const searchQuery = searchQuery.trim();
    const cnt = useRef(0);
    const n = useRef(0);
    const keyFlag = useRef(true);
    const keyList = useRef([]);
    const keySearch = useRef("");
    useEffect(() => {

        // make an API call after every keypress if the time difference between the 2 consecutive keystrokes is greater than 200ms and if it is less, then decline the API call
        if (!getSearchList[searchQuery] && searchQuery.length !== 0 && keyFlag.current === true) { // if not exist in redux store then you need to call the API
            console.log(keyFlag.current);
            const timer = setTimeout(() => getSearchSuggestions(), 200);
            return () => {
                clearInterval(timer); // Clear the interval to avoid any kind of memory leaks
            }
        }
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        // console.log("Search Query ", searchQuery);
        const data = await fetch(YT_Search_URL + searchQuery);
        const json = await data.json();
        dispatch(addSearchQuery([json[0], json[1]]));
    }

    const getSearchResultVideos = (searchName) => {
        setSearchQuery(searchName);
        setShowSuggestions(false);
        navigate(`/search_results?search_query=${searchName}`);
    }

    const searchDropdownKeyTrack = (e) => {
        if (keyFlag.current && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
            // console.log("On key Down",keySearch.current.value);
            keySearch.current = searchQuery;
            keyFlag.current = false;
            keyList.current = getSearchList[[searchQuery]];
            n.current = getSearchList[[searchQuery]].length + 1;
            // console.log("On key Down",getSearchList[[searchQuery].length]);
        }
        if (!keyList.current.length === 0) {
            return
        }
        // const n=getSearchList[searchQuery].length+1;
        if (e.key === "ArrowDown") {
            cnt.current = (cnt.current + 1) % n.current;
            // console.log(cnt.current);
        }
        if (e.key === "ArrowUp") {
            cnt.current = (n.current + cnt.current - 1) % n.current;
            // console.log(cnt.current);
        }
        if ((cnt.current - 1) === -1) {
            console.log(cnt.current, keySearch.current);
            setSearchQuery(keySearch.current);
        } else {
            console.log(cnt.current, keyList.current[cnt.current - 1]);
            setSearchQuery(keyList.current[cnt.current - 1]);
        }
        // console.log(cnt.current);
    }
    return (
        <div className='w-full max-w-[500px] relative'>
            <form className='flex flex-row w-full'>
                <input
                    className="px-2 py-1 border border-r-0 w-full border-gray-400 focus:outline-none focus:border-gray-800 focus:border-1 rounded-tl-full rounded-bl-full"
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => {
                        const { value } = e.target;
                        console.log("Value ",value);
                        // --------- Reseting --------------
                        keyList.current = [];
                        keyFlag.current = true;
                        keySearch.current = value;
                        cnt.current = 0;
                        n.current = 0;
                        // --------------------------------
                        setSearchQuery(value);
                    }}
                    onFocus={() => { setShowSuggestions(true) }}
                    // onBlur={() => { setShowSuggestions(false) }}
                    onKeyDown={(e) => { searchDropdownKeyTrack(e) }}
                />
                <button title="Search" className='bg-gray-200 px-2 hover:bg-gray-300 border border-gray-400 rounded-tr-full rounded-br-full flex justify-center items-center' onClick={(e) => { e.preventDefault(); getSearchResultVideos(searchQuery.trim()); }}><img className="h-7" src={searchIcon} alt="error" /></button>
            </form>
            {/* Search Suggestions List */}

            {showSuggestions && getSearchList[keySearch.current] && <div className='absolute mt-1 bg-white w-full max-w-[457px] py-2 rounded-br-lg rounded-bl-lg shadow-lg z-10'>
                {getSearchList[keySearch.current].length ? getSearchList[keySearch.current].map((searchName, index) => {
                    return <li key={`${searchName}${index}`} className={`p-2 hover:bg-gray-400 flex gap-2 items-center cursor-pointer ${cnt.current === (index + 1)?'bg-gray-600':'bg-white'}`} onMouseDown={() => { getSearchResultVideos(searchName) }}>
                        <img className="h-5" src={searchIcon} alt="searchIcon" />
                        <span>{searchName}</span>
                    </li>
                }) : <span className='p-2 px-4 w-full italic text-xs'>No Search Results</span>}
            </div>}
        </div>
    )
}

export default SearchBar