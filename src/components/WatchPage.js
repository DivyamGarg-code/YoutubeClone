import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import { Video_Info_URL } from '../utils/constants';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import { scrollToTop } from '../utils/searchSlice';

function WatchPage() {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
        getVideoInfo();
        scrollToTop();
    }, [])
    const getVideoInfo = async () => {
        const data = await fetch(`${Video_Info_URL}${searchParams.get("v")}`);
        const json = await data.json();
        console.log(json);
    }
    return (
        <div className='p-6 max-w-screen w-full flex flex-col gap-6'>
            <div className='flex flex-row w-full justify-center gap-10 flex-wrap md:flex-nowrap'>
                <div className='w-[800px] h-[500px] rounded-lg'>
                    <iframe className='w-full h-full aspect-video rounded-lg' src={`https://www.youtube.com/embed/${searchParams.get("v")}?autoplay=1`} title="Moments We Can Never Forget Ft. Immature | Omkar, Chinmay, Naman, Rashmi, Kanikka | Prime Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <LiveChat />
            </div>
            <div className='flex flex-row w-full justify-center gap-10 md:gap-0'>
                <CommentsContainer />
                <div className='w-[0px] md:w-full max-w-[500px]'></div>
            </div>
        </div>
    )
}

export default WatchPage