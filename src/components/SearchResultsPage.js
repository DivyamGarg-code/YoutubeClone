import React, { useState,useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Search_List_URL, generateUniqueKey } from '../utils/constants';
import { useSelector, useDispatch } from 'react-redux'
import { addSearchResultList } from '../utils/appSlice';
import { SearchedVideoCard } from './VideoCard';
import { ShimmerWatchResults } from './Shimmer.js';

function SearchResultsPage() {
    // const dispatch = useDispatch();
    // const searchedVideosList = useSelector((store) => store.app.searchResultList);
    const [searchedVideosList, setSearchedVideosList] = useState([]);
    const [loading,setLoading]=useState(true);
    // Search_List_URL
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search_query');
    console.log(location, searchParams, searchQuery);
    
    const getSearchResultVideos = async () => {
        const data = await fetch(Search_List_URL + searchQuery);
        const json = await data.json();
        const videoList=json.items.filter((video)=>video.id.kind==="youtube#video");
        // console.log(videoList);
        setLoading(false);
        setSearchedVideosList(videoList);
        // dispatch(addSearchResultList(videoList));
    }

    useEffect(() => {
        console.log(location.search);
        getSearchResultVideos();
    }, [location.search])
    
    if(loading){
        return <ShimmerWatchResults/>
    }
    return (
        searchedVideosList.length !== 0 && <div className='flex gap-6 justify-start flex-wrap w-full p-4'>
            {/* <SearchedVideoCard info={searchedVideosList[0]} /> */}
            {searchedVideosList.map((video) => {
                return <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`} className='h-fit w-full'><SearchedVideoCard info={video} /></Link>
            })}
        </div>
    );
}

export default SearchResultsPage;
