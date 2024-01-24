import React, { useState, useEffect, useRef } from 'react'
import { faker } from '@faker-js/faker';
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateUniqueKey } from '../utils/constants';

function LiveChat() {
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);
    const [isMounted, setIsMounted] = useState(true); // Mountining / Unmounting the setInterval
    const chatMsg = useRef("");
    useEffect(() => {
        const i = setInterval(() => {
            const randomName = faker.internet.userName();
            const randomMessage = faker.lorem.sentence();
            const randomId = generateUniqueKey();
            console.log("API Polling");
            dispatch(addMessage({
                id: randomId,
                name: randomName,
                message: randomMessage
            }));
        }, 1000)
        if (isMounted === false) { // Disabling the Live Chat
            console.log("The set interval is cleared and button clicked");
            clearInterval(i);
        }
        console.log("------------");
        return () => clearInterval(i); // To avoid any kind of memory leaks
    }, [isMounted]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const msg = chatMsg.current.value;
        console.log(msg);
        if(msg.trim(" ").length>0){
            const randomId=generateUniqueKey();
            dispatch(addMessage({
                id:randomId,
                name: "User",
                message: msg,
            }));
            chatMsg.current.value = "";
        }
        return;
    }
    return (
        <div className=' w-full shadow-lg rounded-lg relative md:max-w-[500px] h-[500px]'>
            <div className='absolute top-0 left-0 bg-slate-300 w-full p-3 rounded-tl-lg rounded-tr-lg shadow-lg flex flex-row justify-between items-center'>
                <span>Live Chat</span>
                <button onClick={() => setIsMounted(!isMounted)} className='bg-gray-400 p-2 w-fit rounded-lg'>{isMounted ? "Disable" : "Enable"}</button>
            </div>
            <div className=' h-[48px]'></div>
            {chatMessages.length !== 0 && <div className='h-[400px] overflow-auto flex flex-col-reverse gap-4 p-2 pt-8'>
                {chatMessages.map((msgObj) => {
                    return <ChatMessage key={msgObj.id} name={msgObj.name} message={msgObj.message} />
                })}
            </div>}
            <div className='absolute bottom-0 left-0 bg-slate-300 w-full p-3 rounded-tl-lg rounded-tr-lg shadow-lg flex flex-row justify-between items-center'>
                <form className="w-full" onSubmit={handleSubmit}>
                    <input
                        className="w-full outline-none border-b-2 bg-transparent border-blue-500 focus:border-blue-700 placeholder-gray-600"
                        type="text"
                        ref={chatMsg}
                        placeholder='Chat...' />
                </form>
            </div>
        </div>
    )
}

export default LiveChat

